# AGENTS.md

## Task Completion Requirements

- **ONLY use `pnpm`** - never npm/yarn/bun
- All of `pnpm run format:check`, `pnpm run lint`, and `pnpm run typecheck` must pass before considering tasks completed.
- **NEVER run build commands** (`pnpm run build`)

## Package Roles

- `apps/web/` - Web application
- `packages/studio/` - Sanity CMS studio

## Code Priorities

1. Performance first.
2. Reliability first.
3. Keep behavior predictable under load and during failures.

If a tradeoff is required, choose correctness and robustness over short-term convenience.

## Maintainability

- Long term maintainability is a core priority.
- Before adding new functionality, first check if there are shared logic that can be extracted to a separate module.
- Duplicate logic across multiple files is a code smell and should be avoided.
- Don't be afraid to change existing code.
- Don't take shortcuts by just adding local logic to solve a problem.

## Design Context

- `PRODUCT.md` (project root) holds the design strategy: register (`brand`), users,
  product purpose, brand personality, anti-references, design principles, and a11y bar.
  Read it before any UI/design work.
- **Register:** brand — this is a personal site/portfolio where design is the product.
- **Personality:** precise, understated, crafted; emotional target is calm & refined.
- **Visual system:** Fraunces (variable serif) for display via `--font-fraunces`, Sora
  for body. Restrained color on OKLCH tokens (dark/light); the accent is a forest green
  (`--accent`, hue ~152) used as punctuation/structure (timeline spine + nodes, link
  hover, focus), never as a field. Moved off the prior Orbitron sci-fi direction.
- **A11y bar:** WCAG 2.2 AA, with extra care on reduced-motion.
