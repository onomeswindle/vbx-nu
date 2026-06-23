// VBX Records v2 — editorial / archival sensibility.
// One typeface (Basis), no italic, ink+bone+red only. Full catalog visible.

const {
  useState: useStateL,
  useMemo: useMemoL
} = React;

// ---- shared scoped helpers -------------------------------------------------

function LCaps({
  children,
  size = 11,
  spacing = 2.4,
  opacity = 1,
  color,
  weight = 500,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: VBX.sans,
      fontSize: size,
      letterSpacing: spacing,
      textTransform: 'uppercase',
      fontWeight: weight,
      opacity,
      color,
      display: 'inline-block',
      ...style
    }
  }, children);
}
function StatusDot({
  status
}) {
  const map = {
    'in-stock': {
      color: VBX.red,
      label: 'In stock'
    },
    'low-stock': {
      color: VBX.red,
      label: 'Low stock',
      dim: true
    },
    'sold-out': {
      color: VBX.mute,
      label: 'Sold out'
    }
  };
  const m = map[status] || map['sold-out'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: m.color,
      opacity: m.dim ? 0.55 : 1,
      flex: 'none',
      borderRadius: status === 'sold-out' ? 0 : '50%'
    }
  }), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.2,
    opacity: status === 'sold-out' ? 0.5 : 0.85,
    color: VBX.ink
  }, m.label));
}

// Plain underlined link, no color shift.
function PlainLink({
  href,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '1px solid currentColor',
      paddingBottom: 1,
      ...style
    }
  }, children);
}

// Sleeve — real image if available, else a flat ink panel with the cat number.
// Falls back to the placeholder automatically if the image fails to load.
function Sleeve({
  release,
  size = 280
}) {
  const {
    sleeve,
    cat
  } = release;
  const [failed, setFailed] = useStateL(false);
  if (sleeve && !failed) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        position: 'relative',
        flex: 'none',
        background: '#1A1A1A',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: sleeve,
      alt: `${release.artist} — ${release.title}`,
      onError: () => setFailed(true),
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  // Placeholder: ink panel, cat number large, hairline border, off-white plate
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: 'none',
      position: 'relative',
      background: VBX.ink,
      color: VBX.bone,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      padding: 18,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 18px)`,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    opacity: 0.55,
    color: VBX.bone
  }, "VBX RECORDS"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: VBX.red
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: size > 200 ? 56 : 36,
      letterSpacing: -2,
      lineHeight: 0.9
    }
  }, cat), /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    opacity: 0.55,
    color: VBX.bone,
    style: {
      marginTop: 8
    }
  }, release.dateLabel)));
}

// ============================================================================
// HERO — masthead. Catalogue identity, no italic, no ornament.
// ============================================================================

function LabelHero({
  count
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "vbx-section",
    style: {
      background: VBX.boneWarm,
      color: VBX.ink,
      padding: '160px 32px 72px',
      borderBottom: `1px solid ${VBX.lineInk}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.lineInk}`,
      paddingBottom: 14,
      marginBottom: 56,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 9
  }), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: VBX.ink
  }, "VBX Records"), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: VBX.ink,
    opacity: 0.45
  }, "\xB7 est. ", LABEL_META.founded)), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: VBX.ink,
    opacity: 0.55
  }, "Catalogue \xB7 VBX001 \u2014 VBX", String(LABEL_RELEASES.length).padStart(3, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 64,
      alignItems: 'end'
    },
    className: "vbx-events-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(72px, 11vw, 188px)',
      letterSpacing: '-0.05em',
      lineHeight: 0.86,
      textTransform: 'none'
    },
    className: "vbx-display-xl"
  }, "The", /*#__PURE__*/React.createElement("br", null), "Catalogue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 'clamp(17px, 1.3vw, 20px)',
      lineHeight: 1.5,
      maxWidth: 480,
      opacity: 0.85,
      textWrap: 'pretty'
    }
  }, "Vinyl from the VBX crew \u2014 Ferro, Spokenn (Reiss \xB7 Ferro), Makcim & Levi, Frank Haag, Olsvang\xE8r, DOTT, with one record cut alongside Ricardo Villalobos. Pressed in small numbered runs, sleeved with care, distributed worldwide via ", LABEL_META.distributionCurrent, ".", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      gap: 24,
      fontFamily: VBX.sans,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: 0.4
    }
  }, /*#__PURE__*/React.createElement(PlainLink, {
    href: LABEL_META.bandcamp
  }, "Bandcamp \u2197"), /*#__PURE__*/React.createElement(PlainLink, {
    href: LABEL_META.soundcloud
  }, "SoundCloud \u2197"), /*#__PURE__*/React.createElement(PlainLink, {
    href: "#trade"
  }, "Trade enquiries")))));
}

// ============================================================================
// CATALOGUE INDEX — full list as a tight directory. The signature density move.
// ============================================================================

function CatalogIndex({
  releases,
  onJump
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "vbx-section",
    style: {
      background: VBX.boneWarm,
      color: VBX.ink,
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-section-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 32,
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.lineInk}`,
      paddingBottom: 16,
      marginBottom: 4
    },
    className: "vbx-section-header"
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    opacity: 0.55,
    color: VBX.ink
  }, "N\xBA 01"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 36,
      letterSpacing: -0.8,
      lineHeight: 1
    }
  }, "Index"), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    opacity: 0.55,
    color: VBX.ink
  }, releases.length, " releases")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-cat-row vbx-cat-head",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1.6fr 2fr 100px 130px 110px',
      gap: 24,
      padding: '14px 0',
      borderBottom: `1px solid ${VBX.lineInk}`
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Cat"), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Artist"), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Title"), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Year"), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Format"), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, "Status")), releases.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.cat,
    href: `#${r.cat}`,
    onClick: e => {/* native anchor; let browser handle */},
    className: "vbx-cat-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1.6fr 2fr 100px 130px 110px',
      gap: 24,
      padding: '18px 0',
      borderBottom: `1px solid ${VBX.lineInk}`,
      color: VBX.ink,
      textDecoration: 'none',
      transition: 'background 120ms ease, padding 120ms ease',
      alignItems: 'baseline'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(10,10,10,0.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 0.6
    }
  }, r.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 17,
      letterSpacing: -0.2,
      lineHeight: 1.25
    }
  }, r.artist), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 17,
      letterSpacing: -0.2,
      lineHeight: 1.25,
      opacity: 0.85
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: 0.4,
      opacity: 0.7
    }
  }, r.year), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: 0.4,
      opacity: 0.7
    }
  }, r.format.replace(/, .*$/, '')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusDot, {
    status: r.status
  })))));
}

