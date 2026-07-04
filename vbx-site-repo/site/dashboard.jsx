// Programming dashboard — internal tool. Not linked from the public site.
// Guestlist manager: bulk-paste many names at once, tidy the list, then copy
// the whole thing back out in one go to drop into Attendium.

const { useState, useEffect, useRef, useMemo } = React;

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------

// Pull a plus-ones count off the tail of a single entry. Understands the shapes
// people actually type: "John Doe +2", "John Doe (2)", "John Doe x2",
// "John Doe plus 2". Returns { name, plus }.
function parseEntry(raw) {
  let s = String(raw).replace(/\s+/g, ' ').trim();
  if (!s) return null;
  let plus = 0;
  // +2  /  + 2
  let m = s.match(/\s*\+\s*(\d{1,3})\s*$/);
  if (m) { plus = parseInt(m[1], 10); s = s.slice(0, m.index).trim(); }
  if (!plus) {
    // (2)  /  [2]
    m = s.match(/\s*[\(\[]\s*(\d{1,3})\s*[\)\]]\s*$/);
    if (m) { plus = parseInt(m[1], 10); s = s.slice(0, m.index).trim(); }
  }
  if (!plus) {
    // x2  /  ×2
    m = s.match(/\s*[x×]\s*(\d{1,3})\s*$/i);
    if (m) { plus = Math.max(0, parseInt(m[1], 10) - 1); s = s.slice(0, m.index).trim(); }
  }
  if (!plus) {
    // plus 2
    m = s.match(/\s+plus\s+(\d{1,3})\s*$/i);
    if (m) { plus = parseInt(m[1], 10); s = s.slice(0, m.index).trim(); }
  }
  // Strip a leading bullet / list marker / index number.
  s = s.replace(/^\s*(?:[-•*·]|\d{1,3}[.)])\s+/, '').trim();
  if (!s) return null;
  if (!isFinite(plus) || plus < 0) plus = 0;
  if (plus > 99) plus = 99;
  return { name: s, plus };
}

// Split a pasted blob into individual entries. Newlines are the primary
// separator; commas / semicolons / tabs split further so a single comma-joined
// line still works.
function splitPaste(text) {
  return String(text)
    .split(/\r?\n/)
    .flatMap(line => line.split(/[,;\t]/))
    .map(x => x.trim())
    .filter(Boolean);
}

const normName = (n) => n.toLowerCase().replace(/\s+/g, ' ').trim();

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------

const storageKey = (id) => `vbx.guestlist.${id || 'default'}`;

function loadList(id) {
  try {
    const raw = localStorage.getItem(storageKey(id));
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr
      .map(g => ({ name: String(g.name || '').trim(), plus: Math.max(0, parseInt(g.plus, 10) || 0) }))
      .filter(g => g.name);
  } catch { return []; }
}

function saveList(id, list) {
  try { localStorage.setItem(storageKey(id), JSON.stringify(list)); } catch {}
}

// ---------------------------------------------------------------------------
// Clipboard (with a fallback for non-secure contexts)
// ---------------------------------------------------------------------------

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.setAttribute('readonly', '');
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch { return false; }
}

// ---------------------------------------------------------------------------
// Small UI atoms tuned to the VBX palette
// ---------------------------------------------------------------------------

