# AGENTS.md

## Task Completion Requirements

- **ONLY use `pnpm`** - never npm/yarn/bun
- All of `pnpm run format:check`, `pnpm run lint`, and `pnpm run typecheck` must pass before considering tasks completed.
- **NEVER run build commands** (`pnpm run build`)

## Package Roles

- `packages/studio/` - Sanity CMS studio
- `packages/web/` - Next.js application

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

## Known Issues

**Font Loading in Development**: If fonts fail to load:

1. Stop dev server
2. Close all localhost tabs
3. Delete `.next` directory
4. Restart dev server
