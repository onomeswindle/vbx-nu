// Home hero — confident brand statement + next show as a poster object.
// Slim: Home is NOT the events listing.

function Hero() {
  // Fixed backdrop — BRET 24.10 flyer (RA). Cropped from the top + scrimmed so the
  // small "ade" corner badge is hidden, lightly blurred and darkened for legibility.
  const BACKDROP = 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vZTZkMWIyMGM2OTY1ZmU5MGY3MmQxOTlhMTdiNWNmNTBkZDdjMGZhNi5wbmc=';
  return (
    <header id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      background: VBX.ink, color: VBX.bone,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img src={BACKDROP} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '50% 82%', transform: 'scale(1.06)',
          filter: 'blur(9px) brightness(0.6) saturate(1.08)',
        }} />
        {/* Heavy scrim at the very top hides the flyer's top-corner badge. */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.5) 20%, rgba(10,10,10,0.42) 58%, rgba(10,10,10,0.7) 100%)',
        }} />
        {/* Centre vignette for text contrast. */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 52%, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.12) 46%, rgba(10,10,10,0) 72%)',
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px 24px 72px',
      }}>
        <img src="site/assets/vbx-white.png" alt="VBX" style={{
          width: 'clamp(140px, 18vw, 260px)', height: 'auto',
          filter: 'drop-shadow(0 4px 44px rgba(0,0,0,0.6))',
        }} />
        <div style={{
          marginTop: 24,
          fontFamily: VBX.mono, fontSize: 'clamp(12px, 1.5vw, 16px)',
          letterSpacing: 7, textTransform: 'uppercase', opacity: 0.92,
        }}>
          Curation · Records
        </div>
      </div>
    </header>
  );
}

function TicketButton({ status, url, provider, buyUrl }) {
  const soldOut = status === 'SOLD OUT';
  const announce = status === 'ANNOUNCEMENT SOON';
  if (soldOut) return <span style={{
    padding: '14px 18px', border: `1px solid ${VBX.line}`,
    fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
    textTransform: 'uppercase', color: VBX.mute,
  }}>Sold out</span>;
  if (announce) return <span style={{
    padding: '14px 18px', border: `1px dashed ${VBX.line}`,
    fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
    textTransform: 'uppercase', color: VBX.mute,
  }}>TBA</span>;

  // When there's a direct checkout (weeztix etc), show TWO buttons: primary
  // "Tickets" points to the shop, secondary "RA page" keeps the listing.
  const primaryUrl = buyUrl || url;
  return (
    <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap' }}>
      <a href={primaryUrl} target="_blank" rel="noopener" style={{
        padding: '14px 18px', background: VBX.bone, color: VBX.ink,
        fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
        textTransform: 'uppercase', textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center', gap: 10,
      }}>
        <RedSquare size={7} /> Tickets
      </a>
      {buyUrl && url && url !== '#' && (
        <a href={url} target="_blank" rel="noopener" style={{
          padding: '14px 18px', border: `1px solid ${VBX.line}`,
          color: 'inherit',
          fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
          textTransform: 'uppercase', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 10,
        }}>
          RA page ↗
        </a>
      )}
    </div>
  );
}

// Home upcoming — minimal text list teasing the next shows; full list on /events.
function NextThree({ events }) {
  const list = events.slice(0, 5);
  return (
    <section id="next-three" data-screen-label="Upcoming" className="vbx-section vbx-section-pad" style={{
      background: VBX.ink, color: VBX.bone,
      padding: '120px 32px', borderTop: `1px solid ${VBX.line}`,
    }}>
      <SectionHeader number="01" label="Upcoming" sub="next on the calendar" count={<a href="events.html" style={{ color: VBX.bone, textDecoration: 'none' }}>All events →</a>} />
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {list.map(e => (
          <li key={e.id}>
            <a href="events.html" className="vbx-up-row" style={{
              display: 'grid', gridTemplateColumns: '150px 1fr auto', gap: 24, alignItems: 'baseline',
              padding: '24px 0', borderTop: `1px solid ${VBX.line}`,
              color: VBX.bone, textDecoration: 'none',
            }}>
              <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 26, letterSpacing: -0.6, lineHeight: 1 }}>{e.dateLabel}</div>
              <div>
                <div style={{ fontFamily: VBX.sans, fontWeight: 500, fontSize: 21, letterSpacing: -0.2, lineHeight: 1.2 }}>{e.title}</div>
                <div style={{ fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2, opacity: 0.5, marginTop: 8 }}>{e.venue} · {e.city}</div>
              </div>
              <MonoLabel size={10} opacity={0.6}>{e.status}</MonoLabel>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

Object.assign(window, { Hero, TicketButton, NextThree });
