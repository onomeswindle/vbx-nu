# How to update vbx.nu

Plain-language guide for whoever maintains the VBX website. No developer needed.

## How the site works

- The website files live in this GitHub repository, `onomeswindle/vbx-nu`, in the folder `vbx-site-repo`.
- Netlify watches the `main` branch. Every time a change is saved ("committed") to `main`, Netlify rebuilds and publishes the site within about a minute. There is no build step and no deploy button.
- vbx.nu itself is a Readymag page that embeds the Netlify site. Readymag only matters for the shell around the site, not for events.
- All events, line-ups, ticket links and flyers come from one file: `vbx-site-repo/site/data.jsx`.

## What you need

1. A GitHub account (free, github.com).
2. To be added as a collaborator on `onomeswindle/vbx-nu`. The repository owner does this under Settings, Collaborators, Add people. Without this you can read but not save.

That is all. Netlify needs no login for day-to-day updates.

## Add or change an event (the normal case)

1. Open https://github.com/onomeswindle/vbx-nu/blob/main/vbx-site-repo/site/data.jsx
2. Click the pencil icon (top right of the file) to edit in the browser.
3. Find the `UPCOMING` list near the top. Each event is one block between `{` and `},`. Copy an existing block and change the values. Keep the quotes and commas exactly as they are.

```js
  {
    id: 'evt-shanti-celeste-ade',                 // unique, lowercase, no spaces
    slug: 'shanti-celeste-curates-vbx-ade-2026',  // becomes the URL of the event page
    date: '2026-10-22',                            // YYYY-MM-DD, used for sorting
    dateLabel: '22.10.26',                         // what is shown
    day: 'THU',
    city: 'Amsterdam',
    venue: 'SKATECAFE',
    region: 'Local',                               // Local or International
    title: 'Shanti Celeste curates VBX',
    headliners: ['Shanti Celeste', 'A For Alpha', 'Pancratio'],
    support: [],
    doors: '20:00',
    close: '04:00',
    status: 'ON SALE',                             // ON SALE, SOLD OUT, FREE, TBA, SECRET
    buyUrl: 'https://weeztix.shop/xxxx',
    provider: 'Weeztix',
    blurb: 'One line of copy shown under the title.',
    image: { src: 'site/assets/flyers/shanti-ade-2026.jpg', label: 'Shanti Celeste curates VBX, Skatecafe' },
  },
```

4. Scroll down, write a short note in "Commit changes" (for example "Add Apollonia 25.10 line-up"), keep "Commit directly to the main branch" selected, and click Commit.
5. Wait one to two minutes, then open vbx.nu and hard-refresh (Cmd+Shift+R).

Order on the site is by `date`, so you do not need to sort the list yourself.

## Add a flyer

1. Open https://github.com/onomeswindle/vbx-nu/tree/main/vbx-site-repo/site/assets/flyers
2. Click "Add file", "Upload files", drop the image, commit.
3. Use the file name in the event's `image.src`: `site/assets/flyers/your-file.jpg`.

Keep flyers under 1 MB and use jpg or webp. Lowercase file names, hyphens instead of spaces.

## Move an event to the archive after it happened

Cut the whole block out of `UPCOMING` and paste it into the `ARCHIVE` list further down in the same file. Nothing else changes.

## Change ticket status

Edit `status` on the event: `'ON SALE'`, `'SOLD OUT'`, `'FREE'`, `'TBA'`. Change `buyUrl` when the Weeztix link changes.

## If something breaks

The most common mistake is a missing comma or quote. The events page then shows nothing. Open the file on GitHub, click "History", open the last change, and click "Revert" to undo it. Then try again.

## The automatic Resident Advisor sync (optional, not reliable)

There is a GitHub Action, `.github/workflows/update-from-ra.yml`, that is meant to pull VBX's events from RA (promoter 30291) every morning and write them into `vbx-site-repo/site/ra-events.jsx`. That file only adds shows that are not yet in `data.jsx`; it never overwrites what you typed by hand.

In practice it rarely works because RA blocks automated browsers. Do not rely on it. If you want to try it: Actions tab, "Update events from Resident Advisor", "Run workflow". If it fails, ignore it and edit `data.jsx` by hand as above.

## Ownership to transfer when the programmer changes

- GitHub repository `onomeswindle/vbx-nu`: add the new maintainer as collaborator, or transfer the repository to a VBX-owned GitHub account.
- Netlify team "VBX": add the new maintainer as a team member.
- Readymag account for the vbx.nu shell.
