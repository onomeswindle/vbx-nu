function SocialIcon({ kind, size = 22, color = 'currentColor' }) {
  const sw = 1.6;
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  switch (kind) {
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill={color} stroke="none" />
        </svg>
      );
    case 'soundcloud':
      // Simplified outline cloud + waveform bars
      return (
        <svg {...common}>
          <path d="M3 15.5 V11.5" />
          <path d="M5.5 16 V10" />
          <path d="M8 16.5 V8.5" />
          <path d="M10.5 17 V7.5 a4 4 0 0 1 7.5 1.2 3.2 3.2 0 0 1 2.5 5.8 3 3 0 0 1 -2 2.5 H10.5 Z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...common}>
          <path d="M3 11.5 L21 4 L17.5 20 L12 15 L9.5 18 V13.5 L17.5 6.5 L9 12.5 Z" />
        </svg>
      );
    case 'linktree':
      return (
        <svg {...common}>
          <path d="M12 3 V13" />
          <path d="M12 13 L6 7" />
          <path d="M12 13 L18 7" />
          <path d="M8 21 V16" />
          <path d="M16 21 V16" />
        </svg>
      );
    case 'email':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7 L12 13 L20 7" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M15 3 H13 a3 3 0 0 0 -3 3 V9 H7.5 V12 H10 V21 H13 V12 H15.5 L16 9 H13 V6.5 a0.5 0.5 0 0 1 0.5 -0.5 H15 Z" />
        </svg>
      );
    case 'tiktok':
      // Musical note with a curl — simplified TikTok glyph.
      return (
        <svg {...common}>
          <path d="M13 3 V14.5 a3.5 3.5 0 1 1 -3.5 -3.5" />
          <path d="M13 3 c 0.4 2.6 2.4 4.6 5 5" />
        </svg>
      );
    default:
      return null;
  }
}

// Footer — "Stay in touch" block. Shared across pages.
// Mailing-list signup, socials, Telegram Friends & Crew, contact.

const SOCIAL = {
  instagram:  { handle: '@vbx.nu',      url: 'https://instagram.com/vbx.nu' },
  soundcloud: { handle: 'soundcloud.com/vbx-nu', url: 'https://soundcloud.com/vbx-nu' },
  tiktok:     { handle: '@vbx.nu',      url: 'https://www.tiktok.com/@vbx.nu' },
  telegram:   { handle: 'InnerCircle', url: 'https://t.me/vbxinnercircle' },
  linktree:   { handle: 'linktr.ee/vbx.nu', url: 'https://linktr.ee/vbx.nu' },
  email:      { label: 'info@vbx.nu',  url: 'mailto:info@vbx.nu' },
  facebook:   { handle: 'facebook.com/vbx.nu', url: 'https://facebook.com/vbx.nu' },
};

