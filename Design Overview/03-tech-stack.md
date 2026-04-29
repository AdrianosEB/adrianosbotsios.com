# Tech Stack & Deployment

## Stack

Plain **HTML + CSS + JavaScript**. Single page, no framework, no build step.

Why not React/Next/Astro:
- Nothing on the site is dynamic - it's a static document.
- No build step means every commit is the site. Easier to debug, faster to iterate.
- GitHub Pages serves static files natively - zero config.

### File layout

```
/
├── index.html                Single page: hero, about, projects, contact
├── styles.css                CSS custom properties (tokens from 02), all components
├── script.js                 Sticky-nav shadow + scroll-spy nav active state
├── assets/
│   ├── favicon.svg
│   ├── hero-bg.jpg           Full-bleed background photo for the hero (landscape - placeholder SVG for now)
│   ├── portrait.jpg          Portrait photo for the About section (placeholder SVG for now)
│   ├── og-image.png          Open Graph preview (1200x630) - optional, add later
│   └── projects/             Project photos (placeholders for now)
│       ├── placeholder.svg   Shared placeholder used by every block until real images arrive
│       ├── niki.jpg
│       ├── ai-agents.jpg
│       ├── vla.jpg
│       ├── coe.jpg
│       ├── intracom.jpg
│       ├── cosmote.jpg
│       ├── smartsort.jpg
│       ├── smart-city.jpg
│       ├── ai-ethics.jpg
│       ├── grading-platform.jpg
│       └── harvardx.jpg
└── README.md                 Short: what this is, how to run locally
```

For placeholders during development, every project block points at `placeholder.svg`. When a real photo arrives, drop it into `assets/projects/` and update that one `<img src=...>` in `index.html`.

Local preview: open `index.html` directly in a browser (works on `file://`), or `python3 -m http.server` from the repo root and visit `http://localhost:8000`.

## JavaScript behavior (`script.js`)

Two small responsibilities, no library:

1. **Sticky-nav border fade** - add `nav--scrolled` class to the `<header>` once `window.scrollY > 4`, remove it when at the top.
2. **Scroll-spy active link** - use `IntersectionObserver` on each `<section id="...">`. When a section is the most visible in the viewport, add `nav__link--active` to the matching `<a href="#section-id">` and remove it from the others. Also call `history.replaceState` to keep the URL hash in sync (no scroll jump).

Smooth scrolling itself is handled by CSS:

```css
html { scroll-behavior: smooth; }
section { scroll-margin-top: 80px; }   /* offset for the sticky nav */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

## SEO & metadata

- `<title>`: "Adrianos Botsios"
- `<meta name="description">`: one sentence, ~150 chars. Mentions Brown CS & Economics and the project showcase.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) so shared links render a preview card.
- Favicon as SVG (scales on all devices).

## GitHub Pages deployment

Two paths, pick one:

### Option A: User site (recommended if the GitHub username is `adrianosbotsios`)
- Repo name: `adrianosbotsios.github.io`
- Push to `main` → site lives at `https://adrianosbotsios.github.io` automatically.

### Option B: Project site
- Repo name: anything (e.g. `personal-site`)
- Settings → Pages → Source: `main` branch, `/` root.
- Site lives at `https://<username>.github.io/<repo-name>/`.

### Custom domain (optional, later)
- Add a `CNAME` file with the domain.
- Configure DNS A/AAAA or CNAME records per GitHub's docs.
- Enable "Enforce HTTPS" in repo settings.

## Performance budget

- HTML + CSS + JS combined < 100KB.
- Project images: each ≤ 200KB, served at display size, lazy-loaded (`loading="lazy"`) below the fold.
- No external JS libraries. No web fonts beyond Inter + JetBrains Mono (subset to latin).
- Lighthouse targets: Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100.

## Browser support

Last 2 versions of Chrome, Safari, Firefox, Edge. No IE. No polyfills. `IntersectionObserver` is supported in all of these natively.
