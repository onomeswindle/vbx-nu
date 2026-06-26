// VBX site — shared tokens. Inherits from the capsule/stories system.
// Ink + bone, red-square accent, faded orange + aubergine as tertiaries.

// Basis Grotesque Arabic Pro — the VBX house face. Injected once.
(function injectVbxFonts() {
  if (document.getElementById('vbx-fonts')) return;
  // When bundled into a standalone file, window.__resources holds blob URLs for fonts.
  // Otherwise fall back to the on-disk paths relative to the HTML file.
  const R = window.__resources || {};
  const fLight   = R.fontLight   || 'site/assets/fonts/BasisGrotesqueArabicPro-Light.ttf';
  const fRegular = R.fontRegular || 'site/assets/fonts/BasisGrotesqueArabicPro-Regular.ttf';
  const fMedium  = R.fontMedium  || 'site/assets/fonts/BasisGrotesqueArabicPro-Medium.ttf';
  const fBold    = R.fontBold    || 'site/assets/fonts/BasisGrotesqueArabicPro-Bold.ttf';
  const fBlack   = R.fontBlack   || 'site/assets/fonts/BasisGrotesqueArabicPro-Black.ttf';
  const s = document.createElement('style');
  s.id = 'vbx-fonts';
  s.textContent = `
    @font-face { font-family: 'Basis Grotesque Arabic Pro'; font-style: normal; font-weight: 300;
      src: url('${fLight}') format('truetype'); font-display: swap; }
    @font-face { font-family: 'Basis Grotesque Arabic Pro'; font-style: normal; font-weight: 400;
      src: url('${fRegular}') format('truetype'); font-display: swap; }
    @font-face { font-family: 'Basis Grotesque Arabic Pro'; font-style: normal; font-weight: 500;
      src: url('${fMedium}') format('truetype'); font-display: swap; }
    @font-face { font-family: 'Basis Grotesque Arabic Pro'; font-style: normal; font-weight: 700;
      src: url('${fBold}') format('truetype'); font-display: swap; }
    @font-face { font-family: 'Basis Grotesque Arabic Pro'; font-style: normal; font-weight: 900;
      src: url('${fBlack}') format('truetype'); font-display: swap; }
    html, body { font-family: 'Basis Grotesque Arabic Pro', "Helvetica Neue", Arial, sans-serif; }

    /* ------------------------------------------------------------------ */
    /* TABLET — soften dense desktop layouts at 768px and below.          */
    /* ------------------------------------------------------------------ */
    @media (max-width: 768px) {
      .vbx-grid-2, .vbx-grid-3, .vbx-grid-4 {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
      }
      .vbx-section { padding-left: 24px !important; padding-right: 24px !important; }
      .vbx-section-pad { padding-top: 80px !important; padding-bottom: 80px !important; }
      .vbx-hero-pad { padding: 110px 24px 56px !important; min-height: auto !important; }
      .vbx-hero-grid { gap: 48px !important; grid-template-columns: 1fr !important; }
      .vbx-events-header { grid-template-columns: 1fr !important; gap: 24px !important; align-items: start !important; }
      .vbx-section-header {
        grid-template-columns: 1fr !important;
        gap: 8px !important;
        padding-bottom: 14px !important;
        margin-bottom: 28px !important;
      }
      .vbx-section-header > *:nth-child(2) { font-size: 32px !important; }
      .vbx-meta-rail {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 8px !important;
        margin-bottom: 48px !important;
      }
      /* Display type — stronger clamps so headlines never overflow. */
      .vbx-display-xl { font-size: clamp(56px, 14vw, 92px) !important; line-height: 0.9 !important; }
      .vbx-display-l  { font-size: clamp(44px, 12vw, 72px) !important; line-height: 0.92 !important; }
      .vbx-display-m  { font-size: clamp(32px, 9vw, 52px) !important; line-height: 0.95 !important; }
    }

    /* ------------------------------------------------------------------ */
    /* MOBILE — phone breakpoint only. Collapses multi-col grids to single */
    /* MOBILE — phone breakpoint only. Collapses multi-col grids to single */
    /* column, shrinks oversized type, reduces page padding.               */
    /* ------------------------------------------------------------------ */
    @media (max-width: 768px) {
      /* Generic hooks — JSX adds these class names to key containers. */
      .vbx-grid-2, .vbx-grid-3, .vbx-grid-4 {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
      }
      .vbx-hero-grid { gap: 40px !important; }
      .vbx-section { padding-left: 20px !important; padding-right: 20px !important; }
      .vbx-section-pad { padding-top: 72px !important; padding-bottom: 72px !important; }
      .vbx-hero-pad { padding: 96px 20px 40px !important; min-height: auto !important; }

      /* Oversized display type — clamp smaller on phones. */
      .vbx-display-xl { font-size: clamp(54px, 14vw, 84px) !important; line-height: 0.92 !important; }
      .vbx-display-l  { font-size: clamp(44px, 12vw, 72px) !important; line-height: 0.9 !important; }
      .vbx-display-m  { font-size: clamp(36px, 10vw, 56px) !important; line-height: 0.95 !important; }

      /* Section headers — stack number / title / count. */
      .vbx-section-header {
        grid-template-columns: 1fr !important;
        gap: 8px !important;
        padding-bottom: 14px !important;
        margin-bottom: 24px !important;
      }
      .vbx-section-header > *:nth-child(2) {
        font-size: 32px !important;
      }

      /* Section header variant used in the Events hero (title + count rails). */
      .vbx-events-header {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
        align-items: start !important;
      }

      /* Hero metadata rail (ISSUE Nº + coords) — stack vertically. */
      .vbx-meta-rail {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 8px !important;
        margin-bottom: 40px !important;
      }

      /* Event listing rows — stack. Buttons become grid. */
      .vbx-event-row {
        grid-template-columns: 1fr !important;
        gap: 10px !important;
        padding: 20px 0 !important;
      }

      /* Past-events table row — stack. */
      .vbx-past-row {
        grid-template-columns: 1fr !important;
        gap: 6px !important;
        padding: 18px 0 !important;
      }
      .vbx-past-row-header { display: none !important; }
      .vbx-past-expansion {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
        padding-left: 0 !important;
      }

      /* Info metadata grid (DATE / DOORS / etc). */
      .vbx-info-grid {
        grid-template-columns: 90px 1fr !important;
        gap: 10px 12px !important;
      }

      /* Event detail artwork — reduce aspect height so content is reachable. */
      .vbx-event-artwork { max-height: 60vh !important; }

      /* Filter rail label column narrower on phones. */
      .vbx-filter-row {
        grid-template-columns: 64px 1fr !important;
        gap: 10px !important;
      }

      /* Nav — desktop links hidden; hamburger shows. */
      .vbx-nav { padding: 14px 18px !important; }
      .vbx-nav-links { display: none !important; }
      .vbx-nav-mobile-toggle { display: inline-flex !important; }
      .vbx-nav-brand-label { display: none !important; }

      /* Tweaks panel — full bottom sheet on phone. */
      .vbx-tweaks-panel {
        left: 12px !important; right: 12px !important;
        bottom: 12px !important; width: auto !important;
        max-width: none !important; max-height: 70vh !important;
      }

      /* Footer — stack columns, smaller slogan. */
      .vbx-footer-top { grid-template-columns: 1fr !important; gap: 40px !important; }
      .vbx-footer-socials { grid-template-columns: 1fr !important; gap: 20px !important; }
      .vbx-footer-legal { flex-direction: column !important; gap: 8px !important; text-align: center !important; }

      /* Neighbor cards on event detail — stack, center-align. */
      .vbx-neighbor-grid { grid-template-columns: 1fr !important; gap: 14px !important; }

      /* Breadcrumb — allow wrap. */
      .vbx-breadcrumb { flex-wrap: wrap !important; gap: 6px !important; }
    }
  `;
  document.head.appendChild(s);
})();

