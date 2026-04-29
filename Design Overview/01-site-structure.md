# Site Structure

**Single-page site.** Everything lives in one long `index.html` that you scroll through top to bottom. The sticky nav at the top has links to each section; clicking a link smooth-scrolls down to that section, and the link for the section currently in view is highlighted automatically (scroll-spy).

## Why single-page

- All the content fits comfortably in one scroll - there's no reason to split.
- Navigation feels instant: no page loads, just smooth in-page scrolling.
- Easy to deploy on GitHub Pages, easy to share specific sections via `#hash` URLs.

## Page sections (top to bottom)

The page is laid out as one continuous scroll. Each section has an `id` so the nav can link to it.

1. **Hero** (`#top` - implicit, top of page)
   - **Full-bleed background photo** (landscape with calm blue tones - like the Himalayas shot on swkang73.github.io). Stored at `assets/hero-bg.jpg`. A dark-blue scrim sits over the photo so the white text on top stays readable.
   - Hero is roughly **80vh tall** so it fills most of the screen on first load.
   - **Name** (large, white) - sits left-aligned over the photo.
   - One-line positioning: *"Studying Computer Science and Economics at Brown."* - soft-white under the name.
   - Social row: GitHub, LinkedIn, Email - white text links, hover to light blue.
   - **No CTA button** - keep the hero quiet. Visitors scroll naturally; the nav handles "go to projects."

2. **About** (`#about`)
   - **Portrait photo** + 2–3 short paragraphs side by side on desktop, stacked on mobile.
   - Photo: roughly 280px square, soft-rounded corners (or full circle), placed to the left of the text.
   - Paragraphs: conversational, not a resume rewrite.

3. **Projects** (`#projects`) - single combined section
   - **Featured: Niki the Humanoid Robot.** Renders as a large block with a prominent photo, larger title, and a "Featured" badge. This is the visual centerpiece of the page.
   - **Other projects** (everything else from the resume - research, work, leadership) - render as compact, text-only list items grouped under small subheadings: *Research*, *Work*, *Leadership*. Each entry has just title + role/date · location + 1–2 sentence description + tech tags + GitHub link (where one exists). No photos for these - they don't really have good images and a chill text list reads better than a wall of placeholders.
   - The grouping (Research/Work/Leadership) preserves the CV organization, but the visual weight is decisively on Niki.

4. **Education** (`#education`)
   - Short text block: school, degree, GPA, expected graduation, relevant coursework, on-campus activities.

5. **Skills** (`#skills`)
   - Categorized lists: **Languages**, **Frameworks / Tools**, **Machine Learning**.
   - Compact, no images.

6. **Contact** (`#contact`)
   - Email, GitHub, LinkedIn as text links.
   - Followed immediately by the footer ("Built with HTML, CSS, JS · Back to top").

## Navigation

Sticky top nav, present throughout the scroll:

- **Brand** on the left: "Adrianos Botsios" - clicking it scrolls back to the top.
- **Section links** on the right: `About · Projects · Education · Skills · Contact`.
- **External link**: `GitHub ↗` at the far right.

### Behaviors

- **Click**: smooth-scrolls to the target section (CSS `scroll-behavior: smooth` + scroll-margin offset for the sticky nav so the section title isn't hidden under it).
- **Scroll-spy**: as you scroll, the nav link for the section currently in view becomes "active" (accent color or underline). Driven by `IntersectionObserver` in `script.js`.
- **Hash sync**: when a section becomes active, optionally update the URL hash (`history.replaceState`) so users can copy a link to a specific section.
- **Reduced motion**: respect `prefers-reduced-motion` and disable smooth scroll for those users.

## Responsive breakpoints

- Mobile: < 640px - single column, project image stacks above text, nav wraps or collapses.
- Tablet: 640–880px - nav stays inline, project block stays stacked-or-split based on width.
- Desktop: > 880px - full layout, project block image + text side by side, content max-width ~860px.

## What we are NOT building (keep it simple)

- No multi-page routing - everything is one page.
- No CMS, no blog, no backend.
- No React/Next.js - plain HTML/CSS/JS. No build step.
- No dark mode toggle in v1.
- No analytics in v1.
- No page-load animations or scroll-linked parallax. Scroll-spy is the only scroll-driven behavior.
