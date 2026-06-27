// Nav — fixed, minimal. Works for all pages via `page` prop.
const { useState, useEffect } = React;

function Nav({ current = 'index', onNav, page = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [soonTarget, setSoonTarget] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (!soonTarget) return;
    const t = setTimeout(() => setSoonTarget(null), 1600);
    return () => clearTimeout(t);
  }, [soonTarget]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When arriving with a hash (e.g. index.html#contact), offset-scroll so the
  // target heading sits below the fixed nav.
  useEffect(() => {
    if (!window.location.hash) return;
    const scrollToHash = () => {
      const el = document.querySelector(window.location.hash);
      if (!el) return;
      const navH = 72;
      const y = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    // Two passes: once now, once after layout/images settle.
    scrollToHash();
    const t = setTimeout(scrollToHash, 350);
    return () => clearTimeout(t);
  }, []);

  // Home gets in-page anchors; other pages link back to home sections.
  const isHome = page === 'home';
  const links = [
    { id: 'tickets', label: 'Tickets', href: 'tickets.html' },
    { id: 'events',  label: 'Events',  href: 'events.html' },
    { id: 'records', label: 'Label', href: 'label.html' },
    { id: 'releases', label: 'Mixes',   href: 'releases.html' },
    { id: 'merch',   label: 'Merch',   href: '#merch', comingSoon: true },
    { id: 'contact', label: 'Contact', href: isHome ? '#contact' : 'index.html#contact' },
  ];

  return (
    <nav className="vbx-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '20px 32px',
      background: scrolled || mobileOpen ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(14px) saturate(1.1)' : 'none',
      WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(14px) saturate(1.1)' : 'none',
      borderBottom: scrolled || mobileOpen ? `1px solid ${VBX.line}` : '1px solid transparent',
      transition: 'background 180ms ease, border-color 180ms ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      color: VBX.bone,
    }}>
      <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
        <RedSquare size={10} />
        <Wordmark size={22} color={VBX.bone} />
        <MonoLabel className="vbx-nav-brand-label" size={10} spacing={2.5} opacity={0.55} style={{ marginLeft: 8 }}>Amsterdam</MonoLabel>
      </a>

      {/* Mobile hamburger toggle — hidden on desktop by default (display:none), shown via media query. */}
      <button
        type="button"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(o => !o)}
        className="vbx-nav-mobile-toggle"
        style={{
          display: 'none',
          alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, padding: 0,
          background: 'transparent', border: `1px solid ${VBX.line}`,
          color: VBX.bone, cursor: 'pointer',
        }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {mobileOpen ? (
            <>
              <line x1="2" y1="2" x2="16" y2="12" />
              <line x1="16" y1="2" x2="2" y2="12" />
            </>
          ) : (
            <>
              <line x1="1" y1="3" x2="17" y2="3" />
              <line x1="1" y1="11" x2="17" y2="11" />
            </>
          )}
        </svg>
      </button>

      <div className="vbx-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {links.map(l => {
          const active = current === l.id || page === l.id;
          return (
            <a key={l.id} href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (l.comingSoon) {
                  e.preventDefault();
                  setSoonTarget(l.id);
                  return;
                }
                // In-page anchor on Home: scroll to target with fixed-nav offset.
                if (isHome && l.href.startsWith('#')) {
                  const el = document.querySelector(l.href);
                  if (el) {
                    e.preventDefault();
                    const navH = 72;
                    const y = el.getBoundingClientRect().top + window.scrollY - navH;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    history.replaceState(null, '', l.href);
                  }
                }
              }}
              style={{
                fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
                textTransform: 'uppercase', color: VBX.bone,
                padding: '10px 14px', textDecoration: 'none',
                opacity: active ? 1 : 0.65,
                borderBottom: active ? `1px solid ${VBX.red}` : '1px solid transparent',
                transition: 'opacity 120ms ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = active ? 1 : 0.65}
            >{l.label}{soonTarget === l.id && (
              <span style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                marginTop: 8, padding: '6px 10px',
                background: VBX.bone, color: VBX.ink,
                fontFamily: VBX.mono, fontSize: 10, letterSpacing: 2, whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}>Coming soon</span>
            )}</a>
          );
        })}

        <a href="https://linktr.ee/vbx.nu" target="_blank" rel="noopener"
          style={{
            fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', color: VBX.bone,
            padding: '10px 14px', textDecoration: 'none',
            opacity: 0.75,
            border: `1px solid ${VBX.line}`,
            marginLeft: 8,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.75}
        >Linktree ↗</a>

        <a href="https://t.me/vbxinnercircle" target="_blank" rel="noopener"
          style={{
            fontFamily: VBX.mono, fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase',
            marginLeft: 16,
            padding: '10px 16px',
            background: VBX.bone, color: VBX.ink,
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
        >
          <RedSquare size={7} />
          Join our innercircle
        </a>
      </div>

      {/* Mobile drawer — only visible when hamburger is open + we're on phone. */}
      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,10,10,0.97)',
          borderTop: `1px solid ${VBX.line}`,
          borderBottom: `1px solid ${VBX.line}`,
          padding: '8px 18px 20px',
          display: 'flex', flexDirection: 'column',
        }}>
          {links.map(l => {
            const active = current === l.id || page === l.id;
            return (
              <a key={l.id} href={l.href}
                onClick={(e) => {
                  if (l.comingSoon) {
                    e.preventDefault();
                    setSoonTarget(l.id);
                    return;
                  }
                  setMobileOpen(false);
                  if (isHome && l.href.startsWith('#')) {
                    const el = document.querySelector(l.href);
                    if (el) {
                      e.preventDefault();
                      const y = el.getBoundingClientRect().top + window.scrollY - 64;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      history.replaceState(null, '', l.href);
                    }
                  }
                }}
                style={{
                  fontFamily: VBX.sans, fontWeight: 900, fontSize: 32,
                  letterSpacing: -0.8, color: VBX.bone,
                  padding: '16px 0', textDecoration: 'none',
                  borderBottom: `1px solid ${VBX.line}`,
                  opacity: active ? 1 : 0.85,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
              >
                <span>{l.label}</span>
                {soonTarget === l.id && (
                  <MonoLabel size={10} opacity={0.7}>Coming soon</MonoLabel>
                )}
                {l.comingSoon && soonTarget !== l.id && (
                  <MonoLabel size={10} opacity={0.4}>Soon</MonoLabel>
                )}
              </a>
            );
          })}
          <a href="https://t.me/vbxinnercircle" target="_blank" rel="noopener" style={{
            marginTop: 18, padding: '16px 18px',
            background: VBX.bone, color: VBX.ink,
            fontFamily: VBX.mono, fontSize: 12, letterSpacing: 2,
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
            <RedSquare size={7} /> Join our innercircle
          </a>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;
