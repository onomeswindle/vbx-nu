// App — composes the Home page. Slim: hero + next-three teaser + about + records teaser + footer.
// Events listing is its own page (events.html).

function App() {
  const {
    tweaks,
    set,
    active
  } = useTweaks();
  const accent = tweaks.accentOn ? `oklch(0.58 0.18 ${tweaks.accentHue})` : VBX.bone;
  const densityScale = tweaks.density === 'tight' ? 0.75 : tweaks.density === 'airy' ? 1.25 : 1;
  React.useEffect(() => {
    document.documentElement.style.setProperty('--vbx-accent', accent);
    document.documentElement.style.setProperty('--vbx-density', densityScale);
    let s = document.getElementById('vbx-tweak-style');
    if (!s) {
      s = document.createElement('style');
      s.id = 'vbx-tweak-style';
      document.head.appendChild(s);
    }
    s.textContent = `
      [data-red] { background: ${accent} !important; }
      section { padding-top: calc(120px * var(--vbx-density)) !important;
                padding-bottom: calc(120px * var(--vbx-density)) !important; }
    `;
  }, [accent, densityScale, tweaks.headlineStyle]);
  const [current, setCurrent] = React.useState('top');
  const navTo = id => {
    setCurrent(id);
    if (id === 'top') window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });else document.getElementById(id)?.scrollIntoView?.({
      block: 'start'
    });
  };
  React.useEffect(() => {
    window.__vbxNav = navTo;
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    current: current,
    onNav: navTo,
    page: "home"
  }), /*#__PURE__*/React.createElement(Hero, {
    next: UPCOMING[0]
  }), /*#__PURE__*/React.createElement(NextThree, {
    events: UPCOMING
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    tweaks: tweaks,
    set: set,
    active: active
  }), tweaks.showGrid && /*#__PURE__*/React.createElement(GridOverlay, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