// ============================================================================
// RELEASE BLOCK — full detail. Sleeve | meta+tracklist+stockists.
// ============================================================================

function ReleaseBlock({
  r,
  idx,
  total,
  prev,
  next
}) {
  const onWarm = idx % 2 === 0; // alternate tonal break: bone → ink → bone…
  const bg = onWarm ? VBX.boneWarm : VBX.ink;
  const fg = onWarm ? VBX.ink : VBX.bone;
  const lineCol = onWarm ? VBX.lineInk : VBX.line;
  return /*#__PURE__*/React.createElement("section", {
    id: r.cat,
    "data-screen-label": `${r.cat} ${r.artist}`,
    className: "vbx-section",
    style: {
      background: bg,
      color: fg,
      padding: '88px 32px 96px',
      borderTop: `1px solid ${lineCol}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: `1px solid ${lineCol}`,
      paddingBottom: 14,
      marginBottom: 48,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 8
  }), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: fg
  }, r.cat)), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.5,
    opacity: 0.5,
    color: fg
  }, String(idx + 1).padStart(2, '0'), " / ", String(total).padStart(2, '0')), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    opacity: 0.6,
    color: fg
  }, r.dateLabel)), /*#__PURE__*/React.createElement("div", {
    className: "vbx-release-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(280px, 360px) 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sleeve, {
    release: r,
    size: 360
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: `1px solid ${lineCol}`,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 14,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    opacity: 0.5,
    color: fg
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: onWarm ? undefined : 'inherit'
    }
  }, onWarm ? /*#__PURE__*/React.createElement(StatusDot, {
    status: r.status
  }) : /*#__PURE__*/React.createElement(DarkStatusDot, {
    status: r.status
  }))), r.price && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    opacity: 0.5,
    color: fg
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: 0.4,
      marginTop: 4
    }
  }, r.price)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(40px, 5.6vw, 88px)',
      letterSpacing: -2.4,
      lineHeight: 0.9,
      textWrap: 'balance'
    }
  }, r.artist), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 'clamp(22px, 2.4vw, 36px)',
      letterSpacing: -0.6,
      lineHeight: 1.15,
      marginTop: 12,
      opacity: 0.85,
      textWrap: 'pretty'
    }
  }, r.title)), r.liner && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.55,
      maxWidth: 640,
      opacity: 0.85,
      textWrap: 'pretty',
      paddingBottom: 32,
      borderBottom: `1px solid ${lineCol}`,
      marginBottom: 32
    }
  }, r.liner), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 56,
      paddingBottom: 32,
      borderBottom: `1px solid ${lineCol}`,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: fg,
    style: {
      marginBottom: 14
    }
  }, "Tracklist"), /*#__PURE__*/React.createElement("div", null, r.tracks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr auto',
      gap: 16,
      padding: '10px 0',
      borderTop: i === 0 ? 'none' : `1px solid ${lineCol}`,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 1.2,
      opacity: 0.7
    }
  }, t.side), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: -0.1,
      lineHeight: 1.3
    }
  }, t.artist && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55,
      marginRight: 8
    }
  }, t.artist, " \u2014"), t.name), t.meta && /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 1.8,
    opacity: 0.5,
    color: fg
  }, t.meta))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: fg,
    style: {
      marginBottom: 14
    }
  }, "Credits"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      fontFamily: VBX.sans,
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Format",
    value: r.format
  }), r.genre && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Genre",
    value: r.genre
  }), r.credits.written && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Produced by",
    value: r.credits.written
  }), r.credits.mastered && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Mastered by",
    value: r.credits.mastered
  }), r.credits.pressed && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Pressed by",
    value: r.credits.pressed
  }), r.credits.distributed && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Distributed by",
    value: r.credits.distributed
  }), r.credits.artwork && /*#__PURE__*/React.createElement(CreditLine, {
    col: fg,
    label: "Artwork",
    value: r.credits.artwork
  }), r.press && r.press.map((p, i) => /*#__PURE__*/React.createElement(CreditLine, {
    key: i,
    col: fg,
    label: i === 0 ? 'Supported by' : '',
    value: `${p.source} — ${p.note}`
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: fg,
    style: {
      marginBottom: 14
    }
  }, "Stockists"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 28px',
      fontFamily: VBX.sans,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0.3
    }
  }, r.stockists.map((s, i) => /*#__PURE__*/React.createElement(PlainLink, {
    key: i,
    href: s.url
  }, s.name, " \u2197")))), r.audio && r.audio.url && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(PlainLink, {
    href: r.audio.url,
    style: {
      fontFamily: VBX.sans,
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: 0.4
    }
  }, "Listen on SoundCloud \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 18,
      borderTop: `1px solid ${lineCol}`,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: prev ? `#${prev.cat}` : undefined,
    style: {
      color: fg,
      textDecoration: 'none',
      opacity: prev ? 0.85 : 0.3,
      pointerEvents: prev ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    color: fg,
    opacity: 0.5
  }, "\u2190 Earlier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 14,
      marginTop: 6
    }
  }, prev ? `${prev.cat} · ${prev.artist}` : 'Start of catalogue')), /*#__PURE__*/React.createElement("a", {
    href: next ? `#${next.cat}` : undefined,
    style: {
      color: fg,
      textDecoration: 'none',
      textAlign: 'right',
      opacity: next ? 0.85 : 0.3,
      pointerEvents: next ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 9,
    spacing: 2.4,
    color: fg,
    opacity: 0.5
  }, "Later \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 14,
      marginTop: 6
    }
  }, next ? `${next.cat} · ${next.artist}` : 'End of catalogue'))))));
}
function CreditLine({
  label,
  value,
  col
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 14,
      padding: '6px 0',
      borderTop: '1px solid rgba(0,0,0,0)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: VBX.sans,
      fontSize: 11,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      opacity: 0.5,
      color: col
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.9
    }
  }, value));
}
function DarkStatusDot({
  status
}) {
  // status pill on dark — use bone-tinted neutrals instead of ink.
  const map = {
    'in-stock': {
      color: VBX.red,
      label: 'In stock'
    },
    'low-stock': {
      color: VBX.red,
      label: 'Low stock',
      dim: true
    },
    'sold-out': {
      color: 'rgba(232,227,216,0.5)',
      label: 'Sold out'
    }
  };
  const m = map[status] || map['sold-out'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: m.color,
      opacity: m.dim ? 0.6 : 1,
      flex: 'none',
      borderRadius: status === 'sold-out' ? 0 : '50%'
    }
  }), /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.2,
    opacity: status === 'sold-out' ? 0.5 : 0.85,
    color: VBX.bone
  }, m.label));
}

