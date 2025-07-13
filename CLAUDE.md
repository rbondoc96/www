# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: pnpm (required - lockfile present)
**Structure**: Monorepo with PNPM workspaces
- `packages/web/` - Next.js application
- `packages/studio/` - Sanity CMS studio

**Development Commands**:
- `pnpm i --frozen-lockfile` - Install dependencies for all workspaces
- `pnpm dev` - Start Next.js development server
- `pnpm dev:studio` - Start Sanity Studio development server
- `pnpm build` - Build all packages for production
- `pnpm build:web` - Build only Next.js app
- `pnpm build:studio` - Build only Sanity Studio
- `pnpm start` - Start Next.js production server

**Quality Checks**:
- `pnpm checks` - Run all checks concurrently (TypeScript, ESLint, Prettier)
- `pnpm stan` - TypeScript type checking (use this for quick type validation)
- `pnpm lint` - ESLint checks
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm format` - Check Prettier formatting
- `pnpm format:fix` - Auto-fix Prettier formatting
- `pnpm test` - Run tests with Vitest

## Architecture

**Framework**: Next.js 15 with App Router
- TypeScript with strict configuration
- React 19
- Tailwind CSS v4 with custom SCSS globals
- PostHog analytics integration
- Theme switching via next-themes

**Key Directories**:
- `packages/web/src/app/` - Next.js App Router pages and layouts
- `packages/web/src/components/` - Reusable UI components organized by type (buttons/, ui/)
- `packages/web/src/analytics/` - PostHog analytics wrapper components
- `packages/web/src/utilities/` - Shared utility functions and environment configuration
- `packages/studio/` - Sanity CMS configuration and schemas

**Import Paths**: Uses `@/*` alias for `src/*` imports

**Styling**:
- Tailwind CSS with custom configuration
- SCSS globals in `packages/web/src/app/ui/globals.scss`
- Component variants via class-variance-authority
- Radix UI components for primitives

**Testing**: Vitest with React Testing Library and jsdom

## Known Issues

**Font Loading in Development**: If fonts fail to load:
1. Stop dev server
2. Close all localhost tabs
3. Delete `.next` directory
4. Restart dev server