const VBX_FONT = `'Basis Grotesque Arabic Pro', "Helvetica Neue", Helvetica, Arial, sans-serif`;

const VBX = {
  ink:        '#0A0A0A',
  inkSoft:    '#141418',
  bone:       '#E8E3D8',
  boneWarm:   '#F2EFEA',
  stone:      '#B8B4AD',
  mute:       '#8A8680',
  line:       'rgba(232,227,216,0.18)',
  lineInk:    'rgba(10,10,10,0.18)',
  red:        '#C8362F',      // the red-square signature
  orange:     '#C95A1F',      // faded orange, archive edition
  aubergine:  '#2A1A22',
  tobacco:    '#4A3A2A',

  // Everything in Basis Grotesque Arabic Pro. Italics fall back to the same face (no true italic cut available).
  sans:  VBX_FONT,
  mono:  VBX_FONT,
  serif: VBX_FONT,
};

// Red-square flag — recurring signature mark.
function RedSquare({ size = 10, style }) {
  return <span style={{
    display: 'inline-block', width: size, height: size,
    background: VBX.red, flex: 'none', ...style,
  }} />;
}

// Mono caps label with letterspacing discipline.
function MonoLabel({ children, size = 11, spacing = 2.5, opacity = 0.7, color, style, className }) {
  return <span className={className} style={{
    fontFamily: VBX.mono, fontSize: size, letterSpacing: spacing,
    textTransform: 'uppercase', opacity, color,
    display: 'inline-block', ...style,
  }}>{children}</span>;
}

