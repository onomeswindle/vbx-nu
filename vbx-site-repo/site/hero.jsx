// Home hero — confident brand statement + next show as a poster object.
// Slim: Home is NOT the events listing.

function Hero({ next }) {
  return (
    <header id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      background: VBX.ink, color: VBX.bone,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Ambient artwork — the next show's flyer blurred into a colour field. */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {next.image && next.image.src && (
          <img src={next.image.src} alt="" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', transform: 'scale(1.7)',
            filter: 'blur(40px) brightness(0.55) saturate(1.25)',
          }} />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.66), rgba(10,10,10,0.84))',
        }} />
      </div>

      {/* Centered composition. */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px 24px 64px',
      }}>
        <img src="site/assets/vbx-white.png" alt="VBX" style={{
          width: 'clamp(72px, 8vw, 104px)', height: 'auto',
          filter: 'drop-shadow(0 2px 30px rgba(0,0,0,0.5))',
        }} />

        <div style={{ width: 64, height: 1, background: 'rgba(232,227,216,0.4)', margin: '34px 0' }} />

        <div style={{ fontFamily: VBX.mono, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.7 }}>
          Next — {next.day} {next.dateLabel}
        </div>

        <div style={{
          fontFamily: VBX.sans, fontWeight: 600,
          fontSize: 'clamp(32px, 4.6vw, 60px)',
          letterSpacing: '-0.025em', lineHeight: 1.0,
          marginTop: 14, maxWidth: 900, textWrap: 'balance',
        }}>{next.title}</div>

        <div style={{
          fontFamily: VBX.serif, fontWeight: 300,
          fontSize: 'clamp(15px, 1.6vw, 19px)', opacity: 0.8, marginTop: 12,
        }}>{next.venue} · {next.city}</div>

        <div style={{ display: 'flex', gap: 10, marginTop: 30 }}>
          <TicketButton status={next.status} url={next.ticketUrl} provider={next.provider} buyUrl={next.buyUrl} />
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
