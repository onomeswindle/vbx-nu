// VBX Records v2 — editorial / archival sensibility.
// One typeface (Basis), no italic, ink+bone+red only. Full catalog visible.

const { useState: useStateL, useMemo: useMemoL } = React;

// ---- shared scoped helpers -------------------------------------------------

function LCaps({ children, size = 11, spacing = 2.4, opacity = 1, color, weight = 500, style }) {
  return (
    <span style={{
      fontFamily: VBX.sans, fontSize: size, letterSpacing: spacing,
      textTransform: 'uppercase', fontWeight: weight,
      opacity, color, display: 'inline-block', ...style,
    }}>{children}</span>
  );
}

function StatusDot({ status }) {
  const map = {
    'in-stock':  { color: VBX.red,  label: 'In stock' },
    'low-stock': { color: VBX.red,  label: 'Low stock', dim: true },
    'sold-out':  { color: VBX.mute, label: 'Sold out' },
  };
  const m = map[status] || map['sold-out'];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: 7, height: 7, background: m.color,
        opacity: m.dim ? 0.55 : 1,
        flex: 'none', borderRadius: status === 'sold-out' ? 0 : '50%',
      }} />
      <LCaps size={10} spacing={2.2} opacity={status === 'sold-out' ? 0.5 : 0.85} color={VBX.ink}>
        {m.label}
      </LCaps>
    </span>
  );
}

// Plain underlined link, no color shift.
function PlainLink({ href, children, style }) {
  return (
    <a href={href} target="_blank" rel="noopener" style={{
      color: 'inherit', textDecoration: 'none',
      borderBottom: '1px solid currentColor', paddingBottom: 1,
      ...style,
    }}>{children}</a>
  );
}