// Photo — renders a real image if `src` is provided, otherwise a striped placeholder with `label`.
function Photo({ src, label, tone = 'dark', style, children, fit = 'cover' }) {
  const isDark = tone === 'dark';
  const bg = isDark ? '#1A1A1A' : '#D9D4CC';
  const fg = isDark ? 'rgba(232,227,216,0.55)' : 'rgba(10,10,10,0.55)';
  const stripe = isDark ? 'rgba(255,255,255,0.035)' : 'rgba(10,10,10,0.05)';
  // When we have a real image shown in "contain" mode, don't paint a filler
  // background behind it — the empty letterbox area should blend with the
  // parent section. Only show the bg/stripe when rendering a placeholder.
  const showBg = !src || fit !== 'contain';
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: showBg ? bg : 'transparent',
      backgroundImage: src ? 'none' : `repeating-linear-gradient(45deg, ${stripe} 0 2px, transparent 2px 14px)`,
      overflow: 'hidden',
      ...style,
    }}>
      {src && <img src={src} alt={label || ''} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: fit, display: 'block',
      }} />}
      {!src && label && <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: fg, fontFamily: VBX.mono, fontSize: 10, letterSpacing: 2.5,
        textTransform: 'uppercase', textAlign: 'center', padding: 12, lineHeight: 1.6,
        whiteSpace: 'pre-line',
      }}>{label}</div>}
      {children}
    </div>
  );
}

// VBX wordmark — real logo PNG. `color` picks the variant (bone/white → white art, anything else → black art).
function Wordmark({ size = 28, color = '#E8E3D8', style }) {
  const useWhite = typeof color === 'string' && (
    color.toLowerCase() === '#fff' || color.toLowerCase() === '#ffffff' ||
    color.toLowerCase() === 'white' || color === '#E8E3D8' || color === VBX.bone
  );
  const R = (typeof window !== 'undefined' && window.__resources) || {};
  const src = useWhite
    ? (R.logoWhite || 'site/assets/vbx-white.png')
    : (R.logoBlack || 'site/assets/vbx-black.png');
  // Source logo is ~1000×470 (aspect ~2.13)
  const height = size;
  const width = size * 2.13;
  return <img src={src} alt="vbx" style={{
    height, width, display: 'inline-block', objectFit: 'contain',
    ...style,
  }} />;
}

Object.assign(window, { VBX, RedSquare, MonoLabel, Photo, Wordmark });
