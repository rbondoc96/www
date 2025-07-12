# Personal Website

## Setup

1. Install dependencies: `pnpm i --frozen-lockfile`
2. Run the dev server: `pnpm dev`

## Common Commands

* `pnpm checks` - Runs type, linting, and formatting checks concurrently
* `pnpm format` - Runs Prettier code style checks
* `pnpm lint` - Runs ESLint checks
* `pnpm stan` - Runs the TypeScript compiler as a type checker
* `pnpm test` - Runs test scripts

## Common Issues

### Fonts Not Loading in Dev

**Steps to Fix** [reference](https://www.reddit.com/r/nextjs/comments/1ar1wac/nextfonts_stopped_working_in_dev/)

1. Stop the dev server
2. Close all instances of `localhost` tabs
3. Delete the `.next` directory
4. Restart the dev server
