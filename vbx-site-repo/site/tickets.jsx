// Tickets — the fast path from "I want a ticket" to checkout.
// Sits before Events in the nav: a flat index of every show currently on sale,
// each row jumping straight to its shop (or RA listing as fallback).

function TicketsApp() {
  const onSale = UPCOMING
    .filter((e) => e.status === 'ON SALE' && (e.buyUrl || e.ticketUrl))
    .slice()
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));

  return (
    <>
      <Nav page="tickets" />

      {/* Hero */}
      <header className="vbx-section vbx-hero-pad" style={{
        padding: '140px 32px 60px', background: VBX.ink, color: VBX.bone,
      }}>
        <div className="vbx-meta-rail" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: `1px solid ${VBX.line}`, paddingBottom: 18, marginBottom: 60,
        }}>
          <MonoLabel opacity={0.7}>
            <RedSquare size={8} style={{ marginRight: 10, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
            TICKETS — {onSale.length} ON SALE
          </MonoLabel>
          <MonoLabel opacity={0.55}>Updated {new Date().toISOString().slice(0, 10)}</MonoLabel>
        </div>

        <div className="vbx-display-xl" style={{
          fontFamily: VBX.sans, fontWeight: 900,
          fontSize: 'clamp(80px, 12vw, 200px)', letterSpacing: '-0.04em', lineHeight: 0.85,
        }}>Tickets</div>
        <div style={{
          fontFamily: VBX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.4,
          marginTop: 24, maxWidth: 640, opacity: 0.8,
        }}>
          Every VBX show on sale right now, straight to checkout.{' '}
          <a href="events.html" style={{ borderBottom: `1px solid ${VBX.bone}`, textDecoration: 'none' }}>See the full calendar →</a>
        </div>
      </header>

      {/* On-sale list */}
      <section className="vbx-section vbx-section-pad" style={{
        background: VBX.ink, color: VBX.bone, padding: '24px 32px 120px',
        borderTop: `1px solid ${VBX.line}`,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: `1px solid ${VBX.line}`, paddingBottom: 16, marginBottom: 8,
        }}>
          <MonoLabel opacity={0.75}>On sale now</MonoLabel>
          <MonoLabel opacity={0.5}>{onSale.length} {onSale.length === 1 ? 'show' : 'shows'}</MonoLabel>
        </div>

        {onSale.length === 0 ? (
          <div style={{ padding: '40px 0', borderBottom: `1px solid ${VBX.line}`,
            fontFamily: VBX.serif, fontWeight: 300, fontSize: 22, opacity: 0.55 }}>
            Nothing on sale right now — check the{' '}
            <a href="events.html" style={{ borderBottom: `1px solid ${VBX.bone}`, textDecoration: 'none' }}>full calendar</a>.
          </div>
        ) : (
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {onSale.map((e, i) => (
              <li key={e.id} className="vbx-ticket-row" style={{
                display: 'grid', gridTemplateColumns: '64px 150px 1fr auto', gap: 24,
                alignItems: 'center', padding: '26px 0', borderBottom: `1px solid ${VBX.line}`,
              }}>
                <MonoLabel size={10} opacity={0.4}>{String(i + 1).padStart(2, '0')}</MonoLabel>
                <div>
                  <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 26, letterSpacing: -0.6, lineHeight: 1 }}>{e.dateLabel}</div>
                  <MonoLabel size={10} opacity={0.55} style={{ marginTop: 6 }}>{e.day} · {e.city}</MonoLabel>
                </div>
                <div>
                  <div style={{ fontFamily: VBX.sans, fontWeight: 600, fontSize: 20, letterSpacing: -0.3, lineHeight: 1.2 }}>{e.title}</div>
                  <MonoLabel size={10} opacity={0.5} style={{ marginTop: 6 }}>{e.venue}</MonoLabel>
                </div>
                <TicketButton status={e.status} url={e.ticketUrl} provider={e.provider} buyUrl={e.buyUrl} />
              </li>
            ))}
          </ol>
        )}
      </section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TicketsApp />);
