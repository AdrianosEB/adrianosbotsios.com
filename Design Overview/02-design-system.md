# Design System

Style direction: **Minimal & professional** - clean, lots of whitespace, polished personal-site feel. Tuned for a tech-forward audience (recruiters, collaborators, peers).

## Color palette

Light mode only in v1. Neutral base, one subtle accent.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--bg-subtle` | `#F8F8F7` | Section backgrounds, cards |
| `--text` | `#1A1A1A` | Primary text |
| `--text-muted` | `#5C5C5C` | Dates, metadata, secondary text |
| `--border` | `#E5E5E3` | Dividers, card borders |
| `--accent` | `#5B9BF5` | Links, active nav, hover states - a softer sky-leaning blue |
| `--accent-hover` | `#3478E0` | Hover on accent elements |
| `--accent-soft` | `#DDE9FB` | Subtle blue-tinted backgrounds (optional, for cards / highlights) |
| `--hero-overlay` | `rgba(20, 32, 60, 0.55)` | Dark blue scrim over the hero background photo so white text stays legible |

Rationale: the previous `#2D5BFF` was saturated and dense. The new `#5B9BF5` reads as "light/sky blue" and pairs naturally with a landscape hero photo without competing with it.

### Where blue appears

The "blue style" runs through the page in three coordinated pieces - not just at the top.

1. **Hero background photo** - full-bleed landscape (sky / mountain blues), dark-blue scrim, name in white.
2. **Page background is notably blue** - `<body>` uses a soft blue base color (`#DDE9FB`) with the mountain image (`assets/hero-bg.svg`) layered behind a *blue-tinted* overlay (not white). The two-stop blue overlay (`rgba(221,233,251,0.82)` → `rgba(208,224,246,0.82)`) keeps the page bluish throughout while letting the mountain ghost through. As you scroll, the photo stays fixed, so the same misty blue atmosphere is present behind every section - not just at the top.
3. **Accent blue (`--accent`)** appears in:
   - **Section titles** (`<h2>` for About, Research, Work, Leadership, Education, Skills, Contact) - rendered in `--accent` so each section opens with a clear blue marker.
   - **Links** in body copy (underline on hover, color stays).
   - **Active nav link** - `--accent` text + 2px `--accent` underline, set by scroll-spy.
   - **Section dividers** - top border on each section uses a soft accent-tinted color so the rhythm of section breaks reinforces the blue palette.

Body copy, project titles, project meta, tags, and footer stay neutral so the blue feels deliberate.

### Hero text colors (over the photo)

- `.hero__name` - `#FFFFFF` (white), weight 600.
- `.hero__positioning` - `rgba(255, 255, 255, 0.85)` (slightly soft white).
- `.hero .social a` - `#FFFFFF` with a 1px `rgba(255,255,255,0.4)` bottom border; hover ramps to `--accent`.

## Typography

- **Headings**: `"Inter", -apple-system, system-ui, sans-serif` - weight 600
- **Body**: same family - weight 400, line-height 1.6
- **Mono** (for tech tags, code): `"JetBrains Mono", "SF Mono", monospace`

Load Inter from Google Fonts with `display=swap`. Keep weights minimal: 400, 500, 600.

### Type scale

| Element | Size (desktop) | Size (mobile) |
|---|---|---|
| H1 (name / page title) | 48px / 3rem | 36px / 2.25rem |
| H2 (section / project title) | 28px / 1.75rem | 24px / 1.5rem |
| H3 (subhead) | 18px / 1.125rem | 16px / 1rem |
| Body | 16px / 1rem | 16px / 1rem |
| Small (dates, tags) | 14px / 0.875rem | 14px / 0.875rem |

## Spacing

Use an 8px scale: 8, 16, 24, 32, 48, 64, 96.

- Section vertical padding: 96px desktop, 64px mobile.
- Gap between projects on the Projects page: 64px desktop, 48px mobile.
- Card padding: 24px.

## Layout

- Max content width: 720px for hero / about / contact sections, 860px for the Projects section (so image + text side-by-side breathes).
- Generous side gutters: 16px+ on mobile, auto-margin on desktop.
- Everything left-aligned - no centered paragraphs, no justified text.
- Sections separated by 64–96px of vertical padding, with a thin top border on each new section to mark the transition.

## Components

### Nav bar

- Sticky top, `position: sticky; top: 0`. Height 64px.
- Background: `var(--bg)` with a subtle bottom border that fades in once the page has scrolled.
- Brand "Adrianos Botsios" on the left (clicking scrolls to top).
- Section links on the right: `About · Projects · Contact`.
- External `GitHub ↗` link at the far right.
- **Active section** (scroll-spy): the link matching the section currently in view gets the `nav__link--active` modifier - 2px underline in `--text` color, or accent text. Driven by `IntersectionObserver` (see tech-stack doc).
- **Click**: smooth-scrolls to the target section. Sections need `scroll-margin-top: 80px` so titles aren't hidden under the sticky nav.

