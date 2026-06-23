// Merch — thin page. Minimal product grid referencing the VBX.009 capsule.
// Pulls from the existing vbx-capsule/data.jsx via window.CAPSULE if loaded.

function MerchApp() {
  const {
    tweaks,
    set,
    active
  } = useTweaks();
  const accent = tweaks.accentOn ? `oklch(0.58 0.18 ${tweaks.accentHue})` : VBX.bone;
  React.useEffect(() => {
    document.documentElement.style.setProperty('--vbx-accent', accent);
    let s = document.getElementById('vbx-tweak-style');
    if (!s) {
      s = document.createElement('style');
      s.id = 'vbx-tweak-style';
      document.head.appendChild(s);
    }
    s.textContent = `[data-red] { background: ${accent} !important; }`;
  }, [accent]);
  const cuts = window.CAPSULE && window.CAPSULE.cuts || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    page: "merch"
  }), /*#__PURE__*/React.createElement("header", {
    className: "vbx-section vbx-hero-pad",
    style: {
      padding: '140px 32px 60px',
      background: VBX.ink,
      color: VBX.bone
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-meta-rail",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${VBX.line}`,
      paddingBottom: 18,
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.7
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 8,
    style: {
      marginRight: 10,
      verticalAlign: 'middle',
      transform: 'translateY(-1px)'
    }
  }), "MERCH \u2014 VBX.009 \xB7 ROOM TONE"), /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, "AW 2026 \xB7 300 per cut")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-events-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-xl",
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(80px, 12vw, 200px)',
      letterSpacing: '-0.04em',
      lineHeight: 0.85
    }
  }, "merch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 1.4,
      marginTop: 24,
      maxWidth: 620,
      opacity: 0.8
    }
  }, "A crewneck capsule. Four cuts. One edition. Never restocked.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 12,
      letterSpacing: 1.4,
      lineHeight: 1.8,
      opacity: 0.8,
      borderTop: `1px solid ${VBX.line}`,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, "500 GSM LOOPBACK FRENCH TERRY \xB7 PORTO, PORTUGAL"), /*#__PURE__*/React.createElement("div", null, "GARMENT-DYED \xB7 NUMBERED 001\u2013300 \xB7 UNCOATED BOARD BOX"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      opacity: 0.55
    }
  }, "Shop coming soon. Friends & Crew get first access.")))), /*#__PURE__*/React.createElement("section", {
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '40px 32px 120px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, cuts.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 0',
      borderTop: `1px solid ${VBX.line}`,
      borderBottom: `1px solid ${VBX.line}`,
      textAlign: 'center',
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 28,
      opacity: 0.6
    }
  }, "Capsule drop imminent.") : /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 2,
      borderLeft: `1px solid ${VBX.line}`,
      borderTop: `1px solid ${VBX.line}`,
      background: VBX.line
    }
  }, cuts.map(c => /*#__PURE__*/React.createElement(MerchCard, {
    key: c.id,
    cut: c
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, "Shop opens with the drop. Join the list for first access."), /*#__PURE__*/React.createElement("a", {
    href: "index.html#list",
    style: {
      padding: '14px 18px',
      background: VBX.bone,
      color: VBX.ink,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 7
  }), " Join the list \u2192"))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    tweaks: tweaks,
    set: set,
    active: active
  }));
}
function MerchCard({
  cut: c
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: VBX.ink,
      padding: 32,
      borderRight: `1px solid ${VBX.line}`,
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.6
  }, c.archive), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.6
  }, "ROUTE ", c.route)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: c.colorHex,
      position: 'relative',
      marginBottom: 24,
      border: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 2.5,
      color: c.inkHex,
      opacity: 0.4
    }
  }, c.name.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 40,
      letterSpacing: -1,
      lineHeight: 0.95
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 18,
      opacity: 0.75,
      marginTop: 10,
      lineHeight: 1.4
    }
  }, c.oneLine), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.6,
      opacity: 0.6,
      marginTop: 18,
      lineHeight: 1.6
    }
  }, c.color.toUpperCase(), " \xB7 300 UNITS \xB7 \u20AC", [95, 110, 145, 125][['low', 'ink', 'archive', 'last-hour'].indexOf(c.id)] || 110), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 14px',
      border: `1px dashed ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: VBX.mute
    }
  }, "Drop pending")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MerchApp, null));
