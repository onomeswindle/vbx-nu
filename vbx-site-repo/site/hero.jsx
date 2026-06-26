// Home hero — confident brand statement + next show as a poster object.
// Slim: Home is NOT the events listing.

function Hero({ next }) {
  return (
    <header id="top" className="vbx-hero-pad" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '140px 32px 48px',
      background: VBX.ink, color: VBX.bone,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div className="vbx-meta-rail" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${VBX.line}`, paddingBottom: 18, marginBottom: 80,
      }}>
        <MonoLabel opacity={0.7}>
          <RedSquare size={8} style={{ marginRight: 10, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
          AMSTERDAM · SINCE 2012
        </MonoLabel>
      </div>

      <div className="vbx-grid-2 vbx-hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
        gap: 64, alignItems: 'start', flex: 1,
      }}>
        <div>
          <div className="vbx-display-xl" style={{
            fontFamily: VBX.sans, fontWeight: 900,
            fontSize: 'clamp(84px, 11vw, 180px)',
            letterSpacing: '-0.04em', lineHeight: 0.92,
            textWrap: 'balance',
          }}>
            Booking,<br />
            curation,<br />
            records.
          </div>

          <div style={{
            marginTop: 36, maxWidth: 480,
            fontFamily: VBX.sans, fontWeight: 500,
            fontSize: 20, lineHeight: 1.4, letterSpacing: -0.2,
            opacity: 0.7, textWrap: 'pretty',
          }}>
            Not a label. Not an agency — a booking &amp; curation brand from Amsterdam.
          </div>
        </div>

        <aside style={{
          border: `1px solid ${VBX.line}`,
          padding: 24, display: 'flex', flexDirection: 'column',
          background: 'rgba(232,227,216,0.02)',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: 14, borderBottom: `1px solid ${VBX.line}`, marginBottom: 18,
          }}>
            <MonoLabel opacity={0.7}>
              <RedSquare size={7} style={{ marginRight: 8, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
              Next up
            </MonoLabel>
            <MonoLabel opacity={0.55}>{next.status}</MonoLabel>
          </div>

          <MonoLabel size={10} opacity={0.55}>{next.day} · {next.dateLabel}</MonoLabel>

          <div className="vbx-display-l" style={{
            fontFamily: VBX.sans, fontWeight: 900,
            fontSize: 'clamp(40px, 4.4vw, 72px)',
            letterSpacing: '-0.03em', lineHeight: 0.92,
            marginTop: 10, marginBottom: 12, textWrap: 'balance',
          }}>{next.title}</div>

          <div style={{
            fontFamily: VBX.serif, fontWeight: 300, fontSize: 18, lineHeight: 1.3,
            opacity: 0.75, marginBottom: 18,
          }}>{next.venue} · {next.city}</div>

          <div style={{ marginBottom: 18, borderTop: `1px solid ${VBX.line}`, borderBottom: `1px solid ${VBX.line}`, background: VBX.ink, display: 'flex', justifyContent: 'center' }}>
            <img
              src={next.image && next.image.src}
              alt={next.image && next.image.label}
              style={{ maxWidth: '100%', maxHeight: 420, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            <TicketButton status={next.status} url={next.ticketUrl} provider={next.provider} buyUrl={next.buyUrl} />
          </div>
        </aside>
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
