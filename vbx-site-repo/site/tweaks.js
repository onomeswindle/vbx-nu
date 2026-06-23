// Tweaks panel — floating bottom-right. Only visible in tweak mode.
// Exposes: accent hue (red ↔ orange), hero density, light/dark for Records/About split,
// headline weight (for body-serif vs grotesque feel).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 14,
  "accentOn": true,
  "density": "editorial",
  "headlineStyle": "grotesque",
  "showGrid": false,
  "invertMidsection": true
} /*EDITMODE-END*/;
function useTweaks() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const onMsg = e => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', onMsg);
    // announce available AFTER listener is live
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const set = patch => {
    setTweaks(t => {
      const next = {
        ...t,
        ...patch
      };
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: patch
      }, '*');
      return next;
    });
  };
  return {
    tweaks,
    set,
    active
  };
}
function TweaksPanel({
  tweaks,
  set,
  active
}) {
  if (!active) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "vbx-tweaks-panel",
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 100,
      width: 300,
      padding: 18,
      background: VBX.ink,
      color: VBX.bone,
      border: `1px solid ${VBX.bone}`,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.2,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${VBX.line}`,
      paddingBottom: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 7
  }), " TWEAKS"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "VBX.SITE")), /*#__PURE__*/React.createElement(Row, {
    label: "Accent hue"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "360",
    step: "1",
    value: tweaks.accentHue,
    onChange: e => set({
      accentHue: +e.target.value
    }),
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6,
      width: 36,
      textAlign: 'right'
    }
  }, tweaks.accentHue, "\xB0")), /*#__PURE__*/React.createElement(Row, {
    label: "Red accent"
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: tweaks.accentOn,
    onClick: () => set({
      accentOn: !tweaks.accentOn
    })
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Density"
  }, ['tight', 'editorial', 'airy'].map(d => /*#__PURE__*/React.createElement(Chip, {
    key: d,
    active: tweaks.density === d,
    onClick: () => set({
      density: d
    })
  }, d))), /*#__PURE__*/React.createElement(Row, {
    label: "Headlines"
  }, [['grotesque', 'Inter'], ['serif', 'Serif']].map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    active: tweaks.headlineStyle === k,
    onClick: () => set({
      headlineStyle: k
    })
  }, l))), /*#__PURE__*/React.createElement(Row, {
    label: "Light midsection"
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: tweaks.invertMidsection,
    onClick: () => set({
      invertMidsection: !tweaks.invertMidsection
    })
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Grid overlay"
  }, /*#__PURE__*/React.createElement(Toggle, {
    on: tweaks.showGrid,
    onClick: () => set({
      showGrid: !tweaks.showGrid
    })
  })));
}
function Row({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6,
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, children));
}
function Chip({
  active,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: '5px 9px',
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      cursor: 'pointer',
      background: active ? VBX.bone : 'transparent',
      color: active ? VBX.ink : VBX.bone,
      border: `1px solid ${active ? VBX.bone : VBX.line}`
    }
  }, children);
}
function Toggle({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 34,
      height: 18,
      position: 'relative',
      background: on ? VBX.bone : 'transparent',
      border: `1px solid ${VBX.bone}`,
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 1,
      left: on ? 17 : 1,
      width: 14,
      height: 14,
      background: on ? VBX.ink : VBX.bone,
      transition: 'left 120ms ease'
    }
  }));
}
function GridOverlay() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 90,
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 12
    }
  }, Array.from({
    length: 12
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(200,54,47,0.06)',
      borderLeft: '1px solid rgba(200,54,47,0.18)'
    }
  }))));
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  GridOverlay
});