### Project block (Projects page)

One per row on desktop, image and text side by side:

```
┌──────────────────┐  Title
│                  │  Short description (2–4 sentences).
│     [Photo]      │  [TAG] [TAG] [TAG]
│                  │  GitHub ↗   Live ↗   Press ↗
└──────────────────┘
```

- Photo: ~480px wide on desktop, 16:10 or 4:3 ratio, 8px radius, 1px `--border`.
- Mobile: photo stacks above text, full-width.
- Title is H2.
- Description: standard body, max ~60ch line length.
- Tag row: mono pills (see Tech tag below).
- Link row: accent-colored, separated by spacing or middle dots.

### Hero

- **Full-bleed background photo** (landscape - sky / mountains / ocean, anything with calm blue tones). Same role the Himalayas shot plays on the reference site.
- File: `assets/hero-bg.jpg` (placeholder until a real photo is dropped in).
- CSS: `background-image: linear-gradient(var(--hero-overlay), var(--hero-overlay)), url('assets/hero-bg.jpg'); background-size: cover; background-position: center;`
- The dark-blue overlay keeps white text readable regardless of the photo's brightness.
- Height: ~80vh on desktop, ~70vh on mobile. Big and atmospheric, not a slab.
- Content sits left-aligned inside the standard container, vertically centered.
- **No CTA button.** Name + positioning + social links are the entire hero.
- Name (`<h1>`) in white, large (3rem desktop / 2.25rem mobile), weight 600.
- Positioning line in soft-white, sitting just under the name.
- Social row: white text links with subtle white-on-white-ish underlines; hover turns them `--accent` blue.
- The sticky nav's `--scrolled` shadow only kicks in once the user scrolls past the hero, so the nav reads cleanly against the photo.

### Portrait (About section)

- Square or circular portrait photo placed alongside the About paragraphs.
- Desktop: photo left (~280px), text right; aligned to the top of the section.
- Mobile: photo stacks above text, ~200px square, centered.
- Border-radius: `9999px` for full circle, or `var(--radius-lg)` for soft-square - pick one and stay consistent.
- 1px `--border` outline so it sits cleanly on the page.
- File: `assets/portrait.jpg` (placeholder until a real photo is dropped in).

### Featured project (Niki only)

- Same image-left, text-right grid as the standard `.project` block, but **everything bumped up**:
  - Image: ~520px wide on desktop (vs 420px on a regular block).
  - Title: 2rem, weight 600.
  - A small **"Featured" badge** in `--accent` color sits above the title - uppercase, mono, letter-spaced - to mark this as the centerpiece.
  - More vertical breathing room (96px gap from the rest of the section).

### Compact project entry (everything except Niki)

- One per row, **text only - no image**.
- Layout: title + role/date metadata on one line, description below, tags + link below that.
- Top border in soft accent (`rgba(91,155,245,0.18)`) separating each item; the last item has no border.
- Padding: 24px 0 per item.
- Grouped under small subheadings (*Research* / *Work* / *Leadership*) rendered as `<h3>` in muted gray, weight 500, uppercase letter-spaced - quiet enough not to compete with section titles.

### Tech tag

- Inline-block, `--bg` background, 1px `--border`, 4px radius.
- Padding: 2px 8px. Font: mono, 12px, uppercase, letter-spacing 0.5px.

### Button

- Solid: `--text` background, white text.
- Ghost: transparent, 1px `--border`, `--text` text.
- Padding: 10px 20px. Radius 6px. Hover: slight darken.

## Micro-interactions

Keep it restrained:

- Links: underline on hover, color stays.
- Buttons: background darkens 8% on hover, no scale/bounce.
- Smooth scroll on every in-page anchor click (CSS `scroll-behavior: smooth`). Browser native - keeps the eased feel users expect on sites like swkang73.github.io.
- Scroll-spy: nav active state updates as you scroll between sections. The `nav__link--active` class transitions `color` and `border-color` over ~150ms so the swap feels glide-y, not jarring.
- Nav bottom-border fades in once `scrollY > 4`, fades out at the top.
- No page-load animations. No parallax. No other scroll-linked effects.

## Accessibility

- Color contrast: all text ≥ 4.5:1 against bg.
- Focus states: 2px `--accent` outline, 2px offset. Do not remove outlines.
- Nav uses `<nav>`, sections use `<section id="...">`, skip-to-main link at top for keyboard users.
- Alt text on every project photo (describe the project, not "image of...").
- Icons have `aria-label`. External links use `rel="noopener"` and an explicit "↗" indicator.