// Sleeve — real image if available, else a flat ink panel with the cat number.
// Falls back to the placeholder automatically if the image fails to load.
function Sleeve({ release, size = 280 }) {
  const { sleeve, cat } = release;
  const [failed, setFailed] = useStateL(false);
  if (sleeve && !failed) {
    return (
      <div style={{
        width: size, height: size, position: 'relative', flex: 'none',
        background: '#1A1A1A', overflow: 'hidden',
      }}>
        <img
          src={sleeve}
          alt={`${release.artist} — ${release.title}`}
          onError={() => setFailed(true)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }}
        />
      </div>
    );
  }
  // Placeholder: ink panel, cat number large, hairline border, off-white plate
  return (
    <div style={{
      width: size, height: size, flex: 'none', position: 'relative',
      background: VBX.ink, color: VBX.bone,
      display: 'grid', gridTemplateRows: '1fr auto',
      padding: 18, overflow: 'hidden',
    }}>
      {/* stripe pattern, very subtle */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 18px)`,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
        <LCaps size={9} spacing={2.4} opacity={0.55} color={VBX.bone}>VBX RECORDS</LCaps>
        <span style={{ width: 8, height: 8, background: VBX.red }} />
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{
          fontFamily: VBX.sans, fontWeight: 900,
          fontSize: size > 200 ? 56 : 36,
          letterSpacing: -2, lineHeight: 0.9,
        }}>{cat}</div>
        <LCaps size={9} spacing={2.4} opacity={0.55} color={VBX.bone} style={{ marginTop: 8 }}>
          {release.dateLabel}
        </LCaps>
      </div>
    </div>
  );
}

// ============================================================================
// HERO — masthead. Catalogue identity, no italic, no ornament.
// ============================================================================

function LabelHero({ count }) {
  return (
    <header className="vbx-section" style={{
      background: VBX.boneWarm, color: VBX.ink,
      padding: '160px 32px 72px',
      borderBottom: `1px solid ${VBX.lineInk}`,
    }}>
      {/* meta rail */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        borderBottom: `1px solid ${VBX.lineInk}`, paddingBottom: 14, marginBottom: 56,
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <RedSquare size={9} />
          <LCaps size={11} spacing={2.5} color={VBX.ink}>VBX Records</LCaps>
          <LCaps size={11} spacing={2.5} color={VBX.ink} opacity={0.45}>· est. {LABEL_META.founded}</LCaps>
        </div>
        <LCaps size={11} spacing={2.5} color={VBX.ink} opacity={0.55}>
          Catalogue · VBX001 — VBX{String(LABEL_RELEASES.length).padStart(3, '0')}
        </LCaps>
      </div>

      {/* masthead */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
        alignItems: 'end',
      }} className="vbx-events-header">
        <div style={{
          fontFamily: VBX.sans, fontWeight: 900,
          fontSize: 'clamp(72px, 11vw, 188px)',
          letterSpacing: '-0.05em', lineHeight: 0.86,
          textTransform: 'none',
        }} className="vbx-display-xl">
          The<br />Catalogue
        </div>
        <div style={{
          fontFamily: VBX.sans, fontWeight: 400,
          fontSize: 'clamp(17px, 1.3vw, 20px)',
          lineHeight: 1.5, maxWidth: 480, opacity: 0.85,
          textWrap: 'pretty',
        }}>
          Vinyl from the VBX crew — Ferro, Spokenn (Reiss · Ferro), Makcim &amp; Levi, Frank Haag, Olsvangèr, DOTT, with one record cut alongside Ricardo Villalobos. Pressed in small numbered runs, sleeved with care, distributed worldwide via {LABEL_META.distributionCurrent}.
          <div style={{ marginTop: 18, display: 'flex', gap: 24, fontFamily: VBX.sans, fontSize: 13, fontWeight: 500, letterSpacing: 0.4 }}>
            <PlainLink href={LABEL_META.bandcamp}>Bandcamp ↗</PlainLink>
            <PlainLink href={LABEL_META.soundcloud}>SoundCloud ↗</PlainLink>
            <PlainLink href="#trade">Trade enquiries</PlainLink>
          </div>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// CATALOGUE INDEX — full list as a tight directory. The signature density move.
// ============================================================================

function CatalogIndex({ releases, onJump }) {
  return (
    <section className="vbx-section" style={{
      background: VBX.boneWarm, color: VBX.ink,
      padding: '0 32px 96px',
    }}>
      <div className="vbx-section-header" style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: 32, alignItems: 'baseline',
        borderBottom: `1px solid ${VBX.lineInk}`,
        paddingBottom: 16, marginBottom: 4,
      }} className="vbx-section-header">
        <LCaps size={11} spacing={2.5} opacity={0.55} color={VBX.ink}>Nº 01</LCaps>
        <div style={{ fontFamily: VBX.sans, fontWeight: 900, fontSize: 36, letterSpacing: -0.8, lineHeight: 1 }}>
          Index
        </div>
        <LCaps size={11} spacing={2.5} opacity={0.55} color={VBX.ink}>{releases.length} releases</LCaps>
      </div>

      {/* column header */}
      <div className="vbx-cat-row vbx-cat-head" style={{
        display: 'grid',
        gridTemplateColumns: '80px 1.6fr 2fr 100px 130px 110px',
        gap: 24, padding: '14px 0',
        borderBottom: `1px solid ${VBX.lineInk}`,
      }}>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Cat</LCaps>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Artist</LCaps>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Title</LCaps>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Year</LCaps>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Format</LCaps>
        <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>Status</LCaps>
      </div>

      {releases.map(r => (
        <a key={r.cat} href={`#${r.cat}`}
          onClick={(e) => { /* native anchor; let browser handle */ }}
          className="vbx-cat-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1.6fr 2fr 100px 130px 110px',
            gap: 24, padding: '18px 0',
            borderBottom: `1px solid ${VBX.lineInk}`,
            color: VBX.ink, textDecoration: 'none',
            transition: 'background 120ms ease, padding 120ms ease',
            alignItems: 'baseline',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,10,10,0.04)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          <div style={{
            fontFamily: VBX.sans, fontWeight: 700, fontSize: 14, letterSpacing: 0.6,
          }}>{r.cat}</div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 500, fontSize: 17, letterSpacing: -0.2, lineHeight: 1.25,
          }}>{r.artist}</div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 400, fontSize: 17, letterSpacing: -0.2, lineHeight: 1.25,
            opacity: 0.85,
          }}>{r.title}</div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 400, fontSize: 13, letterSpacing: 0.4, opacity: 0.7,
          }}>{r.year}</div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 400, fontSize: 13, letterSpacing: 0.4, opacity: 0.7,
          }}>{r.format.replace(/, .*$/, '')}</div>
          <div><StatusDot status={r.status} /></div>
        </a>
      ))}
    </section>
  );
}

