# Personal Website

## Setup

1. Install dependencies: `pnpm i --frozen-lockfile`
2. Run the dev server: `pnpm dev`

## Common Commands

- `pnpm checks` - Runs type, lint, and format checks concurrently
- `pnpm format:check` - Runs format
- `pnpm lint` - Runs lint checks
- `pnpm test` - Runs test scripts
- `pnpm typecheck` - Runs type checks

## Common Issues

### Fonts Not Loading in Dev

**Steps to Fix** [reference](https://www.reddit.com/r/nextjs/comments/1ar1wac/nextfonts_stopped_working_in_dev/)

1. Stop the dev server
2. Close all instances of `localhost` tabs
3. Delete the `.next` directory
4. Restart the dev server
