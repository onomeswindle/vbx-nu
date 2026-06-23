# VBX — vbx.nu

Static site for VBX (Amsterdam electronic music events, booking, curation, records).

## Hosting
- Deployed on Netlify (static, no build step). Publish directory: repository root.
- vbx.nu is served via Readymag, which embeds the Netlify deploy.

## Editing
- Content/events live in `site/data.js`.
- Pages: `index.html` (home), `events.html`, `label.html`, `merch.html`, `releases.html`, `event.html`.
- Components: `site/*.js` (plain JS, pre-compiled from JSX — no in-browser build).
- Push to the connected branch and Netlify auto-deploys.
