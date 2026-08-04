# Visionary Sign & Post Solutions — vspsusa.com

Static website for Visionary Sign & Post Solutions (Charlotte, NC), rebuilt from
the old WordPress site to deploy on **Netlify**. No build step, no database —
just HTML, CSS, and a little JavaScript.

## Structure

```
index.html                  Home
catalog/index.html          Product catalog (FlowPaper embed)
gallery/index.html          Photo gallery with lightbox
start-your-project/         Project quote form
contact/index.html          Contact info, map, contact form
thank-you/index.html        Form success page
404.html                    Not-found page (Netlify picks this up automatically)
css/style.css               All site styles (shared design system)
js/main.js                  Mobile nav, scroll reveal, gallery lightbox
images/                     Logo + product photos
netlify.toml                Redirects, headers
```

URLs match the old WordPress permalinks (`/catalog/`, `/gallery/`,
`/start-your-project/`, `/contact/`) so existing links keep working.

## Deploying to Netlify

**Easiest (drag & drop):** go to https://app.netlify.com/drop and drag this
whole folder onto the page. Done.

**Recommended (Git-based):** push this folder to a GitHub repo, then in Netlify
choose "Add new site → Import an existing project" and pick the repo. Leave the
build command empty and set the publish directory to the repo root. Every push
then auto-deploys.

After deploying, add the custom domain (vspsusa.com) under
**Site settings → Domain management** and follow the DNS instructions. Netlify
issues a free SSL certificate automatically (the old site's certificate had
expired — this fixes that permanently).

## Forms

The contact form and project-quote form use **Netlify Forms** — no server
needed. After the first deploy, enable form notifications under
**Site settings → Forms → Form notifications** and add
`david.bestllc@gmail.com` so submissions arrive by email. Submissions are also
visible in the Netlify dashboard under the "Forms" tab.

## Notes

- The catalog page embeds the existing FlowPaper catalog
  (`918408a8-trial.flowpaper.com`). That's a trial FlowPaper account — consider
  replacing it with a hosted PDF in this repo if the trial expires.
- To add gallery photos, drop images into `images/` and copy one of the
  `<figure class="gallery-item">` blocks in `gallery/index.html`.
- Brand colors and fonts live at the top of `css/style.css` as CSS variables.
