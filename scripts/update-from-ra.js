#!/usr/bin/env node
/**
 * VBX â daily RA -> site updater.
 * Fetches VBX's events from Resident Advisor (promoter 30291), maps them to the
 * site's UPCOMING shape, and writes site/ra-events.js (which sets window.UPCOMING,
 * overriding the fallback data in data.js). Committed daily by a GitHub Action.
 */
const fs = require('fs');
const path = require('path');

const PROMOTER_URL = 'https://ra.co/promoters/30291';
const OUT = path.join(__dirname, '..', 'vbx-site-repo', 'site', 'ra-events.js');
const DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

async function main() {
  const res = await fetch(PROMOTER_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-GB,en;q=0.9'
    }
  });
  if (!res.ok) throw new Error('RA fetch failed: ' + res.status);
  const html = await res.text();
  const m = html.match(/id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error('Could not find __NEXT_DATA__ in RA page');
  const data = JSON.parse(m[1]);
  const a = data.props.apolloState;
  const D = r => (r && r.__ref) ? a[r.__ref] : r;

  const events = Object.keys(a)
    .filter(k => /^Event:\d+/.test(k))
    .map(k => a[k])
    .map(e => {
      const v = D(e.venue);
      const area = v ? D(v.area) : null;
      const country = area ? D(area.country) : null;
      const img = D((e.images || [])[0]);
      const flyer = (img && img.filename) || e.flyerFront || null;
      const artists = (e.artists || []).map(x => D(x)).map(x => x && x.name).filter(Boolean);
      const dateISO = (e.date || '').slice(0, 10);
      const d = new Date(e.date);
      const start = e.startTime ? new Date(e.startTime) : null;
      const areaName = (area && area.name && area.name !== 'All') ? area.name : (country && country.name) || '';
      return {
        _sort: dateISO,
        id: 'ra-' + e.id,
        slug: 'ra-' + e.id,
        date: dateISO,
        dateLabel: dateISO ? dateISO.slice(8,10)+'.'+dateISO.slice(5,7)+'.'+dateISO.slice(2,4) : '',
        day: isNaN(d) ? '' : DAYS[d.getUTCDay()],
        city: areaName,
        venue: (v && v.name) || '',
        region: (area && area.name === 'Amsterdam') ? 'Local' : 'International',
        title: e.title || '',
        headliners: artists,
        support: [],
        doors: start && !isNaN(start) ? String(start.getUTCHours()).padStart(2,'0')+':'+String(start.getUTCMinutes()).padStart(2,'0') : '',
        close: '',
        status: 'ON SALE',
        ticketUrl: 'https://ra.co/events/' + e.id,
        buyUrl: 'https://ra.co/events/' + e.id,
        provider: 'RA',
        blurb: '',
        image: { src: flyer || '', label: e.title || '' }
      };
    })
    .filter(e => e._sort && e._sort >= new Date().toISOString().slice(0,10)) // upcoming only
    .sort((x, y) => x._sort.localeCompare(y._sort));

  events.forEach(e => delete e._sort);

  const banner = '// AUTO-GENERATED from Resident Advisor (promoter 30291). Do not edit by hand.\n'
    + '// Last run: ' + new Date().toISOString() + '\n';
  const body = banner + 'window.UPCOMING = ' + JSON.stringify(events, null, 2) + ';\n';
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body);
  console.log('Wrote ' + events.length + ' upcoming events to ' + OUT);
}
main().catch(e => { console.error(e); process.exit(1); });