// ============================================================================
// RELEASE BLOCK — full detail. Sleeve | meta+tracklist+stockists.
// ============================================================================

function ReleaseBlock({ r, idx, total, prev, next }) {
  const onWarm = idx % 2 === 0;   // alternate tonal break: bone → ink → bone…
  const bg = onWarm ? VBX.boneWarm : VBX.ink;
  const fg = onWarm ? VBX.ink : VBX.bone;
  const lineCol = onWarm ? VBX.lineInk : VBX.line;

  return (
    <section
      id={r.cat}
      data-screen-label={`${r.cat} ${r.artist}`}
      className="vbx-section"
      style={{
        background: bg, color: fg,
        padding: '88px 32px 96px',
        borderTop: `1px solid ${lineCol}`,
      }}
    >
      {/* spine — cat. # / counter / year */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        borderBottom: `1px solid ${lineCol}`,
        paddingBottom: 14, marginBottom: 48,
        flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <RedSquare size={8} />
          <LCaps size={11} spacing={2.5} color={fg}>{r.cat}</LCaps>
        </div>
        <LCaps size={10} spacing={2.5} opacity={0.5} color={fg}>
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </LCaps>
        <LCaps size={11} spacing={2.5} opacity={0.6} color={fg}>{r.dateLabel}</LCaps>
      </div>

      {/* main grid */}
      <div className="vbx-release-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 360px) 1fr',
        gap: 64, alignItems: 'start',
      }}>
        {/* LEFT: sleeve + status block */}
        <div>
          <Sleeve release={r} size={360} />
          <div style={{
            marginTop: 20, paddingTop: 16,
            borderTop: `1px solid ${lineCol}`,
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 14,
            alignItems: 'baseline',
          }}>
            <div>
              <LCaps size={9} spacing={2.4} opacity={0.5} color={fg}>Status</LCaps>
              <div style={{ marginTop: 6, color: onWarm ? undefined : 'inherit' }}>
                {/* re-color status for dark backgrounds */}
                {onWarm
                  ? <StatusDot status={r.status} />
                  : <DarkStatusDot status={r.status} />}
              </div>
            </div>
            {r.price && (
              <div style={{ textAlign: 'right' }}>
                <LCaps size={9} spacing={2.4} opacity={0.5} color={fg}>Price</LCaps>
                <div style={{
                  fontFamily: VBX.sans, fontWeight: 700, fontSize: 17,
                  letterSpacing: 0.4, marginTop: 4,
                }}>{r.price}</div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: artist · title · liner · tracklist · credits · stockists */}
        <div>
          {/* Title block */}
          <div style={{ marginBottom: 36 }}>
            <div style={{
              fontFamily: VBX.sans, fontWeight: 900,
              fontSize: 'clamp(40px, 5.6vw, 88px)',
              letterSpacing: -2.4, lineHeight: 0.9,
              textWrap: 'balance',
            }}>{r.artist}</div>
            <div style={{
              fontFamily: VBX.sans, fontWeight: 400,
              fontSize: 'clamp(22px, 2.4vw, 36px)',
              letterSpacing: -0.6, lineHeight: 1.15,
              marginTop: 12, opacity: 0.85, textWrap: 'pretty',
            }}>{r.title}</div>
          </div>

          {/* Liner */}
          {r.liner && (
            <div style={{
              fontFamily: VBX.sans, fontWeight: 400,
              fontSize: 17, lineHeight: 1.55,
              maxWidth: 640, opacity: 0.85, textWrap: 'pretty',
              paddingBottom: 32, borderBottom: `1px solid ${lineCol}`,
              marginBottom: 32,
            }}>{r.liner}</div>
          )}

          {/* Tracklist + Credits in two cols */}
          <div className="vbx-grid-2" style={{
            display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56,
            paddingBottom: 32, borderBottom: `1px solid ${lineCol}`,
            marginBottom: 28,
          }}>
            {/* Tracklist */}
            <div>
              <LCaps size={10} spacing={2.4} opacity={0.5} color={fg} style={{ marginBottom: 14 }}>Tracklist</LCaps>
              <div>
                {r.tracks.map((t, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '40px 1fr auto',
                    gap: 16, padding: '10px 0',
                    borderTop: i === 0 ? 'none' : `1px solid ${lineCol}`,
                    alignItems: 'baseline',
                  }}>
                    <div style={{
                      fontFamily: VBX.sans, fontWeight: 700, fontSize: 12,
                      letterSpacing: 1.2, opacity: 0.7,
                    }}>{t.side}</div>
                    <div style={{
                      fontFamily: VBX.sans, fontWeight: 400, fontSize: 16,
                      letterSpacing: -0.1, lineHeight: 1.3,
                    }}>
                      {t.artist && (
                        <span style={{ opacity: 0.55, marginRight: 8 }}>{t.artist} —</span>
                      )}
                      {t.name}
                    </div>
                    {t.meta && (
                      <LCaps size={10} spacing={1.8} opacity={0.5} color={fg}>{t.meta}</LCaps>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Credits */}
            <div>
              <LCaps size={10} spacing={2.4} opacity={0.5} color={fg} style={{ marginBottom: 14 }}>Credits</LCaps>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr',
                fontFamily: VBX.sans, fontSize: 13, lineHeight: 1.7,
              }}>
                <CreditLine col={fg} label="Format" value={r.format} />
                {r.genre && <CreditLine col={fg} label="Genre" value={r.genre} />}
                {r.credits.written && <CreditLine col={fg} label="Produced by" value={r.credits.written} />}
                {r.credits.mastered && <CreditLine col={fg} label="Mastered by" value={r.credits.mastered} />}
                {r.credits.pressed && <CreditLine col={fg} label="Pressed by" value={r.credits.pressed} />}
                {r.credits.distributed && <CreditLine col={fg} label="Distributed by" value={r.credits.distributed} />}
                {r.credits.artwork && <CreditLine col={fg} label="Artwork" value={r.credits.artwork} />}
                {r.press && r.press.map((p, i) => (
                  <CreditLine key={i} col={fg} label={i === 0 ? 'Supported by' : ''} value={`${p.source} — ${p.note}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Stockists */}
          <div>
            <LCaps size={10} spacing={2.4} opacity={0.5} color={fg} style={{ marginBottom: 14 }}>Stockists</LCaps>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px',
              fontFamily: VBX.sans, fontSize: 14, fontWeight: 500, letterSpacing: 0.3 }}>
              {r.stockists.map((s, i) => (
                <PlainLink key={i} href={s.url}>{s.name} ↗</PlainLink>
              ))}
            </div>
          </div>

          {/* Audio (only if exists) */}
          {r.audio && r.audio.url && (
            <div style={{ marginTop: 28 }}>
              <PlainLink href={r.audio.url} style={{ fontFamily: VBX.sans, fontSize: 13, fontWeight: 500, letterSpacing: 0.4 }}>
                Listen on SoundCloud ↗
              </PlainLink>
            </div>
          )}

          {/* prev/next pager */}
          <div style={{
            marginTop: 56, paddingTop: 18,
            borderTop: `1px solid ${lineCol}`,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          }}>
            <a href={prev ? `#${prev.cat}` : undefined} style={{
              color: fg, textDecoration: 'none', opacity: prev ? 0.85 : 0.3,
              pointerEvents: prev ? 'auto' : 'none',
            }}>
              <LCaps size={9} spacing={2.4} color={fg} opacity={0.5}>← Earlier</LCaps>
              <div style={{ fontFamily: VBX.sans, fontWeight: 500, fontSize: 14, marginTop: 6 }}>
                {prev ? `${prev.cat} · ${prev.artist}` : 'Start of catalogue'}
              </div>
            </a>
            <a href={next ? `#${next.cat}` : undefined} style={{
              color: fg, textDecoration: 'none', textAlign: 'right',
              opacity: next ? 0.85 : 0.3,
              pointerEvents: next ? 'auto' : 'none',
            }}>
              <LCaps size={9} spacing={2.4} color={fg} opacity={0.5}>Later →</LCaps>
              <div style={{ fontFamily: VBX.sans, fontWeight: 500, fontSize: 14, marginTop: 6 }}>
                {next ? `${next.cat} · ${next.artist}` : 'End of catalogue'}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreditLine({ label, value, col }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14,
      padding: '6px 0', borderTop: '1px solid rgba(0,0,0,0)',
    }}>
      <span style={{
        fontFamily: VBX.sans, fontSize: 11, letterSpacing: 1.4,
        textTransform: 'uppercase', opacity: 0.5, color: col,
      }}>{label}</span>
      <span style={{ opacity: 0.9 }}>{value}</span>
    </div>
  );
}

function DarkStatusDot({ status }) {
  // status pill on dark — use bone-tinted neutrals instead of ink.
  const map = {
    'in-stock':  { color: VBX.red,  label: 'In stock' },
    'low-stock': { color: VBX.red,  label: 'Low stock', dim: true },
    'sold-out':  { color: 'rgba(232,227,216,0.5)', label: 'Sold out' },
  };
  const m = map[status] || map['sold-out'];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: 7, height: 7, background: m.color,
        opacity: m.dim ? 0.6 : 1, flex: 'none',
        borderRadius: status === 'sold-out' ? 0 : '50%',
      }} />
      <LCaps size={10} spacing={2.2} opacity={status === 'sold-out' ? 0.5 : 0.85} color={VBX.bone}>
        {m.label}
      </LCaps>
    </span>
  );
}

