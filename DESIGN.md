---
name: Rodrigo Bondoc
description: Personal site — calm, editorial, type-led portfolio with a forest-green accent.
colors:
  ink: "oklch(0.195 0.044 264.6)"
  paper: "oklch(1 0 0)"
  forest-pine: "oklch(0.52 0.13 152)"
  forest-pine-hover: "oklch(0.45 0.13 152)"
  forest-pine-bright: "oklch(0.74 0.15 152)"
  surface-muted: "oklch(0.958 0.012 259.7)"
  hairline: "oklch(0.965 0.012 259.7)"
  muted-ink: "oklch(0.44 0.04 262.2)"
  night: "oklch(0 0 0)"
  snow: "oklch(0.985 0.017 259.7)"
  card-night: "oklch(0.187 0.032 264.6)"
typography:
  display:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces Variable, Georgia, serif"
    fontSize: "clamp(1.5rem, 4vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Sora Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Sora Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.025em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
components:
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  badge-accent:
    backgroundColor: "{colors.forest-pine}"
    textColor: "{colors.snow}"
    rounded: "{rounded.md}"
    padding: "2px 10px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Rodrigo Bondoc

## 1. Overview

**Creative North Star: "The Composed Page"**

This is a personal site treated like a well-set magazine page: Fraunces carries the
headline voice, Sora handles the reading, and everything else gets out of the way. The
register is **brand** — design is the product — but the personality is precise,
understated, and crafted. Confidence comes from restraint and from the quality of the
type and spacing, not from volume. A single forest-green accent is the only color with a
voice; the rest is ink on paper.

Density is low and deliberate. Whitespace is structural, not leftover. The page favors a
narrow center column, a tight type scale, and a calm vertical rhythm — a recruiter forms
a confident impression in one screen, and an engineer can read a project or post to the
end without fatigue. The future blog is a first-class case: long-form reading must stay
restful.

This system explicitly rejects the generic AI-portfolio look — cream backgrounds, tiny
tracked-uppercase eyebrows over every section, identical icon-heading-text card grids,
and hero-metric blocks. It rejects clutter and maximalism, corporate sterility, and
over-animated gimmickry. When in doubt, it removes rather than adds.

**Key Characteristics:**

- Editorial, type-led, calm — Fraunces display over Sora body.
- Ink-and-paper neutrals with one forest-green accent used as punctuation/structure.
- Low density, generous and intentional whitespace.
- Quiet, purposeful motion with a reduced-motion path.
- Light and dark themes, contrast verified in both (WCAG 2.2 AA).

## 2. Colors

A near-monochrome ink-and-paper foundation with exactly one chromatic voice: a deep
forest green.

### Primary

- **Forest Pine** (`oklch(0.52 0.13 152)`): The single accent. Used as _punctuation and
  structure_, never as a field — the timeline spine and its nodes, link hover, the ↗
  external-link arrow on hover, focus rings, and the active theme-switch state. On dark
  surfaces it brightens to **Forest Pine Bright** (`oklch(0.74 0.15 152)`) so it pops on
  black and still passes contrast as text. Hover deepens to `oklch(0.45 0.13 152)`.

### Neutral

- **Ink** (`oklch(0.195 0.044 264.6)`): Primary text and the `primary` surface in light
  mode. A blue-black, never pure `#000` on paper.
- **Paper** (`oklch(1 0 0)`): The light background and card surface. A true white at
  chroma 0 — not a warm cream.
- **Muted Ink** (`oklch(0.44 0.04 262.2)`): Secondary text — periods, descriptions,
  inline tags. Darkened from the legacy value to hold ≥4.5:1 on paper.
- **Surface Muted** (`oklch(0.958 0.012 259.7)`): The `secondary` / `muted` fill for
  quiet chips and resting states.
- **Hairline** (`oklch(0.965 0.012 259.7)`): Borders, inputs, dividers. 1px only.
- **Night** (`oklch(0 0 0)`): Dark-mode background — true black.
- **Snow** (`oklch(0.985 0.017 259.7)`): Dark-mode text and the light-on-dark `primary`.
- **Card Night** (`oklch(0.187 0.032 264.6)`): Dark-mode card/popover surface, one step
  off black for tonal separation.

### Named Rules

**The Punctuation Rule.** Forest Pine is structure and accent, never a fill. It may color
a 1px spine, a node, an icon, a focus ring, or a hover — it must never tint a row of
chips or back a block of content. Its scarcity is the entire point; the moment green
becomes a field, the page is wrong.

**The True-Neutral Rule.** The paper is white at chroma 0 and the ink is a near-black
blue. Never warm the background toward cream/sand/parchment — warmth, if any, comes from
type and the green, not the page.

## 3. Typography

**Display Font:** Fraunces Variable (fallback Georgia, serif)
**Body Font:** Sora Variable (fallback ui-sans-serif, system-ui, sans-serif)

**Character:** A high-contrast literary serif paired with a clean geometric sans on a
true contrast axis. Fraunces uses the browser's default optical sizing — contrast ramps
_up_ at display sizes (dramatic, characterful, never "Times New Roman") and _down_ at
small sizes so the wordmark stays crisp. Sora keeps reading neutral and modern.

