// Home hero — confident brand statement + next show as a poster object.
// Slim: Home is NOT the events listing.

function Hero({
  next
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "vbx-hero-pad",
    style: {
      position: 'relative',
      minHeight: '100vh',
      padding: '140px 32px 48px',
      background: VBX.ink,
      color: VBX.bone,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-meta-rail",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${VBX.line}`,
      paddingBottom: 18,
      marginBottom: 80
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
  }), "AMSTERDAM \xB7 SINCE 2013"), /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.7
  }, "52.3676\xB0 N \xB7 4.9041\xB0 E")), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2 vbx-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
      gap: 64,
      alignItems: 'start',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-xl",
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(84px, 11vw, 180px)',
      letterSpacing: '-0.04em',
      lineHeight: 0.92,
      textWrap: 'balance'
    }
  }, "Booking,", /*#__PURE__*/React.createElement("br", null), "curation,", /*#__PURE__*/React.createElement("br", null), "records."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 24,
      maxWidth: 720,
      borderTop: `1px solid ${VBX.line}`,
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.6
  }, "Position"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.35,
      letterSpacing: -0.2,
      textWrap: 'pretty'
    }
  }, "Not a label. Not an agency. A booking and curation brand - the name on the poster that tells you the lineup was chosen with care. We book the artists we want to hear, in the rooms we want to hear them in, and we trust our audience to do the rest."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      border: `1px solid ${VBX.line}`,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(232,227,216,0.02)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 14,
      borderBottom: `1px solid ${VBX.line}`,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.7
  }, /*#__PURE__*/React.createElement(RedSquare, {
    size: 7,
    style: {
      marginRight: 8,
      verticalAlign: 'middle',
      transform: 'translateY(-1px)'
    }
  }), "Next up"), /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, next.status)), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.55
  }, next.day, " \xB7 ", next.dateLabel, " \xB7 ", next.city), /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-l",
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(56px, 7vw, 110px)',
      letterSpacing: '-0.04em',
      lineHeight: 0.85,
      marginTop: 10,
      marginBottom: 18
    }
  }, next.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18,
      borderTop: `1px solid ${VBX.line}`,
      borderBottom: `1px solid ${VBX.line}`,
      background: VBX.ink,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: next.image && next.image.src,
    alt: next.image && next.image.label,
    style: {
      maxWidth: '100%',
      maxHeight: 420,
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 2.5,
      textTransform: 'uppercase',
      opacity: 0.55,
      marginBottom: 10
    }
  }, "Full line up"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 12,
      letterSpacing: 1.2,
      lineHeight: 1.8,
      opacity: 0.85
    }
  }, [...next.headliners].sort((a, b) => b.localeCompare(a)).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, h))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(TicketButton, {
    status: next.status,
    url: next.ticketUrl,
    provider: next.provider,
    buyUrl: next.buyUrl
  })))));
}
function TicketButton({
  status,
  url,
  provider,
  buyUrl
}) {
  const soldOut = status === 'SOLD OUT';
  const announce = status === 'ANNOUNCEMENT SOON';
  if (soldOut) return /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '14px 18px',
      border: `1px solid ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: VBX.mute
    }
  }, "Sold out");
  if (announce) return /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '14px 18px',
      border: `1px dashed ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: VBX.mute
    }
  }, "TBA");

  // When there's a direct checkout (weeztix etc), show TWO buttons: primary
  // "Tickets" points to the shop, secondary "RA page" keeps the listing.
  const primaryUrl = buyUrl || url;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: primaryUrl,
    target: "_blank",
    rel: "noopener",
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
  }), " Tickets"), buyUrl && url && url !== '#' && /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener",
    style: {
      padding: '14px 18px',
      border: `1px solid ${VBX.line}`,
      color: 'inherit',
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, "RA page \u2197"));
}

// Home "Next 3" — small teaser block that links to /events.
function NextThree({
  events
}) {
  const three = events.slice(0, 3);
  return /*#__PURE__*/React.createElement("section", {
    id: "next-three",
    "data-screen-label": "Next three",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '120px 32px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    label: "Next three",
    sub: "upcoming shows on the calendar",
    count: /*#__PURE__*/React.createElement("a", {
      href: "events.html",
      style: {
        color: VBX.bone,
        textDecoration: 'none'
      }
    }, "All events \u2192")
  }), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, three.map(e => /*#__PURE__*/React.createElement(NextCard, {
    key: e.id,
    e: e
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "events.html",
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
  }), " Full schedule \u2192")));
}
function NextCard({
  e
}) {
  const [hover, setHover] = React.useState(false);
  const soldOut = e.status === 'SOLD OUT';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      color: VBX.bone,
      border: `1px solid ${VBX.line}`,
      background: hover ? 'rgba(232,227,216,0.04)' : 'transparent',
      transition: 'background 140ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: e.image && e.image.src,
    label: e.image.label,
    fit: "contain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.7
  }, e.day, " \xB7 ", e.dateLabel), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: soldOut ? 0.5 : 0.9,
    color: soldOut ? VBX.mute : VBX.bone
  }, soldOut && /*#__PURE__*/React.createElement(RedSquare, {
    size: 6,
    style: {
      marginRight: 6,
      verticalAlign: 'middle',
      transform: 'translateY(-1px)'
    }
  }), e.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 34,
      letterSpacing: -0.8,
      lineHeight: 0.95
    }
  }, e.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      opacity: 0.55,
      marginTop: 4
    }
  }, e.city), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 9,
      letterSpacing: 2.5,
      opacity: 0.45,
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "a\u2013z"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.4,
      opacity: 0.92,
      textWrap: 'pretty'
    }
  }, [...e.headliners, ...(e.support || [])].sort((a, b) => b.localeCompare(a)).join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(TicketButton, {
    status: e.status,
    url: e.ticketUrl,
    provider: e.provider,
    buyUrl: e.buyUrl
  }))));
}
Object.assign(window, {
  Hero,
  TicketButton,
  NextThree
});
