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

## Design notes

- Headline uses **Cormorant Garamond** (serif) with an italic accent on "them?".
- Body copy uses **Inter** for a clean, modern contrast.
- The pink accent (`#ef9aa6`) is used for the italic word, the "not ready" highlight, the divider, the CTA, and the feature icons.
- A left-to-right dark gradient overlay keeps text legible while preserving the photograph.
- Layout is fully responsive; on small screens the overlay shifts to a top-to-bottom darken so the copy stays readable over the image.
