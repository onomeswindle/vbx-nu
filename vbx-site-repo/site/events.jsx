// Events page — priority surface.
// Upcoming chronological (next show most prominent) + past archive w/ venue + year filters.

function EventsApp() {
  const { tweaks, set, active } = useTweaks();
  const accent = tweaks.accentOn ? `oklch(0.58 0.18 ${tweaks.accentHue})` : VBX.bone;
  React.useEffect(() => {
    document.documentElement.style.setProperty('--vbx-accent', accent);
    let s = document.getElementById('vbx-tweak-style');
    if (!s) {s = document.createElement('style');s.id = 'vbx-tweak-style';document.head.appendChild(s);}
    s.textContent = `[data-red] { background: ${accent} !important; }`;
  }, [accent]);

  const [venueFilter, setVenueFilter] = React.useState('ALL');
  const [yearFilter, setYearFilter] = React.useState('ALL');
  const [monthFilter, setMonthFilter] = React.useState('ALL');

  const allVenues = ['ALL', ...VENUES];
  const years = Array.from(new Set(ARCHIVE.map((a) => a.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
  const allYears = ['ALL', ...years];
  const MONTH_LABELS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const allMonths = ['ALL', ...MONTH_LABELS];

  const monthOf = (iso) => MONTH_LABELS[Number(iso.slice(5, 7)) - 1];

  const pastFiltered = ARCHIVE.filter((a) => {
    if (venueFilter !== 'ALL' && a.venue !== venueFilter) return false;
    if (yearFilter !== 'ALL' && !a.date.startsWith(yearFilter)) return false;
    if (monthFilter !== 'ALL' && monthOf(a.date) !== monthFilter) return false;
    return true;
  });
  const upcomingFiltered = UPCOMING.filter((e) => {
    if (monthFilter !== 'ALL' && monthOf(e.date) !== monthFilter) return false;
    return true;
  });

  return (
    <>
      <Nav page="events" />

      {/* Hero — big headline + filters */}
      <header className="vbx-section vbx-hero-pad" style={{
        padding: '140px 32px 60px',
        background: VBX.ink, color: VBX.bone
      }}>
        <div className="vbx-meta-rail" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: `1px solid ${VBX.line}`, paddingBottom: 18, marginBottom: 60
        }}>
          <MonoLabel opacity={0.7}>
            <RedSquare size={8} style={{ marginRight: 10, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
            EVENTS — {UPCOMING.length} UPCOMING · {ARCHIVE.length} IN ARCHIVE
          </MonoLabel>
          <MonoLabel opacity={0.55}>Updated {new Date().toISOString().slice(0, 10)}</MonoLabel>
        </div>

        <div className="vbx-events-header" style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end'
        }}>
          <div>
            <div className="vbx-display-xl" style={{
              fontFamily: VBX.sans, fontWeight: 900,
              fontSize: 'clamp(80px, 12vw, 200px)',
              letterSpacing: '-0.04em', lineHeight: 0.85
            }}>Events</div>
            <div style={{
              fontFamily: VBX.serif, fontWeight: 300,
              fontSize: 24, lineHeight: 1.4, marginTop: 24, maxWidth: 620, opacity: 0.8
            }}>Every show we've booked, upcoming and past.

            </div>
          </div>

          {/* Filter rail — venue filter applies to both upcoming & past */}
          <div style={{
            borderTop: `1px solid ${VBX.line}`, paddingTop: 18,
            fontFamily: VBX.mono, fontSize: 11, letterSpacing: 1.4
          }}>
            <FilterRow label="Month" items={allMonths} value={monthFilter} onChange={setMonthFilter} />
          </div>
        </div>
      </header>

      {/* Featured next event — big poster */}
      {upcomingFiltered[0] &&
      <FeaturedNext e={upcomingFiltered[0]} />
      }

      {/* Upcoming list */}
      <section id="upcoming-list" data-screen-label="Upcoming list" className="vbx-section vbx-section-pad" style={{
        background: VBX.ink, color: VBX.bone, padding: '80px 32px',
        borderTop: `1px solid ${VBX.line}`
      }}>
        <SectionHeader number="01" label="Upcoming" count={`${upcomingFiltered.length} dates`} />
        {upcomingFiltered.length === 0 ?
        <EmptyRow text="No upcoming shows match the filter." /> :

        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {upcomingFiltered.slice(upcomingFiltered[0] ? 1 : 0).map((e, i) =>
          <EventLinkRow key={e.id} event={e} index={i + 2} />
          )}
            {upcomingFiltered.length === 1 &&
          <li style={{ padding: '32px 0', borderBottom: `1px solid ${VBX.line}`,
            fontFamily: VBX.mono, fontSize: 12, letterSpacing: 2, opacity: 0.55 }}>
                — END OF UPCOMING
              </li>
          }
          </ol>
        }
      </section>

      {/* Past / Archive */}
      <section id="past" data-screen-label="Past" className="vbx-section vbx-section-pad" style={{
        background: VBX.ink, color: VBX.bone, padding: '100px 32px',
        borderTop: `1px solid ${VBX.line}`
      }}>
        <SectionHeader number="02" label="Past" sub="the record, in order" count={`${pastFiltered.length} nights`} />

        {/* Year + Venue filters — scoped to past */}
        <div style={{
          borderTop: `1px solid ${VBX.line}`, marginTop: 4, marginBottom: 32,
          fontFamily: VBX.mono, fontSize: 11, letterSpacing: 1.4
        }}>
          <FilterRow label="Year" items={allYears} value={yearFilter} onChange={setYearFilter} />
          <FilterRow label="Venue" items={allVenues} value={venueFilter} onChange={setVenueFilter} />
        </div>

        {pastFiltered.length === 0 ?
        <EmptyRow text="Nothing in the archive matches." /> :

        <PastTable items={pastFiltered} />
        }
      </section>

      <Footer />
      <TweaksPanel tweaks={tweaks} set={set} active={active} />
      {tweaks.showGrid && <GridOverlay />}
    </>);

}

function FilterRow({ label, items, value, onChange, note }) {
  return (
    <div className="vbx-filter-row" style={{
      display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16,
      padding: '14px 0', borderBottom: `1px solid ${VBX.line}`, alignItems: 'baseline'
    }}>
      <div style={{ opacity: 0.5, textTransform: 'uppercase' }}>
        {label}{note && <span style={{ marginLeft: 6, opacity: 0.6 }}>{note}</span>}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {items.map((v) =>
        <button key={v} onClick={() => onChange(v)}
        style={{
          padding: '6px 10px', fontFamily: VBX.mono, fontSize: 10, letterSpacing: 1.4,
          textTransform: 'uppercase', cursor: 'pointer',
          background: value === v ? VBX.bone : 'transparent',
          color: value === v ? VBX.ink : VBX.bone,
          border: `1px solid ${value === v ? VBX.bone : VBX.line}`
        }}>{v}</button>
        )}
      </div>
    </div>);

}

function FeaturedNext({ e }) {
  const soldOut = e.status === 'SOLD OUT';
  return (
    <section className="vbx-section" style={{
      background: VBX.ink, color: VBX.bone,
      padding: '40px 32px 80px',
      borderTop: `1px solid ${VBX.line}`
    }}>
      <div className="vbx-meta-rail" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        borderBottom: `1px solid ${VBX.line}`, paddingBottom: 14, marginBottom: 28 }}>
        <MonoLabel opacity={0.7}>
          <RedSquare size={7} style={{ marginRight: 8, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />
          Next show
        </MonoLabel>
        <MonoLabel opacity={0.55}>{e.status}</MonoLabel>
      </div>

      <div className="vbx-grid-2" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
        <div className="vbx-event-artwork" style={{ aspectRatio: '4 / 5', maxHeight: 720 }}>
          <Photo src={e.image && e.image.src} label={e.image.label} fit="contain" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MonoLabel size={11} opacity={0.7}>{e.day} · {e.dateLabel}</MonoLabel>
          <div className="vbx-display-l" style={{
            fontFamily: VBX.sans, fontWeight: 900,
            fontSize: 'clamp(44px, 6vw, 104px)',
            letterSpacing: '-0.04em', lineHeight: 0.9, marginTop: 8, textWrap: 'balance'
          }}>{e.title}</div>
          <div style={{
            fontFamily: VBX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.3,
            marginTop: 18, maxWidth: 620, textWrap: 'pretty', opacity: 0.8
          }}>{e.venue} · {e.city}</div>
          <div style={{
            fontFamily: VBX.mono, fontSize: 13, letterSpacing: 1.4, lineHeight: 1.9,
            marginTop: 24, opacity: 0.85
          }}>
            {[...e.headliners].sort((a, b) => b.localeCompare(a)).map((h, i) =>
            <div key={i}>{h}</div>
            )}
            {e.support.length > 0 && <div style={{ opacity: 0.55, marginTop: 6 }}>+ {e.support.join(' · ')}</div>}
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', gap: 10, marginTop: 32 }}>
            <TicketButton status={e.status} url={e.ticketUrl} provider={e.provider} buyUrl={e.buyUrl} />
          </div>
        </div>
      </div>
    </section>);

}

function EventLinkRow({ event: e, index }) {
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const soldOut = e.status === 'SOLD OUT';
  return (
    <li style={{ borderBottom: `1px solid ${VBX.line}` }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        className="vbx-event-row"
        style={{
          display: 'grid',
          gridTemplateColumns: '72px 180px 140px 1fr auto',
          gap: 24, alignItems: 'center',
          width: '100%',
          padding: '28px 0',
          background: hover || open ? 'rgba(232,227,216,0.03)' : 'transparent',
          border: 'none',
          borderTop: open ? `1px solid ${VBX.line}` : '1px solid transparent',
          color: VBX.bone,
          textAlign: 'left',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'background 120ms'
        }}>
        <MonoLabel size={10} opacity={0.4}>{String(index).padStart(2, '0')}</MonoLabel>
        <div>
          <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 28, letterSpacing: -0.8, lineHeight: 1 }}>{e.dateLabel}</div>
          <MonoLabel size={10} opacity={0.55} style={{ marginTop: 6 }}>{e.day}</MonoLabel>
        </div>
        <div>
          <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 22, letterSpacing: -0.3, lineHeight: 1 }}>{e.venue}</div>
          <MonoLabel size={10} opacity={0.5} style={{ marginTop: 6 }}>{e.city}</MonoLabel>
        </div>
        <div>
          <div style={{ fontFamily: VBX.sans, fontWeight: 500, fontSize: 19, letterSpacing: -0.2, lineHeight: 1.3, opacity: hover || open ? 1 : 0.88 }}>{e.title}</div>
          <div style={{ fontFamily: VBX.serif, fontWeight: 300, fontSize: 15, opacity: 0.6, marginTop: 6, lineHeight: 1.3 }}>
            {e.headliners.join(' · ')}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <MonoLabel size={10} opacity={soldOut ? 0.5 : 0.9} color={soldOut ? VBX.mute : VBX.bone}>
            {soldOut && <RedSquare size={6} style={{ marginRight: 8, verticalAlign: 'middle', transform: 'translateY(-1px)' }} />}
            {e.status}
          </MonoLabel>
          <span style={{
            fontFamily: VBX.mono, fontSize: 18, opacity: 0.5,
            width: 14, textAlign: 'center',
            transform: open ? 'rotate(90deg)' : hover ? 'translateX(4px)' : 'none',
            transition: 'transform 160ms'
          }}>→</span>
        </div>
      </button>

      {open && <EventRowExpansion e={e} />}
    </li>);

}