function Footer() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSent(true);
    setTimeout(() => { setEmail(''); setSent(false); }, 2400);
  };

  return (
    <footer id="contact" data-screen-label="Contact" className="vbx-section" style={{
      background: VBX.ink, color: VBX.bone,
      padding: '120px 32px 40px',
      borderTop: `1px solid ${VBX.line}`,
    }}>
      <SectionHeader number="05" label="Stay in touch" />

      <div className="vbx-footer-top vbx-grid-2" style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
        alignItems: 'start', paddingBottom: 60,
      }}>
        <div>
          <div className="vbx-display-m" style={{
            fontFamily: VBX.serif, fontWeight: 300,
            fontSize: 'clamp(36px, 4vw, 60px)',
            lineHeight: 1.1, letterSpacing: -1, textWrap: 'pretty',
          }}>
            Lineups in your inbox before the posters go up.
          </div>
          <div style={{
            fontFamily: VBX.sans, fontSize: 15, opacity: 0.7, marginTop: 20, maxWidth: 520,
            lineHeight: 1.5,
          }}>
            First dibs on lineups, pre-sale tickets, and announcements before they go public. One email per event, roughly twice a month. Unsubscribe takes one click.
          </div>

          <a id="list" href="https://vbx.us5.list-manage.com/subscribe?u=aeef0612e595eb289491f9ed0&id=9171db8c48" target="_blank" rel="noopener" style={{
            marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '18px 26px', background: VBX.bone, color: VBX.ink,
            fontFamily: VBX.mono, fontSize: 12, letterSpacing: 2,
            textTransform: 'uppercase', textDecoration: 'none',
            border: `1px solid ${VBX.bone}`,
          }}>
            <RedSquare size={8} /> Subscribe to the mailing list →
          </a>
        </div>

        <div className="vbx-footer-socials" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
          fontFamily: VBX.mono, fontSize: 12, letterSpacing: 1.4, lineHeight: 1.7,
          gridAutoRows: 'min-content',
        }}>
          <SocialBlock kind="instagram"  label="Instagram"  handle={SOCIAL.instagram.handle}  url={SOCIAL.instagram.url}  note="news, lineups, nights" />
          <SocialBlock kind="soundcloud" label="Soundcloud" handle={SOCIAL.soundcloud.handle} url={SOCIAL.soundcloud.url} note="podcasts" />
          <SocialBlock kind="tiktok"     label="TikTok"     handle={SOCIAL.tiktok.handle}     url={SOCIAL.tiktok.url}     note="clips from the nights" />
          <SocialBlock kind="facebook"   label="Facebook"   handle={SOCIAL.facebook.handle}   url={SOCIAL.facebook.url}   note="events & rsvps" />
          <SocialBlock kind="telegram"   label="Telegram"   handle={SOCIAL.telegram.handle}   url={SOCIAL.telegram.url}   note="friends & crew" />
          <SocialBlock kind="linktree"   label="Linktree"   handle={SOCIAL.linktree.handle}   url={SOCIAL.linktree.url}   note="all links in one place" />
          <SocialBlock kind="email"      label="Email"      handle={SOCIAL.email.label}       url={SOCIAL.email.url}      note="bookings · press · general" />
        </div>
      </div>

      {/* Slogan */}
      <div style={{
        borderTop: `1px solid ${VBX.line}`,
        padding: '64px 0 56px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        <img
          src={(window.__resources && window.__resources.gttt) || "site/assets/good-things-take-time.png"}
          alt="Good things take time"
          style={{
            width: 'min(560px, 70vw)', height: 'auto',
            filter: 'invert(1) brightness(1.05)',
            opacity: 0.92,
            display: 'block',
          }}
        />
      </div>

      {/* Bottom legal rule */}
      <div className="vbx-footer-legal" style={{
        borderTop: `1px solid ${VBX.line}`, paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: VBX.mono, fontSize: 10, letterSpacing: 2.2,
        textTransform: 'uppercase', opacity: 0.55, flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <RedSquare size={8} />
          <span>VBX ·</span>
        </div>
        <div style={{ display: 'flex', gap: 22 }}>
          <span>Amsterdam · NL</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

function SocialBlock({ kind, label, handle, url, note }) {
  return (
    <a href={url} target="_blank" rel="noopener" style={{
      display: 'block', color: VBX.bone, textDecoration: 'none',
      borderTop: `1px solid ${VBX.line}`, paddingTop: 14,
    }}>
      <div style={{ opacity: 0.5, textTransform: 'uppercase' }}>{label}</div>
      <div style={{
        fontFamily: VBX.sans, fontWeight: 500, fontSize: 19, letterSpacing: -0.2,
        marginTop: 8, lineHeight: 1.2,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        {kind && <SocialIcon kind={kind} size={29} color={VBX.bone} />}
        <span>{handle} →</span>
      </div>
      {note && <div style={{ opacity: 0.5, marginTop: 4 }}>{note}</div>}
    </a>
  );
}

window.Footer = Footer;