// ============================================================================
// LABEL CREDITS / TRADE block — practical info, end of catalogue.
// ============================================================================

function LabelCredits() {
  return /*#__PURE__*/React.createElement("section", {
    id: "trade",
    className: "vbx-section",
    style: {
      background: VBX.boneWarm,
      color: VBX.ink,
      padding: '120px 32px 96px',
      borderTop: `1px solid ${VBX.lineInk}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.lineInk}`,
      paddingBottom: 14,
      marginBottom: 48,
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 9
  }), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: VBX.ink
  }, "Colophon")), /*#__PURE__*/React.createElement(LCaps, {
    size: 11,
    spacing: 2.5,
    color: VBX.ink,
    opacity: 0.55
  }, "Trade \xB7 Demos \xB7 Press")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(36px, 4.4vw, 64px)',
      letterSpacing: -1.6,
      lineHeight: 0.95,
      textWrap: 'balance'
    }
  }, "Records, sleeves, and the people who make them."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.55,
      opacity: 0.78,
      marginTop: 22,
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "VBX Records is a small, slow-moving label run from Amsterdam by the same people who book the parties. We press in numbered runs on 12\" vinyl, distribute through ", LABEL_META.distributionCurrent, ", and put out a record only when the music is ready.")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      fontFamily: VBX.sans,
      fontSize: 13,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Founded",
    value: LABEL_META.founded
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Founders",
    value: LABEL_META.founder
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Currently run by",
    value: LABEL_META.currentlyRunBy
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Distribution",
    value: LABEL_META.distributionCurrent,
    sub: `Previously: ${LABEL_META.distributionPast}`
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Pressed at",
    value: LABEL_META.pressedAt
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Sleeves",
    value: LABEL_META.artwork
  }), /*#__PURE__*/React.createElement(ColophonBlock, {
    label: "Catalogue",
    value: `VBX001 — VBX${String(LABEL_RELEASES.length).padStart(3, '0')}`
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      paddingTop: 32,
      borderTop: `1px solid ${VBX.lineInk}`,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    },
    className: "vbx-grid-3"
  }, /*#__PURE__*/React.createElement(TradeBlock, {
    kind: "Trade enquiries",
    body: "Stockist / distributor enquiries \u2014 distribution worldwide via one-eye-witness. We supply directly to a handful of long-standing stores; everyone else through the distro.",
    email: LABEL_META.trade
  }), /*#__PURE__*/React.createElement(TradeBlock, {
    kind: "Demos",
    body: "Send a download link with three to five tracks. We listen to everything, but don't write back to everything. If we're interested you'll hear from us within a month.",
    email: LABEL_META.demos
  }), /*#__PURE__*/React.createElement(TradeBlock, {
    kind: "Press / radio",
    body: "Promos, interview requests, and press copies. Include the outlet, the angle, and the deadline.",
    email: LABEL_META.press
  })));
}
function ColophonBlock({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      borderTop: `1px solid ${VBX.lineInk}`
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 17,
      letterSpacing: -0.2,
      marginTop: 8,
      lineHeight: 1.3
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5,
      marginTop: 4,
      fontSize: 12
    }
  }, sub));
}
function TradeBlock({
  kind,
  body,
  email
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      borderTop: `1px solid ${VBX.lineInk}`
    }
  }, /*#__PURE__*/React.createElement(LCaps, {
    size: 10,
    spacing: 2.4,
    opacity: 0.5,
    color: VBX.ink
  }, kind), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.55,
      marginTop: 12,
      opacity: 0.8,
      textWrap: 'pretty'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(PlainLink, {
    href: `mailto:${email}`,
    style: {
      fontFamily: VBX.sans,
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 0.3
    }
  }, email, " \u2197")));
}

// ============================================================================
// APP
// ============================================================================

function LabelV2App() {
  const releases = LABEL_RELEASES_DESC; // newest first for display
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    page: "records"
  }), /*#__PURE__*/React.createElement(LabelHero, null), /*#__PURE__*/React.createElement(CatalogIndex, {
    releases: releases
  }), releases.map((r, i) => /*#__PURE__*/React.createElement(ReleaseBlock, {
    key: r.cat,
    r: r,
    idx: i,
    total: releases.length,
    prev: releases[i + 1] || null,
    next: releases[i - 1] || null
  })), /*#__PURE__*/React.createElement(LabelCredits, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  LabelV2App
});