// Expanded detail shown inline when an EventLinkRow is clicked open.
// Mirrors the layout of FeaturedNext: flyer left, details + tickets right.
function EventRowExpansion({ e }) {
  const soldOut = e.status === 'SOLD OUT';
  return (
    <div className="vbx-past-expansion vbx-grid-2" style={{
      padding: '8px 0 48px',
      display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 40,
      alignItems: 'start',
      borderBottom: 'none'
    }}>
      <div className="vbx-event-artwork" style={{ aspectRatio: '4 / 5', maxHeight: 720 }}>
        <Photo src={e.image && e.image.src} label={e.image.label} fit="contain" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MonoLabel size={11} opacity={0.7}>{e.day} · {e.dateLabel}</MonoLabel>
        <div className="vbx-display-l" style={{
          fontFamily: VBX.sans, fontWeight: 900,
          fontSize: 'clamp(44px, 6vw, 104px)',
          letterSpacing: '-0.04em', lineHeight: 0.9, marginTop: 8, textWrap: 'balance'
        }}>{e.title}</div>
        <div style={{
          fontFamily: VBX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.3,
          marginTop: 18, maxWidth: 620, textWrap: 'pretty', opacity: 0.8
        }}>{e.venue} · {e.city}</div>
        <div style={{
          fontFamily: VBX.mono, fontSize: 13, letterSpacing: 1.4, lineHeight: 1.9,
          marginTop: 22, opacity: 0.85
        }}>
          {[...e.headliners].sort((a, b) => b.localeCompare(a)).map((h, i) =>
          <div key={i}>{h}</div>
          )}
          {e.support && e.support.length > 0 &&
          <div style={{ opacity: 0.55, marginTop: 6 }}>+ {e.support.join(' · ')}</div>
          }
        </div>

        {e.blurb &&
        <div style={{
          fontFamily: VBX.sans, fontSize: 15, lineHeight: 1.5,
          marginTop: 20, opacity: 0.75, maxWidth: 620, textWrap: 'pretty'
        }}>{e.blurb}</div>
        }

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
          <TicketButton status={e.status} url={e.ticketUrl} provider={e.provider} buyUrl={e.buyUrl} />
        </div>
      </div>
    </div>);

}

