# tariniprasadtpn3.github.io

Personal site with two modes:

- **Work** — data engineering résumé: about, experience, projects, skills, education, contact.
- **Play** — photography, comics and travel.

The switch is in the header (or press <kbd>M</kbd>). Light/dark is a separate toggle (<kbd>T</kbd>).
Both choices are remembered in `localStorage`.

No build step, no framework, no dependencies. Three files do the work:

| File | What's in it |
| --- | --- |
| `index.html` | All markup for both modes |
| `css/main.css` | Every style; all colour lives in the token block at the top |
| `js/main.js` | Behaviour — **and the content you edit regularly** |

`index-old.html` + `css/styles.css` are the previous (2020, Bootstrap) version, still reachable from the footer.

**Changing what the site says about you?** Edit [CONTENT.md](CONTENT.md) — it holds every
word of the professional side in one editable place, with the invented bits flagged.

## Adding your own photos, comics and trips

Open `js/main.js`. Everything editable is in the `DATA` block at the very top.
**Any item without a `src` renders a generated gradient placeholder**, so the site
always looks complete — you can add real files a few at a time.

### Photos → `assets/photos/`

```js
{ title: 'Charminar, 6:40am', meta: 'Hyderabad · 35mm', cat: 'street', ratio: 0.75, hue: 24,
  src: 'assets/photos/charminar.jpg' }   // <- add this line
```

- `cat` must be one of `street` `nature` `portrait` `night` (these are the filter buttons; change them in both `index.html` and here if you want different ones).
- `ratio` is width ÷ height. It keeps the masonry from jumping while images load — set it to the real aspect ratio.
- `hue` (0–360) only matters for the placeholder.
- Export around **1600px on the long edge, JPEG ~80%**. The lightbox never shows more than that.

### AI comics → `assets/comics/`

The comics section is built around **The Invisible Hero**, published on WEBTOON Canvas.
`DATA.series` holds the series URL and (optionally) a `cover`; `DATA.comics` is the episode
list, newest last, each with a `link` out to WEBTOON.

Placeholder panels are generated **without dialogue** on purpose — the real script is on
WEBTOON, and putting invented lines in its mouth would misrepresent the work.

An episode's `pages` array takes either a file path or a generated page:

```js
{
  title: 'Chapter 1: The Awakening',
  sub: 'Dec 17, 2025',
  link: 'https://www.webtoons.com/...',          // the episode on WEBTOON
  cover: 'assets/comics/ch1/cover.jpg',          // optional
  pages: [
    'assets/comics/ch1/p1.jpg',                  // an exported page
    { layout: '2x2' }                            // or a placeholder page
  ]
}
```

Generated layouts: `splash` (1 panel), `2x2` (4), `1+2` (3), `3-strip` (3).
`lines` fills the speech bubbles in panel order — used only for made-up demo pages.
Exported pages work best at **3:4 portrait, ~1200×1600**.

To show the real cover, add it to `DATA.series`:

```js
series: {
  title: 'The Invisible Hero',
  url: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
  cover: 'assets/comics/cover.jpg'
}
```

### Trips → `assets/travel/`

```js
{ place: 'Araku Valley', when: 'Aug 2023', note: 'Coffee hills...',
  x: 62, y: 40, hue: 150, photo: 'assets/travel/araku.jpg' }
```

`x` and `y` are percentages (0–100) positioning the pin on the stylised map —
it is deliberately abstract, not a real projection, so place pins by eye.
Trips are joined by a dashed route **in array order**, so keep them in the order you want drawn.
Thumbnails are square; **600×600** is plenty.

### Other things worth editing

- `DATA.typed` — the rotating lines under the hero headline.
- `DATA.skills` — `group` must be `lang` \| `data` \| `ops` \| `design`; `level` drives the meter.
- Experience, projects and education are plain markup in `index.html` (they change rarely).
- Résumé link, email and phone: search `index.html` for `drive.google.com`, `mailto:` and `tel:`.

## Running it locally

```sh
python -m http.server 8000
```

then open <http://localhost:8000>. Opening `index.html` directly from disk works too.

## Notes

- Keyboard: <kbd>M</kbd> mode, <kbd>T</kbd> theme, <kbd>←</kbd>/<kbd>→</kbd> in the lightbox and comic reader, <kbd>Esc</kbd> to close.
- Respects `prefers-reduced-motion` (animations off) and `prefers-color-scheme` (first-visit theme).
- Printing hides the chrome and prints both modes.
