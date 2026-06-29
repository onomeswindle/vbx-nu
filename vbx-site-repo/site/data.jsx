// Event data — upcoming + archive.
// Dates in ISO so sorting works. Venue codes kept short for the metadata rail.

// Resolve image path. When bundled as standalone HTML, window.__resources holds
// blob URLs; otherwise we use the on-disk relative path.
function _img(id, path) {
  const R = (typeof window !== 'undefined' && window.__resources) || {};
  return R[id] || path;
}

const UPCOMING = [
  {
    id: 'evt-ploegendienst-breda',
    slug: 'vbx-x-ploegendienst-2026',
    date: '2026-07-04',
    dateLabel: '04.07.26',
    day: 'SAT',
    city: 'Breda',
    venue: 'GALDERSE MEREN',
    region: 'Local',
    title: 'VBX × Ploegendienst',
    headliners: ['Quest', 'Ogazón', 'Francesco Del Garda'],
    support: ['Bjolf b2b Boy Miguel', 'Alexia Glensy'],
    doors: '13:00',
    close: '23:00',
    status: 'ON SALE',
    ticketUrl: 'https://nl.ra.co/events/2410179',
    buyUrl: 'https://tickets.ploegendienst.nl/253bab7955d44716ac24135569efe53c/tickets',
    provider: 'Ploegendienst',
    blurb: 'Outdoor afternoon-to-evening at Galderse Meren. VBX teams with Ploegendienst.',
    image: { src: _img('flyerPloegendienst', 'site/assets/flyers/ploegendienst.png'), label: 'VBX × Ploegendienst — Galderse Meren, Breda' },
  },
  {
    id: 'evt-tillatec-summer',
    slug: 'vbx-tillatec-summer-2026',
    date: '2026-07-04',
    dateLabel: '04.07.26',
    day: 'SAT',
    city: 'Amsterdam',
    venue: 'TILLATEC',
    region: 'Local',
    title: 'VBX Summer Weekend — Tillatec',
    headliners: ['ZTO', 'Rey Colino', 'Paquita Gordon', 'Muallem', 'Michelle (live)', 'Ion Ludwig', 'Ekkel', 'Alexia Glensy'],
    support: [],
    doors: '23:00',
    close: '08:00',
    status: 'ON SALE',
    ticketUrl: 'https://nl.ra.co/events/2409740',
    buyUrl: 'https://shop.weeztix.com/e6c6d93a-d68a-11f0-a9cb-7e126431635e/tickets?shop_code=ryfxa463',
    provider: 'Weeztix',
    blurb: 'Summer weekend residency at Tillatec.',
    image: { src: 'site/assets/flyers/tillatec-summer-2026.jpg', label: 'VBX Summer Weekend — Tillatec, Amsterdam' },
    ticketUrlDay: 'https://nl.ra.co/events/2392826',
  },
  {
    id: 'evt-defik-summer-after',
    slug: 'vbx-summer-weekend-after-de-fik-2026',
    date: '2026-07-05',
    dateLabel: '05.07.26',
    day: 'SUN',
    city: 'Amsterdam',
    venue: 'DE FIK GARDEN',
    region: 'Local',
    title: 'VBX Summer Weekend — After at De Fik',
    headliners: ['Line-up TBA'],
    support: [],
    doors: '14:00',
    close: '23:00',
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2452232',
    buyUrl: 'https://shop.weeztix.com/bfadf46a-6007-11f1-8e27-d65b0659bc31/tickets?shop_code=fakqb9ww',
    provider: 'Weeztix',
    blurb: 'The Sunday after. A garden session at De Fik to close the summer weekend. Full line-up announced shortly.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vMGI5ZjkzMTM2NmM1NzA5MmZlMTgyOGE3ZmQzZmI1NjQ5YWUwMGY1MS5wbmc=', label: 'VBX Summer Weekend — De Fik Garden, Amsterdam' },
  },
  {
    id: 'evt-vbx-pride-2026',
    slug: 'vbx-pride-2026',
    date: '2026-08-01',
    dateLabel: '01.08.26',
    day: 'SAT',
    city: 'Amsterdam',
    venue: 'BRET',
    region: 'Local',
    title: 'VBX Pride',
    headliners: ['Line-up TBA'],
    support: [],
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2452373',
    buyUrl: 'https://weeztix.shop/7mag5qtq',
    provider: 'Weeztix',
    blurb: 'VBX celebrates Pride at BRET. Full line-up announced shortly.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vZDM1ZDUyNjIzMjE4OTVhM2Y0OTdiNjBjMWIwNDk0Yjk1NDY4OGFkZS5wbmc=', label: 'VBX Pride — BRET, Amsterdam' },
  },
  {
    id: 'evt-shanti-celeste-ade',
    slug: 'shanti-celeste-curates-vbx-ade-2026',
    date: '2026-10-22',
    dateLabel: '22.10.26',
    day: 'THU',
    city: 'Amsterdam',
    venue: 'SKATECAFE',
    region: 'Local',
    title: 'Shanti Celeste Curates VBX',
    headliners: ['Shanti Celeste'],
    support: [],
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2469789',
    buyUrl: 'https://shop.weeztix.com/005403cf-7d7c-4ea8-90b1-bd182ed199b7/tickets?shop_code=544fc8az',
    provider: 'Weeztix',
    blurb: 'ADE opening night. Shanti Celeste curates VBX at Skatecafe.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vMGNhMGYyZjUzMzExZDM0ZjE3NjY5YTRlNWU1NTc4ODQ5Y2MwNmJjYS5wbmc=', label: 'Shanti Celeste Curates VBX — Skatecafe, Amsterdam' },
  },
  {
    id: 'evt-vbx-lofi-ade',
    slug: 'vbx-lofi-ade-2026',
    date: '2026-10-23',
    dateLabel: '23.10.26',
    day: 'FRI',
    city: 'Amsterdam',
    venue: 'LOFI',
    region: 'Local',
    title: 'VBX — Lofi',
    headliners: ['Marco Shuttle', 'Francesco Del Garda', 'Frank Haag (live)', 'Dresden', 'Christian AB', 'Paquita Gordon', 'E.Lina'],
    support: [],
    doors: '22:00',
    close: '08:00',
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2470638',
    buyUrl: 'https://ra.co/events/2470638',
    provider: 'RA',
    blurb: 'ADE Friday at Lofi. An all-night VBX session running through to morning.',
    image: { src: 'site/assets/flyers/lofi-ade-2026.webp', label: 'VBX — Lofi, Amsterdam' },
  },
  {
    id: 'evt-vbx-bret-2410',
    slug: 'vbx-bret-2410-2026',
    date: '2026-10-24',
    dateLabel: '24.10.26',
    day: 'SAT',
    city: 'Amsterdam',
    venue: 'BRET',
    region: 'Local',
    title: 'VBX — BRET',
    headliners: ['Line-up TBA'],
    support: [],
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2469603',
    buyUrl: 'https://shop.weeztix.com/3a80d530-3b80-415e-bfb4-8a78670181c6/tickets?shop_code=qczarsds',
    provider: 'Weeztix',
    blurb: 'ADE Saturday at BRET. Line-up announced shortly.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vZTZkMWIyMGM2OTY1ZmU5MGY3MmQxOTlhMTdiNWNmNTBkZDdjMGZhNi5wbmc=', label: 'VBX — BRET, Amsterdam' },
  },
  {
    id: 'evt-jane-fitz-ade',
    slug: 'jane-fitz-curates-vbx-ade-2026',
    date: '2026-10-25',
    dateLabel: '25.10.26',
    day: 'SUN',
    city: 'Amsterdam',
    venue: 'SECRET WAREHOUSE',
    region: 'Local',
    title: 'Jane Fitz Curates VBX',
    headliners: ['Jane Fitz'],
    support: [],
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2469614',
    buyUrl: 'https://weeztix.shop/qxemw5uq',
    provider: 'Weeztix',
    blurb: 'ADE Sunday. Jane Fitz curates VBX at a secret warehouse.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vMTI3OWE5NDc1Y2ZlNDVjNzlkNzJhZTRlYzk3MjUyNjE4MDIxYWUwZi5wbmc=', label: 'Jane Fitz Curates VBX — Amsterdam' },
  },
  {
    id: 'evt-apollonia-ade',
    slug: 'apollonia-curates-vbx-ade-2026',
    date: '2026-10-25',
    dateLabel: '25.10.26',
    day: 'SUN',
    city: 'Amsterdam',
    venue: 'SHELTER',
    region: 'Local',
    title: 'Apollonia Curates VBX',
    headliners: ['Apollonia'],
    support: [],
    status: 'ON SALE',
    ticketUrl: 'https://ra.co/events/2469608',
    buyUrl: 'https://site.fourvenues.com/en/shelter-amsterdam/events/vbx-25-10-2026-8JKA',
    provider: 'Fourvenues',
    blurb: 'ADE closing. Apollonia curates VBX at Shelter.',
    image: { src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vOTljZjEwZWJlOGNlYmJkYWI1YTQxNTRlNWI3ZWU1ZWEzODQ2MzNhNy5wbmc=', label: 'Apollonia Curates VBX — Shelter, Amsterdam' },
  },
];