function PastTable({ items }) {
  const [openIdx, setOpenIdx] = React.useState(null);
  const [visible, setVisible] = React.useState(40);
  React.useEffect(() => {setVisible(40);setOpenIdx(null);}, [items]);
  const shown = items.slice(0, visible);
  return (
    <div>
      <div className="vbx-past-row-header" style={{
        display: 'grid',
        gridTemplateColumns: '60px 140px 160px 120px 1fr 20px',
        gap: 20,
        padding: '12px 0', borderBottom: `1px solid ${VBX.line}`,
        fontFamily: VBX.mono, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.5
      }}>
        <span>Nº</span><span>Date</span><span>Venue</span><span>City</span><span>Lineup</span><span></span>
      </div>
      {shown.map((a, i) => {
        const open = openIdx === i;
        return (
          <div key={i} style={{ borderBottom: `1px solid ${VBX.line}` }}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="vbx-past-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 140px 160px 120px 1fr 20px',
                gap: 20, alignItems: 'baseline',
                width: '100%',
                padding: '22px 0',
                background: open ? 'rgba(232,227,216,0.04)' : 'transparent',
                border: 'none', color: VBX.bone, textAlign: 'left', cursor: 'pointer',
                fontFamily: 'inherit'
              }}>
              <MonoLabel size={10} opacity={0.4}>{String(items.length - i).padStart(3, '0')}</MonoLabel>
              <div>
                <div style={{ fontFamily: VBX.sans, fontWeight: 600, fontSize: 18, letterSpacing: -0.2 }}>{a.dateLabel}</div>
                <MonoLabel size={9} opacity={0.5} style={{ marginTop: 4 }}>{a.day}</MonoLabel>
              </div>
              <div style={{ fontFamily: VBX.sans, fontWeight: 700, fontSize: 18, letterSpacing: -0.2 }}>{a.venue}</div>
              <MonoLabel size={10} opacity={0.7}>{a.city}</MonoLabel>
              <div>
                <div style={{ fontFamily: VBX.sans, fontWeight: 500, fontSize: 17, letterSpacing: -0.1, lineHeight: 1.3 }}>
                  {a.pick && <span style={{
                    fontFamily: VBX.mono, fontSize: 9, letterSpacing: 1.5,
                    padding: '2px 6px', marginRight: 10,
                    background: VBX.red, color: VBX.bone, verticalAlign: 'middle'
                  }}>RA PICK</span>}
                  {a.soldOut && <span style={{
                    fontFamily: VBX.mono, fontSize: 9, letterSpacing: 1.5,
                    padding: '2px 6px', marginRight: 10,
                    background: VBX.red, color: VBX.bone, verticalAlign: 'middle'
                  }}>SOLD OUT</span>}
                  {a.title}
                </div>
                <div style={{ fontFamily: VBX.serif, fontWeight: 300, fontSize: 14, opacity: 0.55, marginTop: 4, lineHeight: 1.3,
                  display: '-webkit-box', WebkitLineClamp: open ? 99 : 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {a.lineup.length ? a.lineup.slice(0, 6).join(' · ') + (a.lineup.length > 6 ? ` · +${a.lineup.length - 6}` : '') : '—'}
                </div>
              </div>
              <span style={{
                fontFamily: VBX.mono, fontSize: 14, opacity: 0.5, textAlign: 'center',
                transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 160ms'
              }}>→</span>
            </button>
            {open &&
            <div className="vbx-past-expansion vbx-grid-2" style={{
              padding: '4px 0 36px 60px',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40
            }}>
                <div>
                  <MonoLabel size={10} opacity={0.55}>{a.day} · {a.dateLabel} · {a.city}</MonoLabel>
                  <div style={{
                  fontFamily: VBX.sans, fontWeight: 900, fontSize: 56, letterSpacing: -1.6, lineHeight: 0.95,
                  marginTop: 10
                }}>{a.venue}</div>
                  <div style={{
                  fontFamily: VBX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.3,
                  marginTop: 12, textWrap: 'pretty'
                }}>{a.title}</div>
                  {a.blurb &&
                <div style={{
                  fontFamily: VBX.sans, fontSize: 14, lineHeight: 1.5,
                  marginTop: 14, opacity: 0.7, maxWidth: 520, textWrap: 'pretty'
                }}>{a.blurb}</div>
                }
                </div>
                <div>
                  <MonoLabel size={10} opacity={0.55}>Line-up ({a.lineup.length})</MonoLabel>
                  <div style={{
                  fontFamily: VBX.mono, fontSize: 12, letterSpacing: 1.2, lineHeight: 1.9,
                  marginTop: 12, opacity: 0.85, columnCount: a.lineup.length > 8 ? 2 : 1, columnGap: 32
                }}>
                    {a.lineup.length ? [...a.lineup].sort((x, y) => y.localeCompare(x)).map((h, j) =>
                  <div key={j}>{h}</div>
                  ) : <div style={{ opacity: 0.5 }}>Line-up not archived.</div>}
                  </div>
                </div>
              </div>
            }
          </div>);

      })}
      {visible < items.length &&
      <div style={{ padding: '32px 0', textAlign: 'center', borderBottom: `1px solid ${VBX.line}` }}>
          <button
          type="button"
          onClick={() => setVisible((v) => v + 40)}
          style={{
            padding: '14px 28px', fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', cursor: 'pointer',
            background: 'transparent', color: VBX.bone, border: `1px solid ${VBX.line}`
          }}>
            Load more — {items.length - visible} remaining
          </button>
        </div>
      }
    </div>);

}

function EmptyRow({ text }) {
  return (
    <div style={{
      padding: '40px 0', borderBottom: `1px solid ${VBX.line}`,
      fontFamily: VBX.serif, fontWeight: 300, fontSize: 22, opacity: 0.5
    }}>{text}</div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<EventsApp />);