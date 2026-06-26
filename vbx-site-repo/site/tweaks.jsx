// Tweaks panel — floating bottom-right. Only visible in tweak mode.
// Exposes: accent hue (red ↔ orange), hero density, light/dark for Records/About split,
// headline weight (for body-serif vs grotesque feel).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 14,
  "accentOn": true,
  "density": "editorial",
  "headlineStyle": "grotesque",
  "showGrid": false,
  "invertMidsection": true
}/*EDITMODE-END*/;

function useTweaks() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', onMsg);
    // announce available AFTER listener is live
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const set = (patch) => {
    setTweaks(t => {
      const next = { ...t, ...patch };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
      return next;
    });
  };

  return { tweaks, set, active };
}

function TweaksPanel({ tweaks, set, active }) {
  if (!active) return null;
  return (
    <div className="vbx-tweaks-panel" style={{
      position: 'fixed', right: 20, bottom: 20, zIndex: 100,
      width: 300, padding: 18,
      background: VBX.ink, color: VBX.bone,
      border: `1px solid ${VBX.bone}`,
      fontFamily: VBX.mono, fontSize: 11, letterSpacing: 1.2,
      overflowY: 'auto',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${VBX.line}`, paddingBottom: 10, marginBottom: 14,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <RedSquare size={7} /> TWEAKS
        </span>
        <span style={{ opacity: 0.5 }}>VBX.SITE</span>
      </div>

      <Row label="Accent hue">
        <input type="range" min="0" max="360" step="1" value={tweaks.accentHue}
          onChange={(e) => set({ accentHue: +e.target.value })}
          style={{ width: 140 }} />
        <span style={{ opacity: 0.6, width: 36, textAlign: 'right' }}>{tweaks.accentHue}°</span>
      </Row>

      <Row label="Red accent">
        <Toggle on={tweaks.accentOn} onClick={() => set({ accentOn: !tweaks.accentOn })} />
      </Row>

      <Row label="Density">
        {['tight', 'editorial', 'airy'].map(d => (
          <Chip key={d} active={tweaks.density === d} onClick={() => set({ density: d })}>{d}</Chip>
        ))}
      </Row>

      <Row label="Headlines">
        {[['grotesque', 'Inter'], ['serif', 'Serif']].map(([k, l]) => (
          <Chip key={k} active={tweaks.headlineStyle === k} onClick={() => set({ headlineStyle: k })}>{l}</Chip>
        ))}
      </Row>

      <Row label="Light midsection">
        <Toggle on={tweaks.invertMidsection} onClick={() => set({ invertMidsection: !tweaks.invertMidsection })} />
      </Row>

      <Row label="Grid overlay">
        <Toggle on={tweaks.showGrid} onClick={() => set({ showGrid: !tweaks.showGrid })} />
      </Row>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: 10, padding: '8px 0',
    }}>
      <span style={{ opacity: 0.6, textTransform: 'uppercase' }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{children}</span>
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '5px 9px', fontFamily: VBX.mono, fontSize: 10, letterSpacing: 1.2,
      textTransform: 'uppercase', cursor: 'pointer',
      background: active ? VBX.bone : 'transparent',
      color: active ? VBX.ink : VBX.bone,
      border: `1px solid ${active ? VBX.bone : VBX.line}`,
    }}>{children}</button>
  );
}

function Toggle({ on, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 34, height: 18, position: 'relative',
      background: on ? VBX.bone : 'transparent',
      border: `1px solid ${VBX.bone}`, cursor: 'pointer', padding: 0,
    }}>
      <span style={{
        position: 'absolute', top: 1, left: on ? 17 : 1,
        width: 14, height: 14,
        background: on ? VBX.ink : VBX.bone,
        transition: 'left 120ms ease',
      }} />
    </button>
  );
}

function GridOverlay() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 90,
      padding: '0 32px',
    }}>
      <div style={{
        height: '100%', display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)', gap: 12,
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ background: 'rgba(200,54,47,0.06)', borderLeft: '1px solid rgba(200,54,47,0.18)' }} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { useTweaks, TweaksPanel, GridOverlay });
