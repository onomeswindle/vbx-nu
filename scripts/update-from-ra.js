#!/usr/bin/env node
/**
 * VBX — daily RA -> site updater.
 * Fetches VBX's events from Resident Advisor (promoter 30291), maps them to the
 * site's UPCOMING shape, and writes site/ra-events.js (which mutates the in-file
 * UPCOMING array in place, overriding the fallback data in data.js).
 *
 * RA is behind Cloudflare + DataDome, which 403s plain `fetch`/`curl` GETs. So we
 * drive a real headless Chromium (Playwright) — it executes the DataDome JS
 * challenge, lets the real Next.js page render, and we read __NEXT_DATA__ from the
 * live DOM. Committed daily by a GitHub Action.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PROMOTER_URL = 'https://ra.co/promoters/30291';
const OUT = path.join(__dirname, '..', 'vbx-site-repo', 'site', 'ra-events.js');
const DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Load the RA promoter page in a real browser and return the parsed __NEXT_DATA__
// Apollo blob. A real Chromium clears DataDome's JS challenge that bare GETs fail.
async function fetchNextData() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
  });
  try {
    const context = await browser.newContext({
      userAgent: UA,
      locale: 'en-GB',
      timezoneId: 'Europe/Amsterdam',
      viewport: { width: 1280, height: 800 }
    });
    // Trim the most obvious headless tell before any page script runs.
    await context.addInitScript(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
    const page = await context.newPage();
    const resp = await page.goto(PROMOTER_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // The Next.js data island only exists on the real page. If DataDome serves a
    // soft challenge it resolves and reloads to the real content within a few s.
    try {
      await page.waitForSelector('#__NEXT_DATA__', { timeout: 45000 });
    } catch (e) {
      const status = resp ? resp.status() : 'unknown';
      const title = await page.title().catch(() => '');
      throw new Error('RA page did not yield __NEXT_DATA__ (HTTP ' + status + ', title "' + title + '"). '
        + 'Likely a DataDome block/CAPTCHA — try a residential proxy or re-run later.');
    }
    const json = await page.$eval('#__NEXT_DATA__', el => el.textContent);
    return JSON.parse(json);
  } finally {
    await browser.close();
  }
}

async function main() {
  const data = await fetchNextData();
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

  const banner = '// AUTO-GENERATED from Resident Advisor (promoter 30291).\n'
    + '// Generated: ' + new Date().toISOString() + '\n';
  const body = banner
    + '(function(){\n'
    + '  var ev = ' + JSON.stringify(events, null, 2) + ';\n'
    + '  if (typeof UPCOMING !== "undefined" && Array.isArray(UPCOMING)) {\n'
    + '    UPCOMING.length = 0;\n'
    + '    Array.prototype.push.apply(UPCOMING, ev);\n'
    + '    window.UPCOMING = UPCOMING;\n'
    + '  } else {\n'
    + '    window.UPCOMING = ev;\n'
    + '  }\n'
    + '})();\n';
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body);
  console.log('Wrote ' + events.length + ' upcoming events to ' + OUT);
}
main().catch(e => { console.error(e); process.exit(1); });
