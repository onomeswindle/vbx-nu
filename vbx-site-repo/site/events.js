// Events page — priority surface.
// Upcoming chronological (next show most prominent) + past archive w/ venue + year filters.

function EventsApp() {
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
  const [venueFilter, setVenueFilter] = React.useState('ALL');
  const [yearFilter, setYearFilter] = React.useState('ALL');
  const [monthFilter, setMonthFilter] = React.useState('ALL');
  const allVenues = ['ALL', ...VENUES];
  const years = Array.from(new Set(ARCHIVE.map(a => a.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
  const allYears = ['ALL', ...years];
  const MONTH_LABELS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const allMonths = ['ALL', ...MONTH_LABELS];
  const monthOf = iso => MONTH_LABELS[Number(iso.slice(5, 7)) - 1];
  const pastFiltered = ARCHIVE.filter(a => {
    if (venueFilter !== 'ALL' && a.venue !== venueFilter) return false;
    if (yearFilter !== 'ALL' && !a.date.startsWith(yearFilter)) return false;
    if (monthFilter !== 'ALL' && monthOf(a.date) !== monthFilter) return false;
    return true;
  });
  const upcomingFiltered = UPCOMING.filter(e => {
    if (monthFilter !== 'ALL' && monthOf(e.date) !== monthFilter) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    page: "events"
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
  }), "EVENTS \u2014 ", UPCOMING.length, " UPCOMING \xB7 ", ARCHIVE.length, " IN ARCHIVE"), /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, "Updated ", new Date().toISOString().slice(0, 10))), /*#__PURE__*/React.createElement("div", {
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
  }, "Events"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 1.4,
      marginTop: 24,
      maxWidth: 620,
      opacity: 0.8
    }
  }, "Every show we've booked, upcoming and past.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${VBX.line}`,
      paddingTop: 18,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.4
    }
  }, /*#__PURE__*/React.createElement(FilterRow, {
    label: "Month",
    items: allMonths,
    value: monthFilter,
    onChange: setMonthFilter
  })))), upcomingFiltered[0] && /*#__PURE__*/React.createElement(FeaturedNext, {
    e: upcomingFiltered[0]
  }), /*#__PURE__*/React.createElement("section", {
    id: "upcoming-list",
    "data-screen-label": "Upcoming list",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '80px 32px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    label: "Upcoming",
    count: `${upcomingFiltered.length} dates`
  }), upcomingFiltered.length === 0 ? /*#__PURE__*/React.createElement(EmptyRow, {
    text: "No upcoming shows match the filter."
  }) : /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, upcomingFiltered.slice(upcomingFiltered[0] ? 1 : 0).map((e, i) => /*#__PURE__*/React.createElement(EventLinkRow, {
    key: e.id,
    event: e,
    index: i + 2
  })), upcomingFiltered.length === 1 && /*#__PURE__*/React.createElement("li", {
    style: {
      padding: '32px 0',
      borderBottom: `1px solid ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 12,
      letterSpacing: 2,
      opacity: 0.55
    }
  }, "\u2014 END OF UPCOMING"))), /*#__PURE__*/React.createElement("section", {
    id: "past",
    "data-screen-label": "Past",
    className: "vbx-section vbx-section-pad",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '100px 32px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "02",
    label: "Past",
    sub: "the record, in order",
    count: `${pastFiltered.length} nights`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${VBX.line}`,
      marginTop: 4,
      marginBottom: 32,
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 1.4
    }
  }, /*#__PURE__*/React.createElement(FilterRow, {
    label: "Year",
    items: allYears,
    value: yearFilter,
    onChange: setYearFilter
  }), /*#__PURE__*/React.createElement(FilterRow, {
    label: "Venue",
    items: allVenues,
    value: venueFilter,
    onChange: setVenueFilter
  })), pastFiltered.length === 0 ? /*#__PURE__*/React.createElement(EmptyRow, {
    text: "Nothing in the archive matches."
  }) : /*#__PURE__*/React.createElement(PastTable, {
    items: pastFiltered
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    tweaks: tweaks,
    set: set,
    active: active
  }), tweaks.showGrid && /*#__PURE__*/React.createElement(GridOverlay, null));
}
function FilterRow({
  label,
  items,
  value,
  onChange,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vbx-filter-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 16,
      padding: '14px 0',
      borderBottom: `1px solid ${VBX.line}`,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.5,
      textTransform: 'uppercase'
    }
  }, label, note && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      opacity: 0.6
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, items.map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => onChange(v),
    style: {
      padding: '6px 10px',
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      cursor: 'pointer',
      background: value === v ? VBX.bone : 'transparent',
      color: value === v ? VBX.ink : VBX.bone,
      border: `1px solid ${value === v ? VBX.bone : VBX.line}`
    }
  }, v))));
}
function FeaturedNext({
  e
}) {
  const soldOut = e.status === 'SOLD OUT';
  return /*#__PURE__*/React.createElement("section", {
    className: "vbx-section",
    style: {
      background: VBX.ink,
      color: VBX.bone,
      padding: '40px 32px 80px',
      borderTop: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-meta-rail",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: `1px solid ${VBX.line}`,
      paddingBottom: 14,
      marginBottom: 28
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
  }), "Next show"), /*#__PURE__*/React.createElement(MonoLabel, {
    opacity: 0.55
  }, e.status)), /*#__PURE__*/React.createElement("div", {
    className: "vbx-grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-event-artwork",
    style: {
      aspectRatio: '4 / 5',
      maxHeight: 720
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: e.image && e.image.src,
    label: e.image.label,
    fit: "contain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.7
  }, e.day, " \xB7 ", e.dateLabel, " \xB7 ", e.city), /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-l",
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(72px, 10vw, 160px)',
      letterSpacing: '-0.045em',
      lineHeight: 0.85,
      marginTop: 8
    }
  }, e.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.3,
      marginTop: 20,
      maxWidth: 620,
      textWrap: 'pretty'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 13,
      letterSpacing: 1.4,
      lineHeight: 1.9,
      marginTop: 24,
      opacity: 0.85
    }
  }, [...e.headliners].sort((a, b) => b.localeCompare(a)).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, h)), e.support.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.55,
      marginTop: 6
    }
  }, "+ ", e.support.join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(TicketButton, {
    status: e.status,
    url: e.ticketUrl,
    provider: e.provider,
    buyUrl: e.buyUrl
  })))));
}
function EventLinkRow({
  event: e,
  index
}) {
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const soldOut = e.status === 'SOLD OUT';
  return /*#__PURE__*/React.createElement("li", {
    style: {
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": open,
    className: "vbx-event-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 180px 140px 1fr auto',
      gap: 24,
      alignItems: 'center',
      width: '100%',
      padding: '28px 0',
      background: hover || open ? 'rgba(232,227,216,0.03)' : 'transparent',
      border: 'none',
      borderTop: open ? `1px solid ${VBX.line}` : '1px solid transparent',
      color: VBX.bone,
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'background 120ms'
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
      opacity: hover || open ? 1 : 0.88
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
      opacity: 0.5,
      width: 14,
      textAlign: 'center',
      transform: open ? 'rotate(90deg)' : hover ? 'translateX(4px)' : 'none',
      transition: 'transform 160ms'
    }
  }, "\u2192"))), open && /*#__PURE__*/React.createElement(EventRowExpansion, {
    e: e
  }));
}

