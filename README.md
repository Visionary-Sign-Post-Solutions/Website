# Visionary Sign & Post Solutions — vspsusa.com

Website for Visionary Sign & Post Solutions (Charlotte, NC), rebuilt from the
old WordPress site as a **Next.js** app that deploys to **Netlify** on every
push.

Next.js exports the site to plain static HTML (`output: 'export'`), so there's
no server to run or pay for — Netlify just serves files from `out/`.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edits appear instantly.

To check exactly what Netlify will publish:

```bash
npm run build
```

That writes the finished site to `out/`.

## Structure

```
app/
  layout.jsx              Header + footer wrapper shared by every page
  page.jsx                Home
  catalog/page.jsx        Product catalog (FlowPaper embed)
  gallery/page.jsx        Photo gallery with lightbox
  start-your-project/     Quote request form
  contact/page.jsx        Contact info, map, contact form
  thank-you/page.jsx      Form success page
  not-found.jsx           404 page
  globals.css             All site styles
components/               Header, Footer, forms, gallery, icons
lib/site.js               Phone, email, hours, nav links, product list
public/images/            Logo and photos
netlify.toml              Build settings, redirects, cache headers
```

### Making common edits

Almost everything routine lives in **`lib/site.js`** — phone number, email,
hours, service area, the nav menu, and the product/gallery list. Change it
there once and it updates the header, footer, and every page automatically.
(On the old site each of these was copy-pasted into seven separate files.)

- **Add a gallery photo:** drop the image in `public/images/`, then add an entry
  to the `products` array in `lib/site.js`. It appears in the gallery and on the
  home page grid.
- **Change colors or fonts:** the CSS variables at the top of `app/globals.css`.
- **Add a page:** create `app/your-page/page.jsx`, then add it to `nav` in
  `lib/site.js`.

URLs match the old WordPress permalinks (`/catalog/`, `/gallery/`,
`/start-your-project/`, `/contact/`), so existing links and search results keep
working.

## Deploying

Netlify is connected to this repo — **every push to the main branch rebuilds and
publishes the site automatically.** Nothing else to do.

Netlify reads its settings from `netlify.toml`:
build command `npm run build`, publish directory `out`.

For the first-time setup on a new Netlify account: *Add new site → Import an
existing project*, pick this repo, and accept the detected settings. Then add
the domain under **Domain management**; Netlify issues a free auto-renewing SSL
certificate (the old site's certificate had expired).

## Forms

The contact and quote forms use **Netlify Forms** — no backend required.
Netlify finds them by parsing the built HTML, and both are present in the
export (`contact` and `project-quote`).

⚠️ **After the first deploy**, turn on notifications under
**Site settings → Forms → Form notifications**, or submissions pile up in the
dashboard and nobody is emailed. Point them at `david.bestllc@gmail.com`.

## Notes

- The catalog page embeds the existing FlowPaper catalog. That account is a
  **trial** (`918408a8`), and its old URL now redirects — `lib/site.js` points at
  the current working address. If the trial lapses the embed will break; hosting
  the catalog PDF in this repo would remove that dependency.
- The old contact page listed a second phone number (704-**602**-2860) that
  looked like a typo for 704-**302**-2860. The 302 number is used throughout —
  worth confirming.
- Scroll-in animations are written so content stays visible if JavaScript fails
  or is disabled, and when printing.
