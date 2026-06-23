// About, Archive preview, Records stub, Contact, Footer.
// All same ink-on-bone system. About and Records sit on the warm bone background
// for tonal break — inverted — then back to ink.

function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    "data-screen-label": "About",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.boneWarm,
      color: VBX.ink,
      padding: '140px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-section-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 32,
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.lineInk}`,
      paddingBottom: 18,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.55,
    color: VBX.ink
  }, "N\xBA 02"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: -1.2,
      lineHeight: 1
    }
  }, "About"), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.55,
    color: VBX.ink
  }, "Est. Amsterdam")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-m",
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 'clamp(32px, 3.4vw, 48px)',
      lineHeight: 1.2,
      letterSpacing: -0.6,
      textWrap: 'pretty',
      marginBottom: 32
    }
  }, "VBX programs electronic music nights in Amsterdam and beyond \u2014 residencies at BRET, Shelter, LOFI, Tillatec and ISO; international dates at Fabric London and Upload Barcelona."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.55,
      maxWidth: 560,
      opacity: 0.8,
      textWrap: 'pretty'
    }
  }, "Not a label. Not an agency. A booking and curation brand \u2014 the name on the poster that tells you the lineup was chosen with care. We book the artists we want to hear, in the rooms we want to hear them in, and we trust our audience to do the rest.")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      fontFamily: VBX.mono,
      fontSize: 12,
      letterSpacing: 1.4,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement(CreditBlock, {
    label: "Co-owner / programmer",
    name: "Onom\xE9 "
  }), /*#__PURE__*/React.createElement(CreditBlock, {
    label: "Productions / advancing",
    name: "Boy Miguel"
  }), /*#__PURE__*/React.createElement(CreditBlock, {
    label: "Comms / content",
    name: "Elisavet"
  }), /*#__PURE__*/React.createElement(CreditBlock, {
    label: "Legal",
    name: "Make Your Transition B.V.",
    sub: "Amsterdam \xB7 Netherlands"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 20,
      borderTop: `1px solid ${VBX.lineInk}`,
      paddingTop: 20,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "13",
    l: "Years programming"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "160+",
    l: ""
  })))));
}
function CreditBlock({
  label,
  name,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5,
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 18,
      letterSpacing: -0.2,
      marginTop: 6,
      lineHeight: 1.3
    }
  }, name), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5,
      marginTop: 2
    }
  }, sub));
}
function Stat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 48,
      letterSpacing: -1.5,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.55,
      marginTop: 8,
      textTransform: 'uppercase',
      fontSize: 10,
      letterSpacing: 2
    }
  }, l));
}

// ============================================================================
// Archive preview — recent past nights as a tight grid of tiles.
// ============================================================================
function ArchivePreview({
  items
}) {
  const preview = items.slice(0, 8);
  return /*#__PURE__*/React.createElement("section", {
    id: "archive",
    "data-screen-label": "Archive",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '120px 32px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "03",
    label: "Archive",
    sub: "the nights behind us",
    count: `${items.length}+ entries`
  }), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 2,
      borderLeft: `1px solid ${VBX.line}`,
      borderTop: `1px solid ${VBX.line}`,
      background: VBX.line
    }
  }, preview.map((a, i) => /*#__PURE__*/React.createElement(ArchiveTile, {
    key: i,
    a: a
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, "Showing 8 of ", items.length), /*#__PURE__*/React.createElement("a", {
    href: "archive.html",
    style: {
      padding: '14px 18px',
      border: `1px solid ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: VBX.bone,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 7
  }), " Full archive \u2192")));
}
function ArchiveTile({
  a
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: VBX.ink,
      aspectRatio: '4 / 5',
      padding: 18,
      position: 'relative',
      overflow: 'hidden',
      borderRight: `1px solid ${VBX.line}`,
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: hover ? 1 : 0.55,
      transition: 'opacity 200ms'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: `${a.venue}\n${a.dateLabel}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.85) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.8
  }, a.day, " \xB7 ", a.dateLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 26,
      letterSpacing: -0.6,
      lineHeight: 1
    }
  }, a.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 14,
      opacity: 0.8,
      marginTop: 6,
      lineHeight: 1.3
    }
  }, a.title)));
}

// ============================================================================
// Record Label — VBX vinyl releases.
// ============================================================================
const VBX_RELEASES = [{
  cat: 'VBX010',
  artist: 'DOTT',
  title: 'Stutter Rolling NRG EP',
  date: 'Feb 9, 2026',
  format: '1× Vinyl 12"',
  price: '14.5€',
  sleeve: 'site/assets/sleeves/vbx010.png',
  tracks: ['A1 Stutter Rolling NRG', 'A2 Slow Changes', 'B1 Baby Relax', 'B2 Part Time Bomba Head'],
  blurb: 'VBX Records hits double digits with a slow-burning four-tracker from Bangkok native DOTT — intricate sound design rooted on the deeper end.',
  url: 'https://www.one-eye-witness.com/release/1768323691/dott-stutter-rolling-nrg-ep'
}, {
  cat: 'VBX009',
  artist: 'Olsvangèr',
  title: 'Magmastika EP',
  date: '16 Oct 2025',
  format: '1× Vinyl 12"',
  price: '14.5€',
  sleeve: 'site/assets/sleeves/vbx009.png',
  tracks: ['A1 Magmastika', 'A2 Omeli Gopel', 'B1 Bright Seen', 'B2 Silver Dragons'],
  blurb: 'After a short hiatus, VBX Records returns with a bang, proudly presenting the ninth installment on the label: the Magmastika EP by Olsvangèr. Four deep tracks drifting through introspective electronics, house and progressive moods — a return to form, and the beginning of what\u2019s to come on VBX Records.',
  url: 'https://www.one-eye-witness.com/release/1758801875/olsvanger-magmastika'
}];
function Records() {
  return /*#__PURE__*/React.createElement("section", {
    id: "records",
    "data-screen-label": "Record Label",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.boneWarm,
      color: VBX.ink,
      padding: '120px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeaderInk, {
    number: "04",
    label: "",
    sub: "VBX VINYL RELEASES",
    count: `VBX001 — VBX${String(VBX_RELEASES[0].cat).slice(3)}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 48,
      marginTop: 24,
      maxWidth: 1200
    }
  }, VBX_RELEASES.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: r.url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 24,
      borderTop: `1px solid ${VBX.lineInk}`,
      paddingTop: 18,
      color: VBX.ink,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      background: r.sleeve ? 'transparent' : VBX.ink,
      color: VBX.boneWarm,
      display: 'grid',
      placeItems: 'center',
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      overflow: 'hidden',
      position: 'relative'
    }
  }, r.sleeve ? /*#__PURE__*/React.createElement("img", {
    src: r.sleeve,
    alt: `${r.artist} — ${r.title}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  }) : r.cat), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55,
    color: VBX.ink
  }, r.cat, " \xB7 ", r.date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 24,
      letterSpacing: -0.6,
      lineHeight: 1.1,
      marginTop: 10
    }
  }, r.artist), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 1.3,
      marginTop: 4
    }
  }, r.title), r.blurb && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 12,
      opacity: 0.75,
      textWrap: 'pretty'
    }
  }, r.blurb), r.tracks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: VBX.mono,
      fontSize: 11,
      opacity: 0.6,
      lineHeight: 1.7
    }
  }, r.tracks.map((t, j) => /*#__PURE__*/React.createElement("div", {
    key: j
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.5,
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, r.format), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, r.price), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      borderBottom: `1px solid ${VBX.ink}`
    }
  }, "BUY \u2192")))))));
}
function SectionHeaderInk({
  number,
  label,
  sub,
  count
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbx-section-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 32,
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.lineInk}`,
      paddingBottom: 18,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.55,
    color: VBX.ink
  }, "N\xBA ", number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: -1.2,
      lineHeight: 1
    }
  }, label, sub && (label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 0,
      marginLeft: 18,
      opacity: 0.55
    },
    dangerouslySetInnerHTML: {
      __html: `— ${sub}`
    }
  }) : /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: `— ${sub}`
    }
  }))), count && /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55,
    color: VBX.ink
  }, count));
}
Object.assign(window, {
  About,
  ArchivePreview,
  Records,
  SectionHeaderInk
});