// ============================================================================
// LABEL CREDITS / TRADE block — practical info, end of catalogue.
// ============================================================================

function LabelCredits() {
  return (
    <section id="trade" className="vbx-section" style={{
      background: VBX.boneWarm, color: VBX.ink,
      padding: '120px 32px 96px',
      borderTop: `1px solid ${VBX.lineInk}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        borderBottom: `1px solid ${VBX.lineInk}`, paddingBottom: 14, marginBottom: 48,
        flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <RedSquare size={9} />
          <LCaps size={11} spacing={2.5} color={VBX.ink}>Colophon</LCaps>
        </div>
        <LCaps size={11} spacing={2.5} color={VBX.ink} opacity={0.55}>Trade · Demos · Press</LCaps>
      </div>

      <div className="vbx-grid-2" style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 900,
            fontSize: 'clamp(36px, 4.4vw, 64px)',
            letterSpacing: -1.6, lineHeight: 0.95, textWrap: 'balance',
          }}>
            Records, sleeves, and the people who make them.
          </div>
          <div style={{
            fontFamily: VBX.sans, fontWeight: 400, fontSize: 16,
            lineHeight: 1.55, opacity: 0.78, marginTop: 22, maxWidth: 560,
            textWrap: 'pretty',
          }}>
            VBX Records is a small, slow-moving label run from Amsterdam by the same people who book the parties. We press in numbered runs on 12" vinyl, distribute through {LABEL_META.distributionCurrent}, and put out a record only when the music is ready.
          </div>
        </div>

        <div className="vbx-grid-2" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          fontFamily: VBX.sans, fontSize: 13, lineHeight: 1.6,
        }}>
          <ColophonBlock label="Founded" value={LABEL_META.founded} />
          <ColophonBlock label="Founders" value={LABEL_META.founder} />
          <ColophonBlock label="Currently run by" value={LABEL_META.currentlyRunBy} />
          <ColophonBlock label="Distribution" value={LABEL_META.distributionCurrent} sub={`Previously: ${LABEL_META.distributionPast}`} />
          <ColophonBlock label="Pressed at" value={LABEL_META.pressedAt} />
          <ColophonBlock label="Sleeves" value={LABEL_META.artwork} />
          <ColophonBlock label="Catalogue" value={`VBX001 — VBX${String(LABEL_RELEASES.length).padStart(3, '0')}`} />
        </div>
      </div>

      {/* Trade rail */}
      <div style={{
        marginTop: 80, paddingTop: 32, borderTop: `1px solid ${VBX.lineInk}`,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
      }} className="vbx-grid-3">
        <TradeBlock kind="Trade enquiries" body="Stockist / distributor enquiries — distribution worldwide via one-eye-witness. We supply directly to a handful of long-standing stores; everyone else through the distro." email={LABEL_META.trade} />
        <TradeBlock kind="Demos" body="Send a download link with three to five tracks. We listen to everything, but don't write back to everything. If we're interested you'll hear from us within a month." email={LABEL_META.demos} />
        <TradeBlock kind="Press / radio" body="Promos, interview requests, and press copies. Include the outlet, the angle, and the deadline." email={LABEL_META.press} />
      </div>
    </section>
  );
}

function ColophonBlock({ label, value, sub }) {
  return (
    <div style={{
      paddingTop: 16, borderTop: `1px solid ${VBX.lineInk}`,
    }}>
      <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>{label}</LCaps>
      <div style={{
        fontFamily: VBX.sans, fontWeight: 500, fontSize: 17, letterSpacing: -0.2,
        marginTop: 8, lineHeight: 1.3,
      }}>{value}</div>
      {sub && <div style={{ opacity: 0.5, marginTop: 4, fontSize: 12 }}>{sub}</div>}
    </div>
  );
}

function TradeBlock({ kind, body, email }) {
  return (
    <div style={{ paddingTop: 18, borderTop: `1px solid ${VBX.lineInk}` }}>
      <LCaps size={10} spacing={2.4} opacity={0.5} color={VBX.ink}>{kind}</LCaps>
      <div style={{
        fontFamily: VBX.sans, fontWeight: 400, fontSize: 14, lineHeight: 1.55,
        marginTop: 12, opacity: 0.8, textWrap: 'pretty',
      }}>{body}</div>
      <div style={{ marginTop: 16 }}>
        <PlainLink href={`mailto:${email}`} style={{ fontFamily: VBX.sans, fontSize: 14, fontWeight: 600, letterSpacing: 0.3 }}>
          {email} ↗
        </PlainLink>
      </div>
    </div>
  );
}

// ============================================================================
// APP
// ============================================================================

function LabelV2App() {
  const releases = LABEL_RELEASES_DESC; // newest first for display
  return (
    <>
      <Nav page="records" />
      <LabelHero />
      <CatalogIndex releases={releases} />
      {releases.map((r, i) => (
        <ReleaseBlock
          key={r.cat}
          r={r}
          idx={i}
          total={releases.length}
          prev={releases[i + 1] || null}
          next={releases[i - 1] || null}
        />
      ))}
      <LabelCredits />
      <Footer />
    </>
  );
}

Object.assign(window, { LabelV2App });