const ARCHIVE = [
  // JUNE 2026
  { date: '2026-06-20', dateLabel: '20.06.26', day: 'SAT', venue: 'THE UPLOAD CLUB', city: 'Barcelona', title: 'VBX x Solid AM', soldOut: true,
    blurb: 'Poble Espanyol, closing Off Week. VBX x Solid AM — long-form all night.',
    lineup: ['Frank Haag', 'Eli Verveine b2b', 'Alexander Skancke', 'dj sweet6teen', 'Boy Miguel'],
    image: { src: 'site/assets/flyers/solid-am.png', label: 'VBX x Solid AM — The Upload Club, Barcelona' } },
  { date: '2026-06-18', dateLabel: '18.06.26', day: 'THU', venue: 'ZT HOTEL · WOLF CLUB', city: 'Barcelona', title: 'Polifonic x VBX x Outcast — Off Week', pick: true,
    blurb: 'Day at ZT Hotel, night at Wolf Club. Powered by Loud-Contact for Off Week Barcelona.',
    lineup: ['Jane Fitz', 'John Talabot', 'Nicolas Lutz', 'Unai Trotti', 'Brasi', 'Alexia Glensy b2b Alex Dima', 'Michelle (live)', 'Lumiere'],
    image: { src: 'site/assets/flyers/polifonic.jpeg', label: 'Polifonic x VBX x Outcast — Barcelona' } },
  { date: '2026-06-04', dateLabel: '04.06.26', day: 'THU', venue: 'UNUM', city: 'Shengjin', title: "Unum Festival '26", soldOut: true,
    blurb: 'VBX returns to the Albanian coast. 16 hours, z-a billing, sunrise guaranteed.',
    lineup: ['Voigtmann b2b Alci', 'Reiss', 'Dyed Soundorom', 'Doudou MD', 'Altin Boshnjaku', 'Alexia Glensy'],
    image: { src: 'site/assets/flyers/unum.jpeg', label: "Unum Festival '26 — Shengjin" } },

  // MAY 2026
  { date: '2026-05-30', dateLabel: '30.05.26', day: 'SAT', venue: 'PARADIGM', city: 'Groningen', title: 'Planet Paradigm 2026', soldOut: true, pick: true,
    blurb: 'Paradigm x VBX in the woods outside Groningen — one day, all stages.',
    lineup: ['Rhadoo', 'Kim Ann Foxman', 'GiGi FM b2b Altinbas', 'Mareena', 'Pancratio b2b Simone de Kunovich', 'A For Alpha', 'Aldonna b2b Matisa', 'Alexia Glensy b2b Alex Dima', 'Christian Thomas b2b aotp', 'Eli Verveine', 'Emmz', 'Gabriel Belabbas', 'Hamish & Toby', 'ISAbella', 'Reflex Blue (live)', 'Reiss', 'Richard Akingbehin b2b Matthew Neequaye', 'Rosati (live)', 'S-Candalo', 'Talismann'],
    image: { src: 'site/assets/flyers/planet-paradigm.jpeg', label: 'Planet Paradigm 2026 — Groningen' } },
  { date: '2026-05-17', dateLabel: '17.05.26', day: 'SUN', venue: 'SUNNY SIDE', city: 'Malta', title: 'Sunny Side Festival',
    blurb: 'VBX sunset-to-sunrise on the island. z-a billing, one room, long sets.',
    lineup: ['Raresh b2b Cap', 'MATO', 'Alexia Glensy'],
    image: { src: 'site/assets/flyers/sunny-side.jpg', label: 'Sunny Side Festival — Malta' } },

  // APRIL 2026
  { date: '2026-04-27', dateLabel: '27.04.26', day: 'MON', venue: 'BRET', city: 'Amsterdam', title: "King's Day at BRET", pick: true,
    blurb: "On this day, the city moves different. King's Day at BRET — day-to-night on the terrace.",
    lineup: ['Tommy Chikara', 'Reiss', 'Morgan', 'Luna Ludmila', 'Grant Dell', 'Giammarco Orsini', 'David Triana'],
    image: { src: 'site/assets/flyers/kingsday.png', label: "King's Day at BRET — Amsterdam" } },

  // FEBRUARY 2026
  { date: '2026-02-28', dateLabel: '28.02.26', day: 'SAT', venue: 'TILLATEC', city: 'Amsterdam', title: 'VBX14 Anniversary', soldOut: true, pick: true,
    blurb: 'From Amsterdam to the world, VBX celebrate 14 years with a day-to-night anniversary at TILLATEC, led by Vera and Dresden.',
    lineup: ['Vera', 'Reiss', 'Olsvangèr', 'Noach', 'Lo Ds', 'Garrett David', 'Gabrielle Kwarteng', 'Dresden', 'Cap', 'Byron Yeates', 'Bennet (DE)', 'Alexia Glensy'],
    image: { src: 'site/assets/flyers/vbx14.png', label: 'VBX14 Anniversary — Tillatec, Amsterdam' } },
  { date: '2026-02-07', dateLabel: '07.02.26', day: 'SAT', venue: 'LE 211', city: 'Paris', title: 'Automatic X VBX Afterparty', soldOut: true,
    lineup: ['DJ Senc', 'Automatic Writing'],
    image: { src: 'site/assets/flyers/automatic-le211.png', label: 'Automatic × VBX Afterparty — Le 211, Paris' } },
  { date: '2026-02-06', dateLabel: '06.02.26', day: 'FRI', venue: 'CABARET SAUVAGE', city: 'Paris', title: 'Automatic x VBX', soldOut: true,
    lineup: ['Francesco Del Garda', 'Doudou MD', 'LAMALICE'],
    image: { src: 'site/assets/flyers/automatic-cabaret-sauvage.png', label: 'Automatic × VBX — Cabaret Sauvage, Paris' } },

  // JANUARY 2026
  { date: '2026-01-26', dateLabel: '26.01.26', day: 'MON', venue: 'WHY NOT CLUB', city: 'Zanzibar, TZ', title: 'VBX x Sunny Side Festival x Why?Not',
    lineup: ['UJ/DV', 'Reiss', 'Morgan', 'Hamish & Toby', 'JNJS', 'Bella Sarris'],
    image: { src: 'site/assets/flyers/zanzibar.png', label: 'VBX x Sunny Side x Why?Not — Zanzibar' } },
  { date: '2026-01-10', dateLabel: '10.01.26', day: 'SAT', venue: 'LOST BEACH CLUB', city: 'Ecuador', title: 'VBX — Trotamundo',
    lineup: ['Melchior Productions Ltd', 'Hannecart', 'Daniel Bell', 'Dana Ruh', 'Dandy Jack', 'Caruan', 'Cabanne'],
    image: { src: 'site/assets/flyers/trotamundo.png', label: 'VBX — Trotamundo, Ecuador' } },

  // DECEMBER 2025
  { date: '2025-12-06', dateLabel: '06.12.25', day: 'SAT', venue: 'TILLATEC', city: 'Amsterdam', title: 'VBX 24hrs | TILLATEC 06.12', soldOut: true, pick: true,
    blurb: "So nice, it's time to do it twice—after a raucous ADE Monday, VBX returns to Tillatec with another stacked bill featuring veteran Detroit DJ, Blake Baxter.",
    lineup: ['Blake Baxter', 'Bobby.', 'Children of Valis', 'Craig Richards', 'Christian AB', 'Interstellar Funk', 'ISAbella', 'Matthew Neequaye', 'dj sweet6teen', 'Morgan', 'Nesta', 'Saoirse', 'Victor (DE)', 'Iggy P'] },

  // NOVEMBER 2025
  { date: '2025-11-14', dateLabel: '14.11.25', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'V.S presents Dimensions',
    lineup: ['Onur Özer', 'XDB', 'Hamish & Toby', 'Alexia Glensy', 'Morgan', 'Heels & Souls'] },

  // OCTOBER 2025 — ADE week
  { date: '2025-10-27', dateLabel: '27.10.25', day: 'MON', venue: 'TILLATEC', city: 'Amsterdam', title: 'VBX, fabric & Loud-Contact present: PLAYGROUND', soldOut: true,
    lineup: ['Sedef Adasï', 'Nicolas Lutz', 'Quest (IT)', 'Naone', 'Zeynep', 'Harry McCanna', 'Reiss', 'Francesco Del Garda', 'Jane Fitz', 'Craig Richards', 'Binh', 'BASHKKA', 'PARAMIDA', 'tINI', 'Alex Dima', 'Bakked', 'Cristian Sarde', 'Lorenzo Aribone'] },
  { date: '2025-10-26', dateLabel: '26.10.25', day: 'SUN', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX | ADE', soldOut: true,
    lineup: ['Sonja Moonear', 'Rhadoo', 'E.LINA', 'Cap', 'Tommy Chikara', 'Poggio', 'Aline Umber'] },
  { date: '2025-10-26', dateLabel: '26.10.25', day: 'SUN', venue: 'TBA', city: 'Amsterdam', title: 'Jane Fitz curates VBX', pick: true,
    blurb: 'Beloved DJ Jane Fitz curates this VBX party, inviting some talented friends to share the decks.',
    lineup: ['Taylor Shockley', 'Spekki Webu', 'Jane Fitz', 'Hicham (FR)', 'Alexia Glensy'] },
  { date: '2025-10-25', dateLabel: '25.10.25', day: 'SAT', venue: 'TBA', city: 'Amsterdam', title: 'VBX x SlapFunk x ReSolute pres: Can You Jigit?', soldOut: true,
    lineup: ['Tomas Station', 'Salar Ansari', 'O.BEE', 'Morgan', 'Mayell', 'Kyle Toole', 'Gizem', 'Dandy Jack', 'Adi (CO)'] },
  { date: '2025-10-25', dateLabel: '25.10.25', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX x Loud-Contact | ADE', soldOut: true,
    lineup: ['Ricardo Villalobos', 'Quest (IT)', 'Jef K', 'Gabrielle Kwarteng', 'Gabbs', 'Francesco Del Garda', 'Alexia Glensy'] },
  { date: '2025-10-24', dateLabel: '24.10.25', day: 'FRI', venue: 'LOFI', city: 'Amsterdam', title: 'Ben UFO curates VBX [sold out]', soldOut: true,
    lineup: ['Amaliah', 'Ben UFO', 'Christian AB', 'Impérieux', 'Jorg Kuning', 'mad miran', 'Moopie', 'Naone', 'Pangaea', 'Ploy'] },
  { date: '2025-10-24', dateLabel: '24.10.25', day: 'FRI', venue: 'LOFI', city: 'Amsterdam', title: 'Ben UFO curates VBX | ADE', soldOut: true,
    lineup: ['Ploy', 'Pangaea', 'Amaliah', 'Naone', 'mad miran', 'Moopie', 'Jorg Kuning', 'Impérieux', 'Christian AB', 'Ben UFO'] },
  { date: '2025-10-23', dateLabel: '23.10.25', day: 'THU', venue: "SISSI'S", city: 'Amsterdam', title: 'SlapFunk x VBX — ADE', soldOut: true,
    lineup: ['Automatic Writing', 'Bruno Schmidt', 'DJ Senc', 'Cap', 'dj sweet6teen', 'Hannecart', 'Mayell', 'Noach', 'Samuel Deep', 'The Ghost', 'Morgan'] },

  // SEPTEMBER 2025
  { date: '2025-09-20', dateLabel: '20.09.25', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summer Closing — BRET', pick: true,
    blurb: 'Squeeze the last few drops out of summer with this killer closing party featuring DJ Pipe, Matthew Neequaye, Manfredas and more.',
    lineup: ['Reiss', 'Noach', 'Voss', 'Naone', 'Matthew Neequaye', 'Manfredas', 'Frank Haag', 'DumitrEscu', 'DJ Pipe'] },
  { date: '2025-09-13', dateLabel: '13.09.25', day: 'SAT', venue: 'ELSE', city: 'Berlin', title: 'Else x VBX',
    lineup: ['dj sweet6teen', 'Dyed Soundorom', 'Etapp Kyle', 'Gabbs', 'Josefina Tapia (2)', 'Mayell', 'Thabo', 'Velasco'] },
  { date: '2025-09-06', dateLabel: '06.09.25', day: 'SAT', venue: 'SALTY CLUB', city: 'Lisbon', title: 'Sexto x VBX', pick: true,
    blurb: "Sexto and Amsterdam's VBX throw the final beach party of the season at Salty Club Caparica, with Bruno Schmidt, Gabbs and Lournco LVGS spinning on the VOID rig.",
    lineup: ['Bruno Schmidt', 'Gabbs', 'Lournco LVGS'] },

  // AUGUST 2025
  { date: '2025-08-02', dateLabel: '02.08.25', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX 24hrs',
    lineup: ['Tommy Chikara', 'Reiss', 'Nathan Homan', 'Poggio', 'Mayell', 'Children of Valis'] },
  { date: '2025-08-01', dateLabel: '01.08.25', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX x PARTISAN PRIDE',
    lineup: ['Alexia Glensy', 'Astral Travel', 'Anthea', 'Oshana', 'Fafi Abdel Nour', 'Bella Sarris', 'Octo Octa', 'Hannecart', 'Robin RB'] },

  // JUNE 2025
  { date: '2025-06-21', dateLabel: '21.06.25', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX 24HR+ Lofi 21 & 22.06', pick: true,
    blurb: "From sunset to sunrise and back again, VBX's latest marathon at Lofi has something for everyone, from the ecstatic house of Eris Drew and Octo Octa or DJ Rino's deep, weird and wonky record bag.",
    lineup: ['Shanti Celeste', 'Reiss', 'Octo Octa', 'Eris Drew', 'Ogazón', 'Noach', 'Matthew Neequaye', 'Iggy P', 'Lo Ds', 'Gabbs', 'Ferro', 'Enrica Falqui', 'DJ Rino', 'D. Tiffany', 'Velasco', 'DJ Tjizza', 'Christian AB', 'Children of Valis'] },
  { date: '2025-06-12', dateLabel: '12.06.25', day: 'THU', venue: 'LES ENFANTS BRILLANTS', city: 'Barcelona', title: 'VBX OFF BCN 2025 at Les Enfants',
    lineup: ['Velasco', 'Gabbs', 'Cap', 'Alexia Glensy'] },

  // MAY 2025
  { date: '2025-05-31', dateLabel: '31.05.25', day: 'SAT', venue: 'PARADIGM', city: 'Netherlands', title: 'Planet Paradigm 2025: A One Day Festival Trip', soldOut: true,
    lineup: ['Admo', 'Border One', 'Call Super', 'Francesco Del Garda', 'Ciel', 'Delano Legito', 'DJ Red', 'DJ Tjizza', 'Dr Banana', 'Manfredas', 'Ivan Smagghe', 'Dyed Soundorom', 'Hannecart', 'Noach', 'Helly', 'Inox Traxx', 'Jane Fitz', 'Jelte', 'Junki Inoue', 'Naone', 'Olsvangèr', 'Peach', 'SHAQUE', 'Stella Zekri', 'Temudo'] },

  // APRIL 2025
  { date: '2025-04-27', dateLabel: '27.04.25', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: "VBX King's Day — The Day After", pick: true,
    blurb: "The morning after King's Day is always a fantastic time in Amsterdam. Expect the finest house and techno from Ryan Elliott and co. at BRET.",
    lineup: ['Tommy Chikara', 'Rowan', 'Ryan Elliott', 'Reiss', 'Naone', 'Melody RA+RE', 'Lo Ds', 'Hannecart'] },
  { date: '2025-04-26', dateLabel: '26.04.25', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: "VBX King's Day — 26.04",
    lineup: ['Ryan Elliott', 'Melody RA+RE', 'Essets', 'DJ Dustin', 'Children of Valis', 'Voss', 'Noach', 'Combined Type'] },

  // MARCH 2025
  { date: '2025-03-02', dateLabel: '02.03.25', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX12 Weekender Part 2',
    lineup: ['Rey Colino', 'Reiss', 'Noach', 'Kyle Toole', 'Gabbs', 'DJ Senc', 'Children of Valis', 'Bruno Schmidt'] },
  { date: '2025-03-01', dateLabel: '01.03.25', day: 'SAT', venue: 'MULTIPLA', city: 'Amsterdam', title: 'VBX12 Weekender Part 1 — Multipla', pick: true,
    blurb: 'Celebrating its 12-year anniversary in fitting fashion, VBX returns to Multipla for a true family affair.',
    lineup: ['koen.fm (2)', 'Ron Obvious', 'Romance Brothers', 'Ivan Smagghe', 'Gabbs', 'Alexia Glensy'] },

  // JANUARY 2025
  { date: '2025-01-01', dateLabel: '01.01.25', day: 'WED', venue: 'BRET', city: 'Amsterdam', title: 'VBX NYD BRET',
    lineup: ['Velasco', 'Noach', 'Jane Fitz', 'Hannecart', 'Gabbs'] },

  // NOVEMBER 2024
  { date: '2024-11-30', dateLabel: '30.11.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX x SlapFunk present: fabric 25 Continuum',
    lineup: ['CARISTA', 'Carlos Valdes', 'Children of Valis', 'Christian AB', 'Craig Richards', 'Doudou MD', 'Gabrielle Kwarteng', 'Hannecart', 'Harry McCanna', 'Moxie', 'Naone', 'Peach', 'Reiss', 'Samuel Deep', 'The Ghost'] },
  { date: '2024-11-02', dateLabel: '02.11.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'V.S Halloween',
    lineup: ['Berkan V8', 'DJ KILLING', 'Essets', 'FREAKENSTEIN', 'Moody Mehran', 'Fais Le Beau', 'Morgan', 'Moxes'] },

  // OCTOBER 2024 — ADE
  { date: '2024-10-20', dateLabel: '20.10.24', day: 'SUN', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX ADE — SHELTER', soldOut: true,
    lineup: ['Quest (IT)', 'Paquita Gordon', 'Noach', 'Morgan', 'Gwenan', 'Francesco Del Garda', 'Desyn', 'Christian AB', 'Children of Valis', 'Alexia Glensy'] },
  { date: '2024-10-20', dateLabel: '20.10.24', day: 'SUN', venue: 'RASA86', city: 'Amsterdam', title: 'VBX x SlapFunk ADE — Rasa86', soldOut: true,
    lineup: ['Tho', 'Samuel Deep', 'Reiss', 'Hannecart', 'Gabbs', 'DJ Senc', 'Doudou MD', 'Velasco', 'DJ Tjizza', 'Cap'] },
  { date: '2024-10-19', dateLabel: '19.10.24', day: 'SAT', venue: 'ISO', city: 'Amsterdam', title: 'VBX ADE — ISOamsterdam', soldOut: true,
    lineup: ['Noach', 'Marco Shuttle', 'Mattias El Mansouri', 'Makcim', 'Jade Seatle'] },
  { date: '2024-10-19', dateLabel: '19.10.24', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX ADE — BRET', soldOut: true,
    lineup: ['Mayell', 'livwutang', 'Junki Inoue', 'Frank Haag', 'E.LINA', 'Cap'] },
  { date: '2024-10-18', dateLabel: '18.10.24', day: 'FRI', venue: 'LOFI', city: 'Amsterdam', title: 'VBX ADE — Lofi', soldOut: true,
    lineup: ['Shanti Celeste', 'Ryan Elliott', 'Reiss', 'PLO Man', 'Peach', 'Ogazón', 'Mia Cecille', 'Junki Inoue', 'Gabbs', 'Ivan Smagghe', 'Manfredas'] },
  { date: '2024-10-05', dateLabel: '05.10.24', day: 'SAT', venue: 'MESMERIC', city: 'Sofia', title: 'VBX Sofia at Mesmeric',
    lineup: ['Morgan', 'Mizzmo', 'Mayell', 'Cap'] },

  // SEPTEMBER 2024
  { date: '2024-09-07', dateLabel: '07.09.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX & Paradigm present: PLANET Lofi', soldOut: true,
    lineup: ['S.A.M.', 'Parris', 'Julian Anthony', 'Fafi Abdel Nour', 'E.LINA', 'Annyrock', 'Elias Mazian', 'DJ Fart in the Club', 'Bella Tazza', 'Bakio', 'Lo (NL)', 'Mia Cecille', 'Alex Kassian'] },

  // JULY 2024
  { date: '2024-07-20', dateLabel: '20.07.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX 24hrs | SUMMER #2',
    lineup: ['Stella Zekri', 'Sonja Moonear', 'Reiss', 'Rhadoo', 'pH Project', 'Moopie', 'Mia Cecille', 'Hannecart', 'Gene On Earth', 'Frank Haag', 'Cap', 'Automatic Writing', 'Alex Dima', 'Alexia Glensy', 'Across Boundaries'] },

  // JUNE 2024
  { date: '2024-06-16', dateLabel: '16.06.24', day: 'SUN', venue: 'LES ENFANTS BRILLANTS', city: 'Barcelona', title: 'SlapFunk x VBX Night time',
    lineup: ['Fumiya Tanaka', 'Samuel Deep', 'Junki Inoue'] },
  { date: '2024-06-16', dateLabel: '16.06.24', day: 'SUN', venue: 'BOSC TANCAT', city: 'Barcelona', title: 'SlapFunk x VBX — Closing OFF BCN 2024 Day Time',
    lineup: ['Ryan Elliott', 'The Ghost', 'Cap', 'Reiss', 'Laurine', 'Cecilio', 'Doudou MD', 'Alex (ES)', 'Sampol'] },
  { date: '2024-06-09', dateLabel: '09.06.24', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX | SUMMER 1 — BRET — ALL DAY', lineup: [] },
  { date: '2024-06-08', dateLabel: '08.06.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX | SUMMER 1 — Lofi — Day & Night',
    lineup: ['Reiss', 'Laidlaw', 'Paul Lution', 'Nicolas Lutz', 'Craig Richards', 'Noach', 'Midland', 'Mia Cecille', 'Laurine', 'Hannecart', 'Andrey Pushkarev', 'Eli Verveine'] },

  // MAY 2024
  { date: '2024-05-25', dateLabel: '25.05.24', day: 'SAT', venue: 'PARADIGM', city: 'Netherlands', title: 'Planet Paradigm 2024', soldOut: true,
    lineup: ['Velasco', 'tINI', 'The Lady Machine', 'Tammo Hesselink', 'Talismann', 'Snu', 'Setaoc Mass', 'Sandrien', 'Reiss', 'RDVSK', 'Morgan', 'Melina Serser', 'Marie Montexier', 'Laidlaw', 'Gene On Earth', 'Frank Haag', 'DJ Senc', 'DJ Koolt', 'DINA', 'Cobahn', 'Christian AB', 'Berkan V8', 'BASHKKA', 'Gabrielle Kwarteng'] },

  // APRIL 2024
  { date: '2024-04-27', dateLabel: '27.04.24', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: "VBX King's Day",
    lineup: ['Reiss', 'Youandewan', 'Noach', 'Morgan', 'Liquid Earth', 'Junki Inoue', 'Hannecart', 'Boris Werner'] },

  // MARCH 2024
  { date: '2024-03-23', dateLabel: '23.03.24', day: 'SAT', venue: 'BROOKLYN', city: 'New York City', title: 'SlapFunk x VBX x Golden Record NYC',
    lineup: ['Fumiya Tanaka', 'Cassy', 'Andrey Pushkarev', 'Dana Ruh', 'Doudou MD', 'Morgan', 'Samuel Deep', 'Velasco', "Richard O'Bryan", 'Kiyoshi'] },

  // FEBRUARY 2024
  { date: '2024-02-25', dateLabel: '25.02.24', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX 11', lineup: [] },
  { date: '2024-02-24', dateLabel: '24.02.24', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX 11',
    lineup: ['Alexia Glensy', 'Ben UFO', 'Christian AB', 'Francesco Del Garda', 'Gwenan', 'Hannecart', 'Reiss'] },

  // DECEMBER 2023
  { date: '2023-12-31', dateLabel: '31.12.23', day: 'SUN', venue: 'LEVENSLANG', city: 'Amsterdam', title: 'VBX NYE at Levenslang',
    lineup: ['Voigtmann', 'Joiah', 'Gabbs', 'Children of Valis', 'Bruno Schmidt'] },
  { date: '2023-12-09', dateLabel: '09.12.23', day: 'SAT', venue: 'NUMBER 90', city: 'London', title: 'VBX 10 YEARS TOUR — LONDON', pick: true,
    blurb: 'VBX celebrates its tenth anniversary alongside London stalwarts Half Baked, with tech house and minimal wizards Sam Bangura and Giammarco Orsini on soundtracking duties.',
    lineup: ['Sam Bangura', 'Giammarco Orsini', 'Ferro', 'Cap'] },

  // NOVEMBER 2023
  { date: '2023-11-25', dateLabel: '25.11.23', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX at SHELTER',
    lineup: ['PRS', 'Praslea', 'Raresh', 'Frank Haag'] },
  { date: '2023-11-11', dateLabel: '11.11.23', day: 'SAT', venue: 'RAZZETT L-AHMAR', city: 'Malta', title: 'VBX 10 YEARS TOUR — MALTA',
    lineup: ['MATO', 'Frank Haag', 'Christian AB'] },

  // OCTOBER 2023 — ADE
  { date: '2023-10-22', dateLabel: '22.10.23', day: 'SUN', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX ADE CLOSING — SHELTER', soldOut: true,
    lineup: ['PARAMIDA', 'Alex Kassian', 'O.BEE', 'Tomas Station', 'Mayell', 'Francesco Del Garda', 'Ferro', 'Christian AB'] },
  { date: '2023-10-22', dateLabel: '22.10.23', day: 'SUN', venue: 'IJLAND', city: 'Amsterdam', title: 'VBX x SlapFunk ADE — Ijland', soldOut: true,
    lineup: ['DJ Senc', 'E.LINA', 'Annyrock', 'Hamish & Toby', 'Laidlaw', 'Morgan', 'Samuel Deep', 'tINI', 'Voigtmann'] },
  { date: '2023-10-21', dateLabel: '21.10.23', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX ADE — BRET', soldOut: true,
    lineup: ['Quest (IT)', 'Julian Anthony', 'Gene On Earth', 'Gabbs', 'Frank Haag', 'E.LINA', 'Annyrock'] },
  { date: '2023-10-20', dateLabel: '20.10.23', day: 'FRI', venue: 'LEVENSLANG', city: 'Amsterdam', title: 'VBX x SUNRISE ADE — LEVENSLANG', soldOut: true,
    lineup: ['Rhadoo', 'Ion Ludwig', 'Doudou MD', 'Cap'] },
  { date: '2023-10-20', dateLabel: '20.10.23', day: 'FRI', venue: 'THE LOFT', city: 'Amsterdam', title: 'VBX ADE — LOFT', soldOut: true,
    lineup: ['Mandar', 'Laurine', 'Junki Inoue', 'Alexia Glensy', 'Alex Dima'] },
  { date: '2023-10-07', dateLabel: '07.10.23', day: 'SAT', venue: 'MINISTERIUM CLUB', city: 'Lisbon', title: 'VBX x Mīrarī x Ministerium Club',
    lineup: ['Quest (IT)', 'Laurine', 'Ferro', 'Junki Inoue', 'Tolga Fidan', 'Tíago', 'Helio', 'Manuel Cotta', 'Makcim'] },

  // SEPTEMBER 2023
  { date: '2023-09-30', dateLabel: '30.09.23', day: 'SAT', venue: 'GOYA SOCIAL CLUB', city: 'Madrid', title: 'Roots pres. VBX 10 Years Tour',
    lineup: ['Ferro', 'Frank Haag', 'Moulin'] },

  // JULY 2023
  { date: '2023-07-30', dateLabel: '30.07.23', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summer Weekender — BRET',
    lineup: ['CHKLTE'] },
  { date: '2023-07-29', dateLabel: '29.07.23', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX Summer Weekender — Lofi',
    lineup: ['Young Adults', 'Sugar Free', 'Sonja Moonear', 'Raresh', 'Pieter Jansen', 'Eversines', 'Mia Cecille', 'Gabbs', 'Ferro'] },
  { date: '2023-07-21', dateLabel: '21.07.23', day: 'FRI', venue: 'RSO', city: 'Berlin', title: '10 Years VBX x Planet Pleasure',
    lineup: ['DJ Masda', 'E.LINA', 'Annyrock', 'Evan Baggs', 'Ferro', 'Laurine', 'Reiss', 'Thabo', 'Thalo Santana'] },

  // JUNE 2023
  { date: '2023-06-18', dateLabel: '18.06.23', day: 'SUN', venue: 'HOLA CLUB SITGES', city: 'Barcelona', title: 'VBX x SlapFunk On The Beach | OFFBCN 23', pick: true,
    blurb: 'SlapFunk and VBX come together for an extra special beach party, featuring music from esteemed selectors Sonja Moonear, Margaret Dygas and Reiss.',
    lineup: ['Sonja Moonear', 'Margaret Dygas', 'Reiss', 'Samuel Deep', 'Alexia Glensy', 'Sampol', 'Alex (ES)'] },
  { date: '2023-06-11', dateLabel: '11.06.23', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX x Sunrise Afterhours',
    lineup: ['Combined Type', 'Dan Andrei', 'Gescu'] },
  { date: '2023-06-10', dateLabel: '10.06.23', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX x Sunrise',
    lineup: ['Cap', 'Julian Anthony', 'Margaret Dygas', 'pH Project', 'Priku', 'Reiss', 'Rhadoo'] },

  // MAY 2023
  { date: '2023-05-27', dateLabel: '27.05.23', day: 'SAT', venue: 'PARADIGM', city: 'Netherlands', title: 'Planet Paradigm 2023', soldOut: true,
    lineup: ['Alexia Glensy', 'Black Cadmium', 'Bruno Schmidt', 'Naone', 'Cap', 'Christian Thomas', 'Craig Richards', 'Desyn', 'Francesco Del Garda', 'FREAKENSTEIN', 'GiGi FM', 'Jeans (NL)', 'Julian Anthony', 'Laurine', 'Mathijs Smit', 'Nèna', 'Nene H', 'Ø [Phase]', 'Orchid', 'PARAMIDA', 'Quest', 'Reiss', 'Sansibar', 'Stephanie Sykes'] },
  { date: '2023-05-19', dateLabel: '19.05.23', day: 'FRI', venue: 'DOM', city: 'Sofia', title: 'VBX x Club DOM',
    lineup: ['Sugar Free', 'Praslea', 'Ferro', 'Deyan Dimitrov'] },

  // APRIL 2023
  { date: '2023-04-27', dateLabel: '27.04.23', day: 'THU', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX Kingsday 2023',
    lineup: ['tINI', 'Kim April', 'Giammarco Orsini', 'Ferro'] },

  // MARCH 2023
  { date: '2023-03-19', dateLabel: '19.03.23', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX 10 YRS',
    lineup: ['Makcim', 'Junki Inoue', 'Frank Haag', 'Doudou MD', 'Alexia Glensy'] },
  { date: '2023-03-18', dateLabel: '18.03.23', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX 10 YRS', pick: true,
    blurb: "VBX celebrates ten years with a multi-venue party. Don't miss a set from the enigmatic Zip.",
    lineup: ['Zip', 'Ion Ludwig', 'Francesco Del Garda', 'Christian AB'] },
  { date: '2023-03-18', dateLabel: '18.03.23', day: 'SAT', venue: 'THE LOFT', city: 'Amsterdam', title: 'VBX 10 YRS',
    lineup: ['Voigtmann', 'Praslea', 'Reiss', 'Malika'] },

  // JANUARY 2023
  { date: '2023-01-01', dateLabel: '01.01.23', day: 'SUN', venue: 'THE LOFT', city: 'Amsterdam', title: 'VBX X THE LOFT',
    lineup: ['Tensen', 'Reiss', 'Laurine', 'Cecilio', 'Hamish & Toby'] },

  // NOVEMBER 2022
  { date: '2022-11-26', dateLabel: '26.11.22', day: 'SAT', venue: 'DE SCHIETCLUB', city: 'Amsterdam', title: 'VBX x SCHIETCLUB', lineup: [] },
  { date: '2022-11-25', dateLabel: '25.11.22', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX X SHELTER',
    lineup: ['Reiss', 'Raresh', 'Praslea', 'Luna Ludmila'] },

  // OCTOBER 2022 — ADE
  { date: '2022-10-23', dateLabel: '23.10.22', day: 'SUN', venue: 'SHELTER', city: 'Amsterdam', title: 'ADE — VBX x Shelter', soldOut: true,
    lineup: ['Francesco Del Garda', 'Ferro', 'Christian AB', 'Bruno Schmidt', 'Alexia Glensy'] },
  { date: '2022-10-23', dateLabel: '23.10.22', day: 'SUN', venue: 'TBA', city: 'Amsterdam', title: 'ADE — VBX x SlapFunk', soldOut: true, lineup: [] },
  { date: '2022-10-22', dateLabel: '22.10.22', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'ADE — VBX x Sunrise', soldOut: true,
    lineup: ['Rhadoo', 'Reiss', 'Doudou MD', 'Raresh', 'Ion Ludwig'] },
  { date: '2022-10-22', dateLabel: '22.10.22', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'ADE — VBX at BRET', soldOut: true,
    lineup: ['Reiss', 'Matthias (1)', 'Mandana', 'Laurine', 'Lamache', 'Junki Inoue'] },

  // SEPTEMBER 2022
  { date: '2022-09-17', dateLabel: '17.09.22', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX at Lofi — Day & Night',
    lineup: ['Alexia Glensy', 'Desyn', 'Ferro', 'Matthias (1)', 'Raphael Carrau', 'Reiss', 'Rhadoo', 'Unai Trotti'] },

  // AUGUST 2022
  { date: '2022-08-30', dateLabel: '30.08.22', day: 'TUE', venue: 'IBIZA UNDERGROUND', city: 'Ibiza', title: 'Zero x VBX',
    lineup: ['Alexia Glensy', 'A.M. Project', 'Reiss'] },
  { date: '2022-08-06', dateLabel: '06.08.22', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX — 24H marathon',
    lineup: ['Automatic Writing', 'DJ Senc', 'Enrica Falqui', 'Ferro', 'Frank Haag', 'Makcim', 'Noizar', 'Reiss', 'Tensen'] },

  // JULY 2022
  { date: '2022-07-23', dateLabel: '23.07.22', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX: Day & Night',
    lineup: ['Sedef Adasï', 'Ryan Elliott', 'Malika', 'Francesco Del Garda', 'Ferro', 'Evan Baggs', 'Cesco Corrado', 'Alexia Glensy'] },

  // JUNE 2022
  { date: '2022-06-25', dateLabel: '25.06.22', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX',
    lineup: ['Alexia Glensy', 'Bruno Schmidt', 'MATO', 'Reiss', 'pH Project'] },
  { date: '2022-06-02', dateLabel: '02.06.22', day: 'THU', venue: 'PROGRESS', city: 'Manchester', title: 'You&Me x VBX — Jubilee Bank Holiday',
    lineup: ['Dyed Soundorom', 'Christian AB', 'Desyn', 'Spokenn', 'Josh Baker'] },

  // MAY 2022
  { date: '2022-05-28', dateLabel: '28.05.22', day: 'SAT', venue: 'PARADIGM', city: 'Netherlands', title: 'Planet Paradigm 2022', soldOut: true, pick: true,
    blurb: 'One day, four stages, bags of world-class house, techno and electro.',
    lineup: ['Zip', 'Voigtmann', 'UlsT', 'TAFKAMP', 'Sweely', 'Reiss', 'Onur Özer', 'Manamana', 'Junki Inoue', 'Joren Edwards', 'Herra', 'Andy Luff', 'Freddy K', 'ERIS', 'DJ Masda', 'Deniro', 'Roy Lodder', 'Benny Rodrigues', 'Ferro', 'Abstract Division'] },

  // APRIL 2022
  { date: '2022-04-10', dateLabel: '10.04.22', day: 'SUN', venue: "A'DAM TOREN", city: 'Amsterdam', title: 'VBX at Loft',
    lineup: ['Lamache', 'Reiss', 'Doudou MD'] },
  { date: '2022-04-09', dateLabel: '09.04.22', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX at Shelter', pick: true,
    blurb: "One for the groovy and minimalistic house music aficionados. The notorious VBX has been shaping the sound of Amsterdam's afterparties in the last years, but this time they're taking over Shelter for the whole night.",
    lineup: ['Zip', 'Vera', 'Ferro'] },

  // FEBRUARY 2022
  { date: '2022-02-27', dateLabel: '27.02.22', day: 'SUN', venue: 'LOFI', city: 'Amsterdam', title: 'VBX & SlapFunk',
    lineup: ['Doudou MD', 'Ferro', 'Laurine', 'Samuel Deep', 'Reiss', 'Sweely', 'The Ghost'] },

  // OCTOBER 2021
  { date: '2021-10-16', dateLabel: '16.10.21', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'ADE — VBX at Bret', soldOut: true,
    lineup: ['Christian AB', 'Mandana', 'Reiss', 'Raphael Carrau', 'Voigtmann'] },
  { date: '2021-10-15', dateLabel: '15.10.21', day: 'FRI', venue: 'LOFI', city: 'Amsterdam', title: 'ADE — VBX at Lofi', soldOut: true,
    lineup: ['Ferro', 'Francesco Del Garda', 'Harry McCanna', 'Sam Bangura', 'Raresh'] },

  // JULY 2021
  { date: '2021-07-11', dateLabel: '11.07.21', day: 'SUN', venue: 'LOFI', city: 'Amsterdam', title: 'People in Love',
    lineup: ['Sweely', 'Christian AB', 'Ferro', 'Samuel Deep', 'Reiss', 'Doudou MD'] },

  // APRIL 2021
  { date: '2021-04-26', dateLabel: '26.04.21', day: 'MON', venue: 'LOFI', city: 'Amsterdam', title: 'VBX & SlapFunk present: People in Love', pick: true,
    blurb: "Swerve the King's Day parades and rave to 16 hours of excellent house, techno and plenty more besides.",
    lineup: ['CARISTA', 'Chris Stussy', 'Enrico Mantini', 'Children of Valis', 'Ferro', 'Elias Mazian', 'Ingi Visions', 'Leo Pol', 'Pascal Benjamin', 'Sanja', 'Reiss', 'Traumer', 'Voigtmann', 'John Dimas'] },

  // FEBRUARY 2020
  { date: '2020-02-15', dateLabel: '15.02.20', day: 'SAT', venue: "A'DAM TOREN", city: 'Amsterdam', title: 'VBX Afterhours — The Loft', pick: true,
    blurb: "VBX is back in town with another afterhours session in the Loft. Ferro's organic and percussive sound will provide the perfect early morning soundtrack, joined by Christian AB and Joren Edwards.",
    lineup: ['Ferro', 'Christian AB', 'Joren Edwards'] },
  { date: '2020-02-14', dateLabel: '14.02.20', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX — Shelter', pick: true,
    blurb: 'A Romanian master is in the building.',
    lineup: ['Raresh', 'Reiss'] },

  // JANUARY 2020
  { date: '2020-01-01', dateLabel: '01.01.20', day: 'WED', venue: 'LOFI', city: 'Amsterdam', title: 'SlapFunk & VBX present: New Years Day',
    lineup: ['Sanja', 'Frank Haag', 'Ferro', 'Sweely', 'Ingi Visions', 'Voigtmann', 'Reiss', 'William Caycedo', 'Sòlas'] },

  // DECEMBER 2019
  { date: '2019-12-01', dateLabel: '01.12.19', day: 'SUN', venue: 'VERONICASCHIP', city: 'Amsterdam', title: 'VBX Afterhours — Veronicaschip',
    lineup: ['Bill Patrick', 'Reiss'] },

  // NOVEMBER 2019
  { date: '2019-11-30', dateLabel: '30.11.19', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX — Shelter', pick: true,
    blurb: 'VBX keeps it hot for their upcoming event at Shelter — bringing tINI, Ferro and KRN to the basement.',
    lineup: ['tINI', 'Ferro', 'KRN'] },

  // OCTOBER 2019 — ADE
  { date: '2019-10-20', dateLabel: '20.10.19', day: 'SUN', venue: 'VERONICASCHIP', city: 'Amsterdam', title: 'VBX — ADE Afterhours Veronicaschip', soldOut: true,
    lineup: ['Hamish & Toby', 'Makcim', 'Raphael Carrau', 'Reiss'] },
  { date: '2019-10-19', dateLabel: '19.10.19', day: 'SAT', venue: 'LOFI', city: 'Amsterdam', title: 'VBX x Sunrise — ADE', soldOut: true,
    lineup: ['Arapu', 'Cap', 'Gescu', 'Herodot', 'Joren Edwards', 'Rhadoo', 'Spokenn', 'Ferro', 'Reiss'] },
  { date: '2019-10-19', dateLabel: '19.10.19', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX — ADE Afterhours Bret', soldOut: true, lineup: [] },
  { date: '2019-10-18', dateLabel: '18.10.19', day: 'FRI', venue: 'WAREHOUSE ELEMENTENSTRAAT', city: 'Amsterdam', title: 'Ricardo Villalobos X FRRC X VBX', soldOut: true,
    lineup: ['Edward', 'Craig Richards', 'Sonja Moonear', 'Ricardo Villalobos', 'Raresh', 'Steve Rachmad', 'Voigtmann', 'Reiss', 'Ferro', 'Francesco Del Garda'] },
  { date: '2019-10-17', dateLabel: '17.10.19', day: 'THU', venue: 'BRET', city: 'Amsterdam', title: 'VBX — ADE Bret', soldOut: true, pick: true,
    blurb: 'VBX kicks off ADE with Nicolas Lutz, Frank Haag, Robin Ordell and DJ Masda — all known for their wide-ranging and flawless track selections.',
    lineup: ['Nicolas Lutz', 'DJ Masda', 'Robin Ordell', 'Frank Haag'] },

  // SEPTEMBER 2019
  { date: '2019-09-25', dateLabel: '25.09.19', day: 'WED', venue: 'IBIZA UNDERGROUND', city: 'Ibiza', title: 'Game Over presents VBX',
    lineup: ['Ferro', 'Reiss', 'Voigtmann', 'Adam Chappell', 'Jamie Mannion'] },

  // AUGUST 2019
  { date: '2019-08-04', dateLabel: '04.08.19', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'VBX — A day at the Terrace', pick: true,
    blurb: "Don't miss Youandewan, one of the UK's most underrated house and techno selectors.",
    lineup: ['Cap', 'Spokenn', 'Ferro', 'Reiss', 'Youandewan'] },
  { date: '2019-08-03', dateLabel: '03.08.19', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX — Bret — A Long Summer Night & Day',
    lineup: ['Zendid', 'Makcim', 'just Pete', 'Herra', 'Cap', 'Youandewan', 'Spokenn', 'Ferro', 'Reiss'] },

  // JULY 2019
  { date: '2019-07-21', dateLabel: '21.07.19', day: 'SUN', venue: 'ZT HOTEL', city: 'Barcelona', title: 'VBX — Barcelona', pick: true,
    blurb: 'Few DJs compliment the sunshine better than Dyed Soundorom.',
    lineup: ['Dyed Soundorom', 'Ion Ludwig', 'Ferro', 'Voigtmann', 'Reiss', 'Rick Maia'] },

  // JUNE 2019
  { date: '2019-06-16', dateLabel: '16.06.19', day: 'SUN', venue: 'SINT-PAULUSINSTITUUT', city: 'Brussels', title: 'LifeSnacks Open Air 02',
    lineup: ['Héctor Oaks', 'Zaltan', 'mad miran', 'Bjeor', 'Bafana', 'Ferro', 'Voigtmann', 'Reiss', 'Makcim', 'Karla Böhm'] },
  { date: '2019-06-07', dateLabel: '07.06.19', day: 'FRI', venue: 'BOSTON MANOR PARK', city: 'London', title: 'Junction 2 Festival 2019', pick: true,
    blurb: "Whatever corner of electronic music you're into, there's something for you at this year's Junction 2 Festival.",
    lineup: ['Bicep', 'Daphni', 'Ricardo Villalobos', 'Craig Richards', 'DJ Koze', 'Hunee', 'CARISTA', 'Peach', 'Ben UFO', 'Call Super', 'Shanti Celeste', 'Maceo Plex', 'Tale Of Us', 'Amelie Lens', 'Sonja Moonear', 'Nicolas Lutz', 'Voigtmann', 'Ferro'] },

  // MAY 2019
  { date: '2019-05-25', dateLabel: '25.05.19', day: 'SAT', venue: 'PARADIGM', city: 'Netherlands', title: 'Planet Paradigm 2019', soldOut: true,
    lineup: ['Zip', 'Z@p', 'SHLTR', 'Sandrien', 'Rhadoo', 'Reiss', 'Pangaea', 'Neel', 'Mirella Kroes', 'Mino Abadier', 'Lucy', 'Leo Pol', 'Ion Ludwig', 'Ferro', 'Enrico Mantini', 'Carlos Valdes'] },

  // APRIL 2019
  { date: '2019-04-28', dateLabel: '28.04.19', day: 'SUN', venue: 'VERONICASCHIP', city: 'Amsterdam', title: 'VBX Kingsday Afterhours', lineup: [] },
  { date: '2019-04-27', dateLabel: '27.04.19', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX Kingsday', pick: true,
    blurb: 'Celebrate your favourite Dutch holiday dancing to one of the quirkiest DJs out there: Margaret Dygas.',
    lineup: ['Margaret Dygas', 'Edward', 'Reiss'] },

  // FEBRUARY 2019
  { date: '2019-02-15', dateLabel: '15.02.19', day: 'FRI', venue: 'WAREHOUSE ELEMENTENSTRAAT', city: 'Amsterdam', title: 'VBX with RPR Soundsystem', pick: true,
    blurb: 'The VBX minimal house and techno train never seems to stop. The crew drops another bold lineup with Romanian headliners RPR Soundsystem and brothers in arms Spokenn.',
    lineup: ['RPR Soundsystem', 'Raresh', 'Petre Inspirescu', 'Rhadoo', 'Spokenn', 'Ferro', 'Reiss', 'Benny Rodrigues', 'Ingi Visions', 'Julian Alexander', 'Gene On Earth'] },

  // JANUARY 2019
  { date: '2019-01-26', dateLabel: '26.01.19', day: 'SAT', venue: "A'DAM TOREN", city: 'Amsterdam', title: 'VBX Afterhours',
    lineup: ['Voigtmann', 'Makcim', 'Reiss'] },
  { date: '2019-01-25', dateLabel: '25.01.19', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX with Ricardo Villalobos',
    lineup: ['Ricardo Villalobos', 'Ferro'] },

  // DECEMBER 2018
  { date: '2018-12-08', dateLabel: '08.12.18', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: "VBX 6YR Afterhours — \"What..?\"",
    lineup: ['John Dimas', 'Giuliano Lomonte', 'Reiss'] },
  { date: '2018-12-07', dateLabel: '07.12.18', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX 6YR', pick: true,
    blurb: 'The VBX collective — which has had an immensely successful year — celebrates its sixth anniversary with Sonja Moonear, DJ Masda and resident Ferro.',
    lineup: ['Sonja Moonear', 'DJ Masda', 'Ferro'] },

  // OCTOBER 2018 — ADE
  { date: '2018-10-20', dateLabel: '20.10.18', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'Shelter; VBX ADE', soldOut: true,
    lineup: ['Praslesh', 'Raresh', 'Praslea', 'Fumiya Tanaka', 'Francesco Del Garda', 'Ferro'] },
  { date: '2018-10-20', dateLabel: '20.10.18', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX ADE Afterhours', soldOut: true,
    lineup: ['Dyed Soundorom', 'Voigtmann', 'Max Vaahs', 'Makcim', 'Reiss'] },
  { date: '2018-10-19', dateLabel: '19.10.18', day: 'FRI', venue: 'WAREHOUSE ELEMENTENSTRAAT', city: 'Amsterdam', title: 'VBX x FRRC ADE', soldOut: true, pick: true,
    blurb: "VBX and Ricardo's FRRC lock arms for a very special edition during ADE at the industrial Warehouse Elementenstraat.",
    lineup: ['Ricardo Villalobos', 'Seth Troxler', 'Zip', 'Sonja Moonear', 'Steve Rachmad', 'Nicolas Lutz', 'Spokenn', 'Ferro', 'Reiss'] },
  { date: '2018-10-18', dateLabel: '18.10.18', day: 'THU', venue: 'BRET', city: 'Amsterdam', title: 'VBX x tINI and the gang ADE', soldOut: true,
    lineup: ['tINI', 'Molly', 'Makcim', 'Pelle (NL)'] },

  // SEPTEMBER 2018
  { date: '2018-09-30', dateLabel: '30.09.18', day: 'SUN', venue: 'IBIZA UNDERGROUND', city: 'Ibiza', title: 'Game Over presents VBX',
    lineup: ['Shonky', 'Spokenn', 'Ferro', 'Reiss', 'Smythy', 'Jamie Mannion'] },
  { date: '2018-09-15', dateLabel: '15.09.18', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'Shelter; Rhadoo, Ferro',
    lineup: ['Rhadoo', 'Ferro'] },

  // AUGUST 2018
  { date: '2018-08-04', dateLabel: '04.08.18', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summerseries with Barac',
    lineup: ['Barac', 'Reiss', 'Frank Haag', 'Planet JM'] },

  // JUNE 2018
  { date: '2018-06-23', dateLabel: '23.06.18', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summerseries with Sammy Dee',
    lineup: ['Sammy Dee', 'Ferro', 'Makcim', 'just Pete'] },
  { date: '2018-06-02', dateLabel: '02.06.18', day: 'SAT', venue: 'SUGAR UNION', city: 'Netherlands', title: 'Planet Paradigm', soldOut: true, pick: true,
    blurb: 'VBX and Paradigm join forces to offer a high-quality, unconventional music program with Maayan Nidam, Efdemin, Rrose, Kas:st and many more.',
    lineup: ['Maayan Nidam', 'Francesco Del Garda', 'DJ Masda', 'Makcim', 'Frank Haag', 'Christoffer & Nicholas', 'Efdemin', 'Tama Sumo', 'Joe', 'Philou Louzolo', 'Samuel Deep', 'Jim Lok', 'stranger (NL)', 'Rrose', 'KAS:ST', 'Bleak', 'Serena Butler', 'Ferro', 'Amotik', 'UlsT'] },

  // APRIL 2018
  { date: '2018-04-27', dateLabel: '27.04.18', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX Kingsday Afterparty',
    lineup: ['Zip', 'Reiss', 'Frank Haag', 'Kristina (UA)'] },
  { date: '2018-04-27', dateLabel: '27.04.18', day: 'FRI', venue: 'BRET', city: 'Amsterdam', title: 'VBX Kingsday Outdoor', pick: true,
    blurb: 'The VBX crew brings a killer lineup with tINI, Makcim and Dyed Soundorom, who will go back-to-back with Ferro.',
    lineup: ['tINI', 'Dyed Soundorom', 'Ferro', 'Makcim'] },

  // MARCH 2018
  { date: '2018-03-24', dateLabel: '24.03.18', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX 5YR',
    lineup: ['Margaret Dygas', 'Spokenn', 'Ferro', 'Reiss', 'Frank Haag'] },

  // JANUARY 2018
  { date: '2018-01-27', dateLabel: '27.01.18', day: 'SAT', venue: "A'DAM TOREN", city: 'Amsterdam', title: 'VBX 5YR Afterhours',
    lineup: ['Spokenn', 'Ferro', 'Reiss', 'Makcim', 'Giammarco Orsini', 'Julian Alexander'] },
  { date: '2018-01-26', dateLabel: '26.01.18', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX 5YR', pick: true,
    blurb: 'For the first time in nearly five years, Ricardo Villalobos performs in an intimate Amsterdam club setting.',
    lineup: ['Ricardo Villalobos', 'Ferro', 'Reiss'] },

  // DECEMBER 2017
  { date: '2017-12-09', dateLabel: '09.12.17', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX 5 Year Anniversary', soldOut: true, pick: true,
    blurb: 'The VBX crew celebrates its five-year anniversary at Shelter.',
    lineup: ['Ferro', 'Makcim', 'Frank Haag', 'Reiss'] },

  // OCTOBER 2017 — ADE
  { date: '2017-10-21', dateLabel: '21.10.17', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'Shelter; VBX ADE', soldOut: true,
    lineup: ['Zip', 'Praslesh', 'Raresh', 'Praslea', 'Ferro'] },
  { date: '2017-10-21', dateLabel: '21.10.17', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX ADE Afterhours', soldOut: true,
    lineup: ['Vlad Caia', 'Jan Krueger', 'Spokenn', 'Ferro', 'Reiss', 'Makcim', 'Frank Haag'] },
  { date: '2017-10-19', dateLabel: '19.10.17', day: 'THU', venue: 'BRET', city: 'Amsterdam', title: 'VBX ADE', soldOut: true,
    lineup: ['Francesco Del Garda', 'Andrew James Gustav', 'Reiss'] },

  // SEPTEMBER 2017
  { date: '2017-09-10', dateLabel: '10.09.17', day: 'SUN', venue: 'VILLAGE UNDERGROUND', city: 'London', title: 'Fuse x VBX', pick: true,
    blurb: 'Influential Amsterdam collective VBX partner with Fuse for a party at Village Underground.',
    lineup: ['Enzo Siragusa', 'Rossko', 'Ferro', 'Makcim'] },

  // AUGUST 2017
  { date: '2017-08-05', dateLabel: '05.08.17', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summerseries',
    lineup: ['Zendid', 'Spokenn', 'Ferro', 'Reiss', 'Makcim'] },

  // JULY 2017
  { date: '2017-07-22', dateLabel: '22.07.17', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summerseries',
    lineup: ['Digby', 'Ferro', 'Ingi Visions', 'Samuel Deep', 'Julian Alexander', 'Frank Haag'] },

  // JUNE 2017
  { date: '2017-06-24', dateLabel: '24.06.17', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX Summerseries', pick: true,
    blurb: "The first edition of VBX's summer trilogy at BRET will be a marathon, kicking on until midday (at the earliest).",
    lineup: ['Lamache', 'Makcim', 'Reiss', 'Herra'] },

  // MAY 2017
  { date: '2017-05-19', dateLabel: '19.05.17', day: 'FRI', venue: 'RENATE', city: 'Berlin', title: '510k Feat. VBX',
    lineup: ['Olga Korol', 'Randall M', 'XIII', 'Mihigh', 'Kid Chriss', 'Ferro', 'Makcim', 'Avos', 'Ian Blevins', 'Sebastian Voigt', 'Michal Zietara'] },

  // APRIL 2017
  { date: '2017-04-27', dateLabel: '27.04.17', day: 'THU', venue: 'BRET', city: 'Amsterdam', title: 'VBX Kingsday',
    lineup: ['DeWalta', 'Spokenn', 'Ferro', 'Frank Haag'] },

  // MARCH 2017
  { date: '2017-03-17', dateLabel: '17.03.17', day: 'FRI', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX with tINI + Ferro + Makcim',
    lineup: ['tINI', 'Ferro', 'Makcim'] },

  // JANUARY 2017
  { date: '2017-01-29', dateLabel: '29.01.17', day: 'SUN', venue: 'BRET', city: 'Amsterdam', title: 'Slapfunk Afterhours',
    lineup: ['Ferro', 'Levi Verspeek', 'Makcim', 'Samuel Deep', 'William Caycedo'] },

  // DECEMBER 2016
  { date: '2016-12-10', dateLabel: '10.12.16', day: 'SAT', venue: 'SHELTER', city: 'Amsterdam', title: 'VBX with Raresh Spokenn',
    lineup: ['Raresh', 'Spokenn', 'Ferro', 'Reiss'] },

  // OCTOBER 2016 — ADE
  { date: '2016-10-22', dateLabel: '22.10.16', day: 'SAT', venue: 'BRET', city: 'Amsterdam', title: 'VBX x Fuse — Afterhours',
    lineup: ['Archie Hamilton', 'Enzo Siragusa', 'Ferro', 'Makcim', 'Rossko'] },
  { date: '2016-10-20', dateLabel: '20.10.16', day: 'THU', venue: 'BRET', city: 'Amsterdam', title: 'VBX x Loud-Contact',
    lineup: ['Treatment', 'Francesco Del Garda', 'Vera', 'Spokenn', 'Ferro', 'Reiss'] },

  // AUGUST 2016
  { date: '2016-08-12', dateLabel: '12.08.16', day: 'FRI', venue: 'PARADIGM', city: 'Netherlands', title: 'Paradigm Festival', soldOut: true,
    lineup: ['Sonja Moonear', 'Spokenn', 'Makcim', 'Frank Haag'] },

  // MAY 2016
  { date: '2016-05-28', dateLabel: '28.05.16', day: 'SAT', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX at Cruquiusgilde',
    lineup: ['Spokenn', 'Ferro', 'Ingi Visions', 'Samuel Deep', 'Julian Alexander', 'Herra'] },

  // FEBRUARY 2016
  { date: '2016-02-28', dateLabel: '28.02.16', day: 'SUN', venue: 'WAREHOUSE ELEMENTENSTRAAT', city: 'Amsterdam', title: 'Hyte x Fuse Carry-On (12hr)',
    lineup: ['Ricardo Villalobos', 'Apollonia', 'Enzo Siragusa', 'Ion Ludwig', 'Seb Zito', 'Ferro', 'Umho'] },

  // JANUARY 2016
  { date: '2016-01-01', dateLabel: '01.01.16', day: 'FRI', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX — NYD',
    lineup: ['Molly', 'Makcim', 'Ferro', 'Herra'] },

  // DECEMBER 2015
  { date: '2015-12-31', dateLabel: '31.12.15', day: 'THU', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX x Slapfunk — NYE',
    lineup: ['Times are Ruff', 'Samuel Deep', 'Julian Alexander', 'Reiss'] },

  // NOVEMBER 2015
  { date: '2015-11-27', dateLabel: '27.11.15', day: 'FRI', venue: 'CLOSURE', city: 'Amsterdam', title: 'VBX with Tini + Makcim',
    lineup: ['tINI', 'Makcim'] },

  // OCTOBER 2015 — ADE
  { date: '2015-10-17', dateLabel: '17.10.15', day: 'SAT', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX ADE x What', soldOut: true,
    lineup: ['Janina', 'Eli Verveine', 'Reiss'] },
  { date: '2015-10-16', dateLabel: '16.10.15', day: 'FRI', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX ADE Afterhour', soldOut: true,
    lineup: ['Carlos Valdes', 'Terje Bakke', 'Avos'] },
  { date: '2015-10-15', dateLabel: '15.10.15', day: 'THU', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX ADE x Fuse', soldOut: true,
    lineup: ['DeWalta', 'Enzo Siragusa', 'Seb Zito', 'Ferro', 'Rossko', 'Archie Hamilton', 'Frank Haag'] },

  // AUGUST 2015
  { date: '2015-08-30', dateLabel: '30.08.15', day: 'SUN', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX 3yrs Anniversary Part 2', soldOut: true,
    lineup: ['Alex Picone', 'Makcim', 'Ferro', 'Frank Haag'] },
  { date: '2015-08-29', dateLabel: '29.08.15', day: 'SAT', venue: 'CLOSURE', city: 'Amsterdam', title: 'VBX 3yrs Anniversary Part 1', soldOut: true,
    lineup: ['Fred P', 'The Mole', 'Tettero'] },

  // JULY 2015
  { date: '2015-07-26', dateLabel: '26.07.15', day: 'SUN', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX x Summer Series Matinee Part 2',
    lineup: ['Francesco Del Garda', 'Avos'] },

  // JUNE 2015
  { date: '2015-06-28', dateLabel: '28.06.15', day: 'SUN', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: 'VBX x Summer Series Matinee 15hrs',
    lineup: ['Evan Baggs', 'Terje Bakke', 'Reiss', 'Herra', 'Jamie Lie A Kwie'] },

  // OCTOBER 2014 — ADE
  { date: '2014-10-19', dateLabel: '19.10.14', day: 'SUN', venue: 'TOLHUISTUIN', city: 'Amsterdam', title: "ADE ' soldOut: true,14: VBX x Slapfunk x Natives",
    lineup: ['The Mole', 'Mr. Ties', 'Dungeon Meat', 'Djebali', 'Lazare Hoche', 'Beesmunt Soundsystem', 'Samuel Deep', 'Ferro', 'Malin Genie', 'Anil Aras', 'Tettero', 'Larry De Kat', 'Guy Gravier'] },
  { date: '2014-10-18', dateLabel: '18.10.14', day: 'SAT', venue: 'CRUQUIUSGILDE', city: 'Amsterdam', title: '?What?..? at ADE', soldOut: true,
    lineup: ['Onur Özer', 'DeWalta', 'Reiss'] },
  { date: '2014-10-16', dateLabel: '16.10.14', day: 'THU', venue: 'SUGAR FACTORY', city: 'Amsterdam', title: "ADE ' soldOut: true,14: VBX x Surefire Agency",
    lineup: ['Addison Groove', 'Peverelist', 'Livity Sound', 'Appleblim', 'Second Storey'] },

  // AUGUST 2014
  { date: '2014-08-23', dateLabel: '23.08.14', day: 'SAT', venue: 'CANVAS', city: 'Amsterdam', title: 'VBX — Spectrum',
    lineup: ['Murat Tepeli', 'Tettero'] },

  // APRIL 2014
  { date: '2014-04-19', dateLabel: '19.04.14', day: 'SAT', venue: 'TOREN', city: 'Amsterdam', title: 'VBX — Spectrum',
    lineup: ['Boris Werner', 'Homework', 'Awanto 3', 'Maxi Mill', 'Tettero'] },

  // MARCH 2014
  { date: '2014-03-22', dateLabel: '22.03.14', day: 'SAT', venue: 'CHICAGO SOCIAL CLUB', city: 'Amsterdam', title: 'VBX — Spectrum with Linkwood',
    lineup: ['Linkwood', 'Alex Salvador', 'Tettero', 'Samuel Deep', 'Larry De Kat'] },
  { date: '2014-03-08', dateLabel: '08.03.14', day: 'SAT', venue: 'DOKA', city: 'Amsterdam', title: 'VBX — Current with Terje Bakke',
    lineup: ['Terje Bakke', 'Ferro', 'Avos'] },

  // FEBRUARY 2014
  { date: '2014-02-22', dateLabel: '22.02.14', day: 'SAT', venue: 'CHICAGO SOCIAL CLUB', city: 'Amsterdam', title: 'VBX — Spectrum with FCL',
    lineup: ['FCL', 'Tettero'] },
  { date: '2014-02-14', dateLabel: '14.02.14', day: 'FRI', venue: 'STUDIO 80', city: 'Amsterdam', title: 'VBX — Workit with Dance Mania',
    lineup: ['DJ Funk', 'Parris Mitchell', 'Reiss', 'Tettero'] },

  // JANUARY 2014
  { date: '2014-01-25', dateLabel: '25.01.14', day: 'SAT', venue: 'CHICAGO SOCIAL CLUB', city: 'Amsterdam', title: 'Spectrum feat. Alden Tyrell',
    lineup: ['Alden Tyrell', 'Cinnaman', 'Tettero'] },

  // DECEMBER 2013
  { date: '2013-12-28', dateLabel: '28.12.13', day: 'SAT', venue: 'CHICAGO SOCIAL CLUB', city: 'Amsterdam', title: 'Spectrum Feat. Funkineven',
    lineup: ['FunkinEven', 'Tettero', 'Jeebs'] },

  // NOVEMBER 2013
  { date: '2013-11-28', dateLabel: '28.11.13', day: 'THU', venue: 'PROOST!', city: 'Netherlands', title: 'Zuurstof',
    lineup: ['Tettero', 'Tapesh', 'Cees'] },

  // OCTOBER 2013
  { date: '2013-10-19', dateLabel: '19.10.13', day: 'SAT', venue: 'STUDIO/K', city: 'Amsterdam', title: 'Cartel & VBX ADE Night Festival', soldOut: true,
    lineup: ['Tyree Cooper', 'Mark E', 'Point G', 'Hold Youth', 'Molly', 'De Sluwe Vos', 'Samuel Deep', 'Makcim', 'Ferro', 'Steven Pieters'] },
];

const VENUES = ['BRET', 'SHELTER', 'LOFI', 'TILLATEC', 'ISO', 'SKATECAFE', 'FABRIC', 'UPLOAD', 'PARADIGM', 'SUNNY SIDE', 'UNUM', 'ZT HOTEL · WOLF CLUB', 'THE UPLOAD CLUB', 'GALDERSE MEREN'];

const SOCIAL = {
  instagram: { handle: '@vbx.nu',  url: 'https://instagram.com/vbx.nu' },
  soundcloud:{ handle: 'vbx-nu',   url: 'https://soundcloud.com/vbx-nu' },
  telegram:  { handle: 'Friends & Crew Telegram', url: '#' },
  linktree:  { handle: 'linktr.ee/vbx.nu', url: 'https://linktr.ee/vbx.nu' },
  email:     { label: 'hello@vbx.nu', url: 'mailto:hello@vbx.nu' },
};

Object.assign(window, { UPCOMING, ARCHIVE, VENUES, SOCIAL });
