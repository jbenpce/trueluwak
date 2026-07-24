# True Luwak — trueluwak.com

Regenerated static website for **True Luwak** (Wild Arabica Kopi) — 100% wild-origin,
guaranteed and certified Kopi Luwak coffee from the Gayo highlands of northern
Sumatra, Indonesia.

## Structure

The site mirrors the original URL structure, so existing links keep working:

| Path | Page |
|---|---|
| `/` | Home (hero, presentation tiles, quote) |
| `/qui-sommes-nous/` | The True Luwak brand story |
| `/history/` | The story of the coffee |
| `/process/` | The elaborate process & traceability |
| `/engagement/` | 100% wild commitment |
| `/contact/` | Contact (Alessia — founder, Lydie — sales) |

## Languages

The site is available in **French (default), English, Italian, Spanish and
Portuguese** via the selector in the navigation bar. All copy lives in
`i18n.js`; the HTML contains the French source text as fallback. The initial
language follows the visitor's browser language, and the choice is remembered.

## Assets

- `assets/logo-full.svg` / `assets/logo-full.png` — full logo (vector, from the original `.ai` file)
- `assets/logo-mark.png` — the oval civet mark (nav + favicon)

The decorative artwork is inline SVG. To use real photography instead, drop
images into `assets/` and replace the corresponding `<svg>` blocks.

## Deployment

Plain static site — no build step. Intended for GitHub Pages with the custom
domain `trueluwak.com` (see `CNAME`). Enable Pages on this branch (or merge to
the default branch and point Pages there).
