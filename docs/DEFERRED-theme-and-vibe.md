# Deferred — Theme & Vibe Revisit (font + accent)

_Written 2026-06-21. Deferred deliberately; do not action until the base design is
fleshed out (Projects page, long-form/blog reading layout, real monogram)._

## Why this is parked

Seth's notes (see `HANDOFF.local.md`) push back on two of yesterday's core decisions:

- **Display font** — the old sci-fi-ish face (Orbitron) had more personality, read less
  generic. Current system uses **Fraunces** (editorial serif).
- **Accent** — preferred the red/salmon/crimson accent over the current **forest green**.
- (He liked the timeline redesign — keep it.)

We decided **not** to chase these yet. Reason: two of three core surfaces (Projects,
Blog) are still un-redesigned. Tuning accent/font against only Home + Experience means
judging in a vacuum and re-litigating the moment more surface lands. Build the base out
first, then evaluate theme against real content.

## Key framing for when we return

The two requested changes are **orthogonal to the rules that make `DESIGN.md` good.** The
discipline lives in the Punctuation Rule (accent is structure/punctuation, never a
field), Flat-by-Default, No-Eyebrow, and the anti-AI-portfolio stance. None of those care
_which_ hue the accent is or _which_ face sets the display.

- **The salmon mistake was never the hue — it was salmon flooded as pill fills.**
  `DESIGN.md` says so explicitly ("the original salmon-pill mistake, now forbidden in any
  hue"). A crimson/red accent used as spine / node / hover / focus is fully legal under
  the Punctuation Rule. So Seth's accent preference can likely be honored cheaply without
  weakening anything.

### Accent (green → warm red/crimson) — low risk

- ~3 tokens in `styles/globals.css` (light, dark/bright, hover) + the color block in
  `DESIGN.md` and `.impeccable/design.json`.
- **One real constraint: AA contrast must be re-verified, not eyeballed.** Forest green
  was tuned at L≈0.52 to hold ≥4.5:1 as text on paper, brightening to ≈0.74 on black.
  Red/crimson has a different lightness-at-chroma curve (reds usually need lower L for the
  same contrast on white, and go muddy if chroma is pushed too hard). Pick L/C so it
  passes in **both** themes.

### Display font — the harder, more subjective call

- Going back to **Orbitron** fights the entire "Composed Page" editorial register; that's
  a north-star rewrite, not a tune.
- Third-option routes that add personality _within_ the editorial frame:
  1. **Push Fraunces's own axes** (`wght`, `opsz`, plus `SOFT` and `WONK`). Cranking WONK
     - weight at display sizes reads far less "default serif." Cheapest; keeps the family.
  2. **Swap the display face** to a distinctive non-sci-fi display type (high-contrast
     didone, quirky humanist, or characterful grotesque for headlines only) while Sora
     keeps reading. More work; needs a real side-by-side.
- When we evaluate, show option 1/2 next to a sci-fi-ish control so Seth's "cooler"
  comparison is honest rather than asserted.

## How to evaluate (agreed method)

Use the configured **`$impeccable live`** mode to iterate accent + display variants in the
real running app, once the base design has more surface. Build a small matrix:

- **Accent:** forest green (control) · crimson · warm red — all AA-verified, all under the
  Punctuation Rule.
- **Display:** Fraunces as-is · Fraunces WONK/heavier · one distinctive non-serif control.

Nothing gets written to `DESIGN.md` / `design.json` until a variant is chosen.

## Prerequisite work (flesh out the base first)

From `HANDOFF.local.md` "Next up":

1. **Projects page** — apply the system (`src/features/projects/ProjectsPage.tsx`).
2. **Blog / long-read surface** — design the reading layout (65–75ch measure, Sora body,
   Fraunces headings).
3. **Monogram / mark** — replace the "Rodrigo Bondoc" wordmark; slots into the
   `site-logo` view transition.

Revisit this doc once those exist.
