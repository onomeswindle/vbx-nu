// Upcoming — list of events below the hero.
// Editorial row-style: date numeral · venue · title + lineup · ticket.
// Hover reveals image + crosshair cursor. Row opens full detail block inline.

function Upcoming({
  events
}) {
  const [openId, setOpenId] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "upcoming",
    "data-screen-label": "Upcoming",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '120px 32px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    label: "Upcoming",
    count: `${events.length} dates`
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, events.map((e, i) => /*#__PURE__*/React.createElement(EventRow, {
    key: e.id,
    event: e,
    index: i + 1,
    open: openId === e.id,
    onToggle: () => setOpenId(openId === e.id ? null : e.id)
  }))));
}
function SectionHeader({
  number,
  label,
  count,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbx-section-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      gap: 32,
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.line}`,
      paddingBottom: 18,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.55
  }, "N", /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 0
    }
  }, "\xBA"), " ", number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: -1.2,
      lineHeight: 1
    }
  }, label, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 0,
      marginLeft: 18,
      opacity: 0.6
    }
  }, "\u2014 ", sub)), count && /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, count));
}
function EventRow({
  event: e,
  index,
  open,
  onToggle
}) {
  const [hover, setHover] = React.useState(false);
  const soldOut = e.status === 'SOLD OUT';
  return /*#__PURE__*/React.createElement("li", {
    style: {
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onToggle,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 180px 140px 1fr auto',
      gap: 24,
      alignItems: 'center',
      padding: '28px 0',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.4
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 28,
      letterSpacing: -0.8,
      lineHeight: 1
    }
  }, e.dateLabel), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.55,
    style: {
      marginTop: 6
    }
  }, e.day)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: -0.3,
      lineHeight: 1
    }
  }, e.venue), /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: 0.5,
    style: {
      marginTop: 6
    }
  }, e.city)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontWeight: 500,
      fontSize: 19,
      letterSpacing: -0.2,
      lineHeight: 1.3,
      opacity: hover ? 1 : 0.88
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 15,
      opacity: 0.6,
      marginTop: 6,
      lineHeight: 1.3
    }
  }, e.headliners.join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 10,
    opacity: soldOut ? 0.5 : 0.9,
    color: soldOut ? VBX.mute : VBX.bone
  }, soldOut && /*#__PURE__*/React.createElement(RedSquare, {
    size: 6,
    style: {
      marginRight: 8,
      verticalAlign: 'middle',
      transform: 'translateY(-1px)'
    }
  }), e.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 18,
      opacity: 0.45,
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      transition: 'transform 180ms',
      display: 'inline-block',
      width: 14,
      textAlign: 'center'
    }
  }, "\u2192"))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: 24,
      padding: '0 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 40,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 360,
      border: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: e.image && e.image.src,
    label: e.image.label,
    fit: "cover"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 26,
      letterSpacing: -0.3,
      lineHeight: 1.3,
      textWrap: 'pretty'
    }
  }, e.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '100px 1fr',
      gap: 10,
      rowGap: 14,
      borderTop: `1px solid ${VBX.line}`,
      paddingTop: 18,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.4,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "DOORS"), /*#__PURE__*/React.createElement("span", null, e.doors), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "CLOSE"), /*#__PURE__*/React.createElement("span", null, e.close), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "LINEUP"), /*#__PURE__*/React.createElement("div", null, e.headliners.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, h)), e.support.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.55,
      marginTop: 4
    }
  }, "+ ", e.support.join(' · '))), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "VENUE"), /*#__PURE__*/React.createElement("span", null, e.venue, " \xB7 ", e.city), e.provider && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "TICKETS"), /*#__PURE__*/React.createElement("span", null, "via ", e.provider))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(TicketButton, {
    status: e.status,
    url: e.ticketUrl,
    provider: e.provider,
    buyUrl: e.buyUrl
  }))))));
}
Object.assign(window, {
  Upcoming,
  SectionHeader,
  EventRow
});