### Hierarchy

- **Display** (Fraunces 500, `clamp(2.75rem, 7vw, 5rem)`, lh 1.05, ls -0.02em): The name
  as hero on the landing, and page titles. `text-wrap: balance`.
- **Headline** (Fraunces 500, `clamp(1.5rem, 4vw, 1.875rem)`, ls -0.02em): Company names
  on the timeline, section-level serif headings.
- **Body** (Sora 400, `1rem`, lh 1.5): Prose and descriptions. Cap measure at ~65–75ch
  (`max-w-prose`).
- **Label** (Sora 400, `0.75rem`, ls 0.025em): Inline metadata — tag lists, dates,
  footer. Muted Ink, sentence case.

### Named Rules

**The Two-Voice Rule.** Fraunces speaks (names, titles); Sora reads (everything else).
Don't set body copy in the serif or headlines in the sans. Two families, two jobs.

**The No-Eyebrow Rule.** No tiny tracked-uppercase kicker above sections. Hierarchy comes
from the serif/sans contrast and size, not from a 2023-era all-caps label.

## 4. Elevation

Flat by default. Depth is conveyed through tonal layering (Card Night sits one step off
black; Surface Muted sits just off paper) and through the 1px Hairline, not through
shadows. The only structural depth cue is the forest-green timeline spine.

### Shadow Vocabulary

- **Card rest** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`): The single soft shadow on
  `card`. Subtle, ambient, never a hard drop shadow.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. If something needs separation,
reach for a tonal step or a 1px hairline before a shadow. Never pair a 1px border with a
wide soft drop shadow on the same element (the ghost-card tell).

## 5. Components

### Buttons

- **Shape:** Gently rounded — `md` (8px) for text buttons, `lg` (10px) for icon buttons.
- **Text Button:** Ink text, no fill; hover adds a 1px underline (`hover:underline
decoration-1`). The default interactive control — quiet and editorial.
- **Icon Button:** Transparent, square, neutral by default; `accent` theme shifts color
  toward Forest Pine on hover. Used for the GitHub/LinkedIn marks and the theme switch.
- **Hover / Focus:** Color/underline transitions ~300–400ms. Focus shows a visible ring
  (`ring`) — never remove focus visibility.

### Chips / Tags

- **Default treatment is text, not chips.** Tag lists render as Muted Ink inline text
  separated by middots (`AI Integration · JavaScript · TypeScript …`), never as a grid of
  filled pills.
- **Badge (accent)** exists for rare emphasis only: Forest Pine fill, Snow text, `md`
  radius. Use sparingly; it is not the default tag style and must not appear in rows.

### Cards / Containers

- **Corner Style:** `xl` (14px) — the upper bound. Never exceed 16px on a card.
- **Background:** Paper (light) / Card Night (dark).
- **Shadow Strategy:** Card rest only (see Elevation). Flat otherwise.
- **Border:** 1px Hairline.
- **Internal Padding:** 24px (`md` spacing).

### Navigation

- **Style:** Sora label-size links separated by middots; the centered brand is the
  Fraunces wordmark "Rodrigo Bondoc".
- **States:** Default Ink; hover underlines (offset 4px). The brand morphs into the
  landing hero via a `site-logo` view transition.
- **Mobile:** A top `Sheet` (Radix Dialog) triggered by a menu icon; links stack
  vertically. The sheet carries an sr-only title and opts out of a description.

### Timeline (signature)

The Experience page's defining pattern. A single column with a left **forest-green spine**
(`border-l` at Forest Pine /30) and solid Forest Pine **nodes** (ringed in the background
color to punch through the line). Each entry: a Fraunces company header (Headline) with a
hover ↗ arrow that greens and nudges up-right, Sora role/period rows, Muted Ink
description at `max-w-prose`, and a Muted Ink inline tag list. Company and roles are
tightly coupled — no giant left-column / right-column split.

## 6. Do's and Don'ts

### Do:

- **Do** keep Forest Pine to punctuation and structure (spine, node, icon, focus, hover);
  see The Punctuation Rule.
- **Do** keep the page true ink-on-paper; white at chroma 0, blue-black ink.
- **Do** set names and titles in Fraunces, everything readable in Sora.
- **Do** render tag/metadata lists as middot-separated Muted Ink text.
- **Do** verify body text ≥4.5:1 (large ≥3:1) in _both_ themes, and give every animation
  a `prefers-reduced-motion: reduce` alternative.
- **Do** cap card radius at 14px and keep surfaces flat at rest.

### Don't:

- **Don't** ship the generic AI-portfolio look: cream/sand backgrounds, tiny
  tracked-uppercase eyebrows over every section, identical icon-heading-text card grids,
  or hero-metric blocks.
- **Don't** let the page get cluttered or maximalist — remove before you add.
- **Don't** feel corporate or sterile; keep a point of view.
- **Don't** over-animate: no scroll-jacking, no gratuitous or gimmicky motion.
- **Don't** flood the accent as fills — no rows of green pills (the original salmon-pill
  mistake, now forbidden in any hue).
- **Don't** pair a 1px border with a wide soft drop shadow on the same element.
- **Don't** exceed -0.02em tracking on the serif display, or round cards past 16px.
