# Break · Release · Reset — Landing Page

A single-page hero landing built in plain HTML, CSS, and JavaScript that recreates the "Still thinking about them?" concept design.

## Structure

```
.
├── index.html      # Markup for the hero section
├── styles.css      # All visual styling (typography, layout, responsive rules)
├── script.js       # Small CTA interaction (confirmation feedback)
└── assets/
    └── hero.png    # Background photograph used in the hero
```

## Run locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Get a temporary demo link from the repo

This repo ships with a GitHub Pages workflow (`.github/workflows/pages.yml`) that publishes the site automatically. To turn it on:

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. (Optional) On **Settings → Environments → github-pages → Deployment branches and tags**, add the branch you want to deploy (e.g. `cursor/landing-page-break-release-reset-a9a4`) so feature-branch pushes also publish.
4. Push to `main` (or any `cursor/*` branch) — the **Deploy static site to GitHub Pages** workflow runs automatically.
5. Open the **Actions** tab → latest run → the `deploy` job exposes a **page_url** (something like `https://pranav0n.github.io/rr-website-to-be-deleted/`). That's your live demo link.

### Zero-config alternatives (no settings needed)

If you want a temporary URL without enabling Pages, any of these work in seconds:

- **Netlify Drop** — drag-and-drop the project folder at <https://app.netlify.com/drop>; you'll get a `*.netlify.app` URL instantly.
- **Vercel** — `npx vercel --prod` from the project root (after `npm i -g vercel` or via `npx`); deploys static files and prints the URL.
- **Cloudflare Pages / Surge** — `npx surge ./` produces a `*.surge.sh` URL with no account configuration beyond an email.
- **GitHub Codespaces / local tunnel** — run `python3 -m http.server 8000` then expose port 8000 via Codespaces port-forwarding (or `npx localtunnel --port 8000`) for an ad-hoc shareable link.

GitHub Pages is the most stable option since it lives inside the repository itself; the alternatives above are useful when you only need a quick share link.

## Design notes

- Headline uses **Cormorant Garamond** (serif) with an italic accent on "them?".
- Body copy uses **Inter** for a clean, modern contrast.
- The pink accent (`#ef9aa6`) is used for the italic word, the "not ready" highlight, the divider, the CTA, and the feature icons.
- A left-to-right dark gradient overlay keeps text legible while preserving the photograph.
- Layout is fully responsive; on small screens the overlay shifts to a top-to-bottom darken so the copy stays readable over the image.