function Btn({ children, onClick, kind = 'default', disabled, style, title }) {
  const base = {
    fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
    padding: '11px 16px', cursor: disabled ? 'not-allowed' : 'pointer',
    border: `1px solid ${VBX.line}`, background: 'transparent', color: VBX.bone,
    display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
    opacity: disabled ? 0.4 : 1, transition: 'background 120ms ease, opacity 120ms ease',
  };
  const kinds = {
    default: {},
    primary: { background: VBX.bone, color: VBX.ink, border: `1px solid ${VBX.bone}` },
    danger: { color: VBX.red, borderColor: 'rgba(200,54,47,0.5)' },
  };
  return (
    <button type="button" title={title} onClick={disabled ? undefined : onClick} disabled={disabled}
      style={{ ...base, ...(kinds[kind] || {}), ...style }}>
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Guestlist manager
// ---------------------------------------------------------------------------

function Guestlist() {
  const events = (typeof window !== 'undefined' && window.UPCOMING) || [];

  // Event selection. '' = a free-typed custom list.
  const [eventId, setEventId] = useState(() => {
    try { return localStorage.getItem('vbx.guestlist.lastEvent') || (events[0] && events[0].id) || ''; }
    catch { return (events[0] && events[0].id) || ''; }
  });
  const [customName, setCustomName] = useState(() => {
    try { return localStorage.getItem('vbx.guestlist.customName') || ''; } catch { return ''; }
  });

  const selectedEvent = events.find(e => e.id === eventId) || null;
  // Storage key: real events key on their id; custom lists share one bucket.
  const listKey = eventId || 'custom';

  const [list, setList] = useState(() => loadList(listKey));
  const [paste, setPaste] = useState('');
  const [copyFormat, setCopyFormat] = useState('compact'); // compact | expanded | plain
  const [copied, setCopied] = useState('');
  const [note, setNote] = useState('');
  const copyTimer = useRef(null);
  const noteTimer = useRef(null);

  // Reload the list whenever the active event changes.
  useEffect(() => {
    setList(loadList(listKey));
    try { localStorage.setItem('vbx.guestlist.lastEvent', eventId); } catch {}
  }, [listKey, eventId]);

  // Persist on every change.
  useEffect(() => { saveList(listKey, list); }, [listKey, list]);
  useEffect(() => { try { localStorage.setItem('vbx.guestlist.customName', customName); } catch {} }, [customName]);

  const flashNote = (msg) => {
    setNote(msg);
    clearTimeout(noteTimer.current);
    noteTimer.current = setTimeout(() => setNote(''), 2600);
  };

  const totals = useMemo(() => {
    const heads = list.reduce((n, g) => n + 1 + (g.plus || 0), 0);
    return { names: list.length, heads };
  }, [list]);

  // --- Add pasted names ------------------------------------------------------
  const addPaste = () => {
    const entries = splitPaste(paste).map(parseEntry).filter(Boolean);
    if (!entries.length) { flashNote('Nothing to add — paste some names first.'); return; }

    setList(prev => {
      const byName = new Map(prev.map(g => [normName(g.name), { ...g }]));
      let added = 0, merged = 0;
      for (const e of entries) {
        const key = normName(e.name);
        if (byName.has(key)) {
          // Same name pasted again — keep the larger plus-ones count.
          const g = byName.get(key);
          if (e.plus > g.plus) { g.plus = e.plus; merged++; }
        } else {
          byName.set(key, { name: e.name, plus: e.plus });
          added++;
        }
      }
      const skipped = entries.length - added - merged;
      const bits = [`${added} added`];
      if (merged) bits.push(`${merged} updated`);
      if (skipped > 0) bits.push(`${skipped} duplicate${skipped === 1 ? '' : 's'} skipped`);
      flashNote(bits.join(' · '));
      return Array.from(byName.values());
    });
    setPaste('');
  };

  // --- Row edits -------------------------------------------------------------
  const bumpPlus = (idx, delta) =>
    setList(prev => prev.map((g, i) => i === idx ? { ...g, plus: Math.max(0, Math.min(99, (g.plus || 0) + delta)) } : g));
  const removeAt = (idx) => setList(prev => prev.filter((_, i) => i !== idx));
  const sortAZ = () => setList(prev => [...prev].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })));
  const clearAll = () => {
    if (!list.length) return;
    if (!window.confirm(`Clear all ${list.length} name${list.length === 1 ? '' : 's'} from this list?`)) return;
    setList([]);
    flashNote('List cleared.');
  };

  // --- Copy out --------------------------------------------------------------
  const buildText = (fmt) => {
    if (fmt === 'expanded') {
      // One line per head — the guest, then "Name +1", "Name +2", …
      return list.flatMap(g => {
        const lines = [g.name];
        for (let i = 1; i <= (g.plus || 0); i++) lines.push(`${g.name} +${i}`);
        return lines;
      }).join('\n');
    }
    if (fmt === 'plain') {
      return list.map(g => g.name).join('\n');
    }
    // compact
    return list.map(g => g.plus ? `${g.name} +${g.plus}` : g.name).join('\n');
  };

  const doCopy = async (fmt) => {
    if (!list.length) { flashNote('List is empty — nothing to copy.'); return; }
    const text = buildText(fmt);
    const ok = await copyText(text);
    if (ok) {
      setCopied(fmt);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(''), 1800);
      flashNote(`Copied ${text.split('\n').length} line${text.split('\n').length === 1 ? '' : 's'} to clipboard.`);
    } else {
      flashNote('Copy failed — select the preview text and copy manually.');
    }
  };

  const onPasteKey = (e) => {
    // Cmd/Ctrl+Enter adds the pasted block.
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); addPaste(); }
  };

  const previewText = buildText(copyFormat);

  const cell = {
    fontFamily: VBX.sans, fontSize: 14, color: VBX.bone,
  };
  const inputStyle = {
    fontFamily: VBX.mono, fontSize: 13, letterSpacing: 0.5,
    background: 'rgba(255,255,255,0.03)', color: VBX.bone,
    border: `1px solid ${VBX.line}`, padding: '10px 12px', width: '100%',
    outline: 'none',
  };

  return (
    <div style={{ display: 'grid', gap: 28 }}>
      {/* Event picker ------------------------------------------------------ */}
      <div style={{ display: 'grid', gap: 12 }}>
        <MonoLabel size={11} spacing={2.5} opacity={0.6}>Event</MonoLabel>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <select value={eventId} onChange={(e) => setEventId(e.target.value)}
            style={{ ...inputStyle, width: 'auto', minWidth: 280, maxWidth: '100%', cursor: 'pointer' }}>
            {events.map(e => (
              <option key={e.id} value={e.id} style={{ background: VBX.ink }}>
                {e.dateLabel} · {e.title} — {e.venue}
              </option>
            ))}
            <option value="" style={{ background: VBX.ink }}>Custom list…</option>
          </select>
          {!eventId && (
            <input value={customName} onChange={(e) => setCustomName(e.target.value)}
              placeholder="Name this list (e.g. Artist guests)"
              style={{ ...inputStyle, width: 'auto', minWidth: 240, flex: '1 1 240px' }} />
          )}
        </div>
        {selectedEvent && (
          <MonoLabel size={10} spacing={2} opacity={0.4}>
            {selectedEvent.day} {selectedEvent.dateLabel} · {selectedEvent.city} · {selectedEvent.venue}
          </MonoLabel>
        )}
      </div>

      {/* Two-column workspace --------------------------------------------- */}
      <div className="vbx-guestlist-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start' }}>

        {/* LEFT: bulk paste in ------------------------------------------- */}
        <div style={{ display: 'grid', gap: 12, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
            <MonoLabel size={11} spacing={2.5} opacity={0.6}>Paste names</MonoLabel>
            <MonoLabel size={9} spacing={1.5} opacity={0.35}>one per line · "+2" for plus-ones</MonoLabel>
          </div>
          <textarea value={paste} onChange={(e) => setPaste(e.target.value)} onKeyDown={onPasteKey}
            placeholder={"Ada Lovelace\nJohn Doe +2\nGrace Hopper (1)\n…"}
            rows={12}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7, minHeight: 240 }} />
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={addPaste} disabled={!paste.trim()}>
              <RedSquare size={7} /> Add to guestlist
            </Btn>
            <Btn onClick={() => setPaste('')} disabled={!paste}>Clear box</Btn>
          </div>
        </div>

        {/* RIGHT: the live list ------------------------------------------ */}
        <div style={{ display: 'grid', gap: 12, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
            <MonoLabel size={11} spacing={2.5} opacity={0.6}>Guestlist</MonoLabel>
            <MonoLabel size={10} spacing={1.5} opacity={0.55}>
              {totals.names} name{totals.names === 1 ? '' : 's'} · {totals.heads} head{totals.heads === 1 ? '' : 's'}
            </MonoLabel>
          </div>

          <div style={{
            border: `1px solid ${VBX.line}`, minHeight: 240, maxHeight: 460, overflowY: 'auto',
            background: 'rgba(255,255,255,0.02)',
          }}>
            {list.length === 0 ? (
              <div style={{
                padding: '40px 20px', textAlign: 'center', color: VBX.mute,
                fontFamily: VBX.mono, fontSize: 11, letterSpacing: 1.5, lineHeight: 1.8,
              }}>
                No names yet.<br />Paste a list on the left to get started.
              </div>
            ) : list.map((g, i) => (
              <div key={i} className="vbx-guest-row" style={{
                display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 10, alignItems: 'center',
                padding: '10px 12px',
                borderBottom: i === list.length - 1 ? 'none' : `1px solid ${VBX.line}`,
              }}>
                <MonoLabel size={10} spacing={1} opacity={0.3} style={{ textAlign: 'right' }}>{i + 1}</MonoLabel>
                <div style={{ ...cell, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {g.name}
                  {g.plus > 0 && (
                    <span style={{ color: VBX.red, fontFamily: VBX.mono, fontSize: 12, marginLeft: 8 }}>+{g.plus}</span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <button type="button" onClick={() => bumpPlus(i, -1)} disabled={!g.plus}
                    title="Remove a plus-one"
                    style={stepBtn(!g.plus)}>−</button>
                  <button type="button" onClick={() => bumpPlus(i, 1)} title="Add a plus-one"
                    style={stepBtn(false)}>+</button>
                  <button type="button" onClick={() => removeAt(i)} title="Remove"
                    style={{ ...stepBtn(false), color: VBX.red, marginLeft: 4 }}>×</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Btn onClick={sortAZ} disabled={list.length < 2}>Sort A–Z</Btn>
            <Btn kind="danger" onClick={clearAll} disabled={!list.length}>Clear list</Btn>
          </div>
        </div>
      </div>

      {/* Copy-out bar ------------------------------------------------------ */}
      <div style={{
        borderTop: `1px solid ${VBX.line}`, paddingTop: 24, display: 'grid', gap: 16,
      }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <MonoLabel size={11} spacing={2.5} opacity={0.6}>Copy for Attendium</MonoLabel>
            <select value={copyFormat} onChange={(e) => setCopyFormat(e.target.value)}
              style={{ ...inputStyle, width: 'auto', cursor: 'pointer', padding: '8px 10px', fontSize: 11 }}>
              <option value="compact" style={{ background: VBX.ink }}>Compact — "Name +2"</option>
              <option value="expanded" style={{ background: VBX.ink }}>Expanded — one line per head</option>
              <option value="plain" style={{ background: VBX.ink }}>Names only — drop plus-ones</option>
            </select>
          </div>
          <Btn kind="primary" onClick={() => doCopy(copyFormat)} disabled={!list.length}>
            {copied === copyFormat ? 'Copied ✓' : (<><RedSquare size={7} /> Copy whole list</>)}
          </Btn>
        </div>

        {/* Preview of exactly what lands on the clipboard. */}
        <textarea readOnly value={previewText}
          onFocus={(e) => e.target.select()}
          placeholder="Your copy-ready list will preview here."
          rows={Math.min(10, Math.max(3, previewText.split('\n').length))}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7, opacity: list.length ? 0.9 : 0.5 }} />

        <div style={{ minHeight: 16 }}>
          {note && <MonoLabel size={10} spacing={1.5} opacity={0.7} color={VBX.red}>{note}</MonoLabel>}
        </div>
      </div>
    </div>
  );
}

function stepBtn(disabled) {
  return {
    fontFamily: VBX.mono, fontSize: 15, lineHeight: 1,
    width: 26, height: 26, padding: 0,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', color: VBX.bone,
    border: `1px solid ${VBX.line}`,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.3 : 0.85,
  };
}

// ---------------------------------------------------------------------------
// Page shell
// ---------------------------------------------------------------------------

function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', background: VBX.ink, color: VBX.bone }}>
      {/* Slim internal header — deliberately not the public marketing nav. */}
      <header style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '20px 32px', borderBottom: `1px solid ${VBX.line}`,
      }}>
        <RedSquare size={10} />
        <Wordmark size={22} color={VBX.bone} />
        <MonoLabel size={10} spacing={2.5} opacity={0.55} style={{ marginLeft: 8 }}>
          Programming Dashboard
        </MonoLabel>
      </header>

      <main className="vbx-section" style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 32px 96px' }}>
        <div style={{ marginBottom: 36 }}>
          <MonoLabel size={11} spacing={3} opacity={0.5}>Guestlist</MonoLabel>
          <h1 style={{
            fontFamily: VBX.sans, fontWeight: 900, fontSize: 'clamp(34px, 6vw, 54px)',
            letterSpacing: -1, lineHeight: 1, margin: '12px 0 0',
          }}>Guestlist manager</h1>
          <p style={{
            fontFamily: VBX.sans, fontSize: 15, lineHeight: 1.6, color: VBX.stone,
            maxWidth: 620, margin: '16px 0 0',
          }}>
            Paste a whole batch of names at once, tidy up plus-ones, then copy the
            entire list in one click to drop straight into Attendium. Everything is
            saved in this browser per event.
          </p>
        </div>

        <Guestlist />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Dashboard />);