// Expanded detail shown inline when an EventLinkRow is clicked open.
// Mirrors the layout of FeaturedNext: flyer left, details + tickets right.
function EventRowExpansion({
  e
}) {
  const soldOut = e.status === 'SOLD OUT';
  return /*#__PURE__*/React.createElement("div", {
    className: "vbx-past-expansion vbx-grid-2",
    style: {
      padding: '8px 0 48px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 40,
      alignItems: 'start',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vbx-event-artwork",
    style: {
      aspectRatio: '4 / 5',
      maxHeight: 720
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: e.image && e.image.src,
    label: e.image.label,
    fit: "contain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    size: 11,
    opacity: 0.7
  }, e.day, " \xB7 ", e.dateLabel, " \xB7 ", e.city), /*#__PURE__*/React.createElement("div", {
    className: "vbx-display-l",
    style: {
      fontFamily: VBX.sans,
      fontWeight: 900,
      fontSize: 'clamp(72px, 10vw, 160px)',
      letterSpacing: '-0.045em',
      lineHeight: 0.85,
      marginTop: 8
    }
  }, e.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.3,
      marginTop: 20,
      maxWidth: 620,
      textWrap: 'pretty'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.mono,
      fontSize: 13,
      letterSpacing: 1.4,
      lineHeight: 1.9,
      marginTop: 22,
      opacity: 0.85
    }
  }, [...e.headliners].sort((a, b) => b.localeCompare(a)).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, h)), e.support && e.support.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.55,
      marginTop: 6
    }
  }, "+ ", e.support.join(' · '))), e.blurb && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VBX.sans,
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 20,
      opacity: 0.75,
      maxWidth: 620,
      textWrap: 'pretty'
    }
  }, e.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(TicketButton, {
    status: e.status,
    url: e.ticketUrl,
    provider: e.provider,
    buyUrl: e.buyUrl
  }))));
}
function PastTable({
  items
}) {
  const [openIdx, setOpenIdx] = React.useState(null);
  const [visible, setVisible] = React.useState(40);
  React.useEffect(() => {
    setVisible(40);
    setOpenIdx(null);
  }, [items]);
  const shown = items.slice(0, visible);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vbx-past-row-header",
    style: {
      display: 'grid',
      gridTemplateColumns: '60px 140px 160px 120px 1fr 20px',
      gap: 20,
      padding: '12px 0',
      borderBottom: `1px solid ${VBX.line}`,
      fontFamily: VBX.mono,
      fontSize: 10,
      letterSpacing: 2,
      textTransform: 'uppercase',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "N\xBA"), /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Venue"), /*#__PURE__*/React.createElement("span", null, "City"), /*#__PURE__*/React.createElement("span", null, "Lineup"), /*#__PURE__*/React.createElement("span", null)), shown.map((a, i) => {
    const open = openIdx === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: `1px solid ${VBX.line}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpenIdx(open ? null : i),
      "aria-expanded": open,
      className: "vbx-past-row",
      style: {
        display: 'grid',
        gridTemplateColumns: '60px 140px 160px 120px 1fr 20px',
        gap: 20,
        alignItems: 'baseline',
        width: '100%',
        padding: '22px 0',
        background: open ? 'rgba(232,227,216,0.04)' : 'transparent',
        border: 'none',
        color: VBX.bone,
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(MonoLabel, {
      size: 10,
      opacity: 0.4
    }, String(items.length - i).padStart(3, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.sans,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: -0.2
      }
    }, a.dateLabel), /*#__PURE__*/React.createElement(MonoLabel, {
      size: 9,
      opacity: 0.5,
      style: {
        marginTop: 4
      }
    }, a.day)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.sans,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: -0.2
      }
    }, a.venue), /*#__PURE__*/React.createElement(MonoLabel, {
      size: 10,
      opacity: 0.7
    }, a.city), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.sans,
        fontWeight: 500,
        fontSize: 17,
        letterSpacing: -0.1,
        lineHeight: 1.3
      }
    }, a.pick && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: VBX.mono,
        fontSize: 9,
        letterSpacing: 1.5,
        padding: '2px 6px',
        marginRight: 10,
        background: VBX.red,
        color: VBX.bone,
        verticalAlign: 'middle'
      }
    }, "RA PICK"), a.soldOut && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: VBX.mono,
        fontSize: 9,
        letterSpacing: 1.5,
        padding: '2px 6px',
        marginRight: 10,
        background: VBX.red,
        color: VBX.bone,
        verticalAlign: 'middle'
      }
    }, "SOLD OUT"), a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.serif,
        fontWeight: 300,
        fontSize: 14,
        opacity: 0.55,
        marginTop: 4,
        lineHeight: 1.3,
        display: '-webkit-box',
        WebkitLineClamp: open ? 99 : 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }
    }, a.lineup.length ? a.lineup.slice(0, 6).join(' · ') + (a.lineup.length > 6 ? ` · +${a.lineup.length - 6}` : '') : '—')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: VBX.mono,
        fontSize: 14,
        opacity: 0.5,
        textAlign: 'center',
        transform: open ? 'rotate(90deg)' : 'none',
        transition: 'transform 160ms'
      }
    }, "\u2192")), open && /*#__PURE__*/React.createElement("div", {
      className: "vbx-past-expansion vbx-grid-2",
      style: {
        padding: '4px 0 36px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonoLabel, {
      size: 10,
      opacity: 0.55
    }, a.day, " \xB7 ", a.dateLabel, " \xB7 ", a.city), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.sans,
        fontWeight: 900,
        fontSize: 56,
        letterSpacing: -1.6,
        lineHeight: 0.95,
        marginTop: 10
      }
    }, a.venue), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.serif,
        fontWeight: 300,
        fontSize: 22,
        lineHeight: 1.3,
        marginTop: 12,
        textWrap: 'pretty'
      }
    }, a.title), a.blurb && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.sans,
        fontSize: 14,
        lineHeight: 1.5,
        marginTop: 14,
        opacity: 0.7,
        maxWidth: 520,
        textWrap: 'pretty'
      }
    }, a.blurb)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonoLabel, {
      size: 10,
      opacity: 0.55
    }, "Line-up (", a.lineup.length, ")"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: VBX.mono,
        fontSize: 12,
        letterSpacing: 1.2,
        lineHeight: 1.9,
        marginTop: 12,
        opacity: 0.85,
        columnCount: a.lineup.length > 8 ? 2 : 1,
        columnGap: 32
      }
    }, a.lineup.length ? [...a.lineup].sort((x, y) => y.localeCompare(x)).map((h, j) => /*#__PURE__*/React.createElement("div", {
      key: j
    }, h)) : /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: 0.5
      }
    }, "Line-up not archived.")))));
  }), visible < items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0',
      textAlign: 'center',
      borderBottom: `1px solid ${VBX.line}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setVisible(v => v + 40),
    style: {
      padding: '14px 28px',
      fontFamily: VBX.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
      cursor: 'pointer',
      background: 'transparent',
      color: VBX.bone,
      border: `1px solid ${VBX.line}`
    }
  }, "Load more \u2014 ", items.length - visible, " remaining")));
}
function EmptyRow({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      borderBottom: `1px solid ${VBX.line}`,
      fontFamily: VBX.serif,
      fontWeight: 300,
      fontSize: 22,
      opacity: 0.5
    }
  }, text);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(EventsApp, null));
