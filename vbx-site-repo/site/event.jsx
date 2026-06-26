// Single event detail page. Reads slug from ?slug= query param.

function EventApp() {
  const { tweaks, set, active } = useTweaks();
  const accent = tweaks.accentOn ? `oklch(0.58 0.18 ${tweaks.accentHue})` : VBX.bone;
  React.useEffect(() => {
    document.documentElement.style.setProperty('--vbx-accent', accent);
    let s = document.getElementById('vbx-tweak-style');
    if (!s) { s = document.createElement('style'); s.id = 'vbx-tweak-style'; document.head.appendChild(s); }
    s.textContent = `[data-red] { background: ${accent} !important; }`;
  }, [accent]);

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || params.get('id') || UPCOMING[0].slug;
  const e = UPCOMING.find(x => x.slug === slug) || UPCOMING[0];

  // Also find neighbors in calendar order for nav.
  const idx = UPCOMING.findIndex(x => x.slug === e.slug);
  const prev = idx > 0 ? UPCOMING[idx - 1] : null;
  const next = idx >= 0 && idx < UPCOMING.length - 1 ? UPCOMING[idx + 1] : null;

  React.useEffect(() => {
    document.title = `VBX — ${e.title}`;
  }, [e.slug]);

  const soldOut = e.status === 'SOLD OUT';

  return (
    <>
      <Nav page="events" />

      {/* Breadcrumb */}
      <div className="vbx-section" style={{
        padding: '110px 32px 0', background: VBX.ink, color: VBX.bone,
      }}>
        <div className="vbx-breadcrumb" style={{
          fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2, opacity: 0.5,
          textTransform: 'uppercase', display: 'flex', gap: 10, alignItems: 'center',
        }}>
          <a href="index.html" style={{ color: VBX.bone, textDecoration: 'none' }}>VBX</a>
          <span>/</span>
          <a href="events.html" style={{ color: VBX.bone, textDecoration: 'none' }}>Events</a>
          <span>/</span>
          <span style={{ opacity: 0.75 }}>{e.slug}</span>
        </div>
      </div>

      {/* Hero: event artwork + metadata */}
      <section className="vbx-section" style={{
        background: VBX.ink, color: VBX.bone,
        padding: '40px 32px 80px',
      }}>
        <div className="vbx-meta-rail" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: `1px solid ${VBX.line}`, paddingBottom: 14, marginBottom: 40,
        }}>
          <MonoLabel opacity={0.7}>
            <RedSquare size={7} style={{ marginRight: 8, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
            Nº {String(UPCOMING.length - idx).padStart(3, '0')} · {e.day} {e.dateLabel}
          </MonoLabel>
          <MonoLabel opacity={0.55}>{e.status}</MonoLabel>
        </div>

        <div className="vbx-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Artwork */}
          <div className="vbx-event-artwork" style={{ border: `1px solid ${VBX.line}`, aspectRatio: '4/5', position: 'relative' }}>
            <Photo src={e.image && e.image.src} label={`${e.venue} · event artwork\n1200 × 1500\nphoto / poster: placeholder`} fit="cover" />
            {soldOut && (
              <div style={{
                position: 'absolute', top: 40, right: 30,
                transform: 'rotate(8deg)',
                border: `2px solid ${VBX.bone}`,
                padding: '10px 22px 8px',
                fontFamily: VBX.sans, fontWeight: 800, fontSize: 22,
                letterSpacing: 5, color: VBX.bone,
                background: 'rgba(10,10,10,0.5)', backdropFilter: 'blur(4px)',
              }}>SOLD OUT</div>
            )}
          </div>

          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <MonoLabel size={11} opacity={0.7}>{e.day} · {e.dateLabel} · {e.city}</MonoLabel>
              <div className="vbx-display-l" style={{
                fontFamily: VBX.sans, fontWeight: 900,
                fontSize: 'clamp(40px, 5.6vw, 96px)',
                letterSpacing: '-0.04em', lineHeight: 0.92, marginTop: 6, textWrap: 'balance',
              }}>{e.title}</div>
              <div style={{
                fontFamily: VBX.serif, fontWeight: 300, fontSize: 26,
                letterSpacing: -0.3, lineHeight: 1.25, marginTop: 16, textWrap: 'pretty', opacity: 0.8,
              }}>{e.venue} · {e.city}</div>
            </div>

            <div style={{
              fontFamily: VBX.sans, fontWeight: 400, fontSize: 18, lineHeight: 1.55, opacity: 0.85, maxWidth: 540,
              textWrap: 'pretty',
            }}>
              {e.blurb}
            </div>

            <div className="vbx-info-grid" style={{
              display: 'grid', gridTemplateColumns: '100px 1fr', gap: 14, rowGap: 16,
              borderTop: `1px solid ${VBX.line}`, paddingTop: 22,
              fontFamily: VBX.mono, fontSize: 12, letterSpacing: 1.4, lineHeight: 1.5,
            }}>
              <span style={{ opacity: 0.5 }}>DATE</span><span>{e.day} {e.dateLabel}</span>
              <span style={{ opacity: 0.5 }}>DOORS</span><span>{e.doors}</span>
              <span style={{ opacity: 0.5 }}>CLOSE</span><span>{e.close}</span>
              <span style={{ opacity: 0.5 }}>VENUE</span><span>{e.venue}, {e.city}</span>
              <span style={{ opacity: 0.5 }}>LINEUP</span>
              <div>
                {e.headliners.map((h, i) => <div key={i} style={{ fontFamily: VBX.sans, fontSize: 16, fontWeight: 500, letterSpacing: -0.2, lineHeight: 1.35 }}>{h}</div>)}
                {e.support.length > 0 && <div style={{ opacity: 0.55, marginTop: 6 }}>+ {e.support.join(' · ')}</div>}
              </div>
              {e.provider && <>
                <span style={{ opacity: 0.5 }}>TICKETS</span><span>via {e.provider}</span>
              </>}
              <span style={{ opacity: 0.5 }}>STATUS</span>
              <span>{soldOut && <RedSquare size={7} style={{ marginRight: 8, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />}{e.status}</span>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
              <TicketButton status={e.status} url={e.ticketUrl} provider={e.provider} buyUrl={e.buyUrl} />
              <button onClick={() => {
                if (navigator.share) navigator.share({ title: `VBX — ${e.title}`, url: window.location.href }).catch(()=>{});
                else navigator.clipboard?.writeText(window.location.href);
              }} style={{
                padding: '14px 18px', border: `1px solid ${VBX.line}`,
                fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
                textTransform: 'uppercase', color: VBX.bone, background: 'transparent', cursor: 'pointer',
              }}>Share</button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue block */}
      <section className="vbx-section vbx-section-pad" style={{
        background: VBX.ink, color: VBX.bone,
        padding: '60px 32px 80px',
        borderTop: `1px solid ${VBX.line}`,
      }}>
        <div className="vbx-section-header" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 32, alignItems: 'baseline',
          borderBottom: `1px solid ${VBX.line}`, paddingBottom: 18, marginBottom: 32 }}>
          <MonoLabel size={11} opacity={0.55}>Nº 02</MonoLabel>
          <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 36, letterSpacing: -1, lineHeight: 1 }}>The room</div>
          <MonoLabel size={11} opacity={0.55}>{e.venue} · {e.city}</MonoLabel>
        </div>
        <div className="vbx-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div style={{
            fontFamily: VBX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.4, letterSpacing: -0.2,
            maxWidth: 640, textWrap: 'pretty',
          }}>
            {venueCopy(e.venue)}
          </div>
          <div className="vbx-info-grid" style={{
            display: 'grid', gridTemplateColumns: '100px 1fr', gap: 12, rowGap: 14,
            fontFamily: VBX.mono, fontSize: 12, letterSpacing: 1.4, lineHeight: 1.5,
            alignSelf: 'start',
          }}>
            <span style={{ opacity: 0.5 }}>ADDRESS</span><span>{venueAddress(e.venue)}</span>
            <span style={{ opacity: 0.5 }}>CAPACITY</span><span>{venueCapacity(e.venue)}</span>
            <span style={{ opacity: 0.5 }}>SOUND</span><span>{venueSound(e.venue)}</span>
            <span style={{ opacity: 0.5 }}>MAP</span>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(`${e.venue} ${e.city}`)}`}
               target="_blank" rel="noopener"
               style={{ color: VBX.bone, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Open in Maps →
            </a>
          </div>
        </div>
      </section>

      {/* prev / next */}
      <section className="vbx-section vbx-section-pad" style={{
        background: VBX.ink, color: VBX.bone,
        padding: '60px 32px 100px', borderTop: `1px solid ${VBX.line}`,
      }}>
        <div className="vbx-neighbor-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {prev ? <NeighborCard e={prev} dir="prev" /> : <span />}
          {next ? <NeighborCard e={next} dir="next" /> : <span />}
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <a href="events.html" style={{
            padding: '14px 18px', border: `1px solid ${VBX.line}`,
            fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', color: VBX.bone, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <RedSquare size={7} /> All events
          </a>
        </div>
      </section>

      <Footer />
      <TweaksPanel tweaks={tweaks} set={set} active={active} />
    </>
  );
}

function NeighborCard({ e, dir }) {
  return (
    <a href={`event.html?slug=${e.slug}`} style={{
      display: 'block', padding: 24, border: `1px solid ${VBX.line}`,
      textDecoration: 'none', color: VBX.bone,
      textAlign: dir === 'next' ? 'right' : 'left',
    }}>
      <MonoLabel size={10} opacity={0.55}>{dir === 'prev' ? '← EARLIER' : 'NEXT →'}</MonoLabel>
      <div style={{ marginTop: 10, fontFamily: VBX.sans, fontWeight: 900, fontSize: 32, letterSpacing: -0.8, lineHeight: 1 }}>{e.venue}</div>
      <MonoLabel size={10} opacity={0.6} style={{ marginTop: 8 }}>{e.day} · {e.dateLabel} · {e.city}</MonoLabel>
      <div style={{ marginTop: 10, fontFamily: VBX.serif, fontWeight: 300, fontSize: 16, opacity: 0.75, lineHeight: 1.3 }}>{e.title}</div>
    </a>
  );
}

function venueCopy(v) {
  return ({
    BRET:     'BRET sits on a canal, doors open to daylight. Terrace, daylight sound system, record bar. Our first home in Amsterdam.',
    SHELTER:  'Shelter is the basement. Low ceilings, long room, one of the cleanest Funktion-One rigs in the city.',
    LOFI:     'LOFI is the precise one. Rectangular room, black walls, a system built for patience.',
    TILLATEC: 'Tillatec is the new one. An industrial shell in NDSM with a considered booking ear.',
    ISO:      'ISO is the local one. A small room that gets loud the way small rooms do.',
    FABRIC:   'Fabric, London. Room One. No explanation required.',
    UPLOAD:   'Upload Club, Barcelona. Sala A — long room, deep sound. Summer dates.',
  })[v] || 'A room we book with care.';
}
function venueAddress(v) {
  return ({
    BRET: 'Orlyplein 76, Amsterdam', SHELTER: 'Overhoeksplein 3, Amsterdam',
    LOFI: 'Basisweg 63, Amsterdam', TILLATEC: 'NDSM-Plein 85, Amsterdam',
    ISO: 'Polderweg 612, Amsterdam', FABRIC: '77A Charterhouse St, London',
    UPLOAD: 'Sala Upload, Barcelona',
  })[v] || '—';
}
function venueCapacity(v) {
  return ({ BRET: '350', SHELTER: '500', LOFI: '400', TILLATEC: '600', ISO: '250', FABRIC: '1,600', UPLOAD: '900' })[v] || '—';
}
function venueSound(v) {
  return ({ BRET: 'Custom terrace rig', SHELTER: 'Funktion-One F221', LOFI: 'Void Incubus', TILLATEC: 'Void Air Array',
    ISO: 'Custom stack', FABRIC: 'Martin Audio MLA', UPLOAD: 'd&b audiotechnik' })[v] || '—';
}

ReactDOM.createRoot(document.getElementById('root')).render(<EventApp />);
