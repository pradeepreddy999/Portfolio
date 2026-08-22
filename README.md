# Portfolio

Personal portfolio site for Pradeep Palavalli — Software Engineer.

Built with [TanStack Start](https://tanstack.com/start), React 19, Tailwind CSS v4, and shadcn/ui. Deployed as a static site to GitHub Pages via `.github/workflows/deploy.yml`.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Building for Production

```bash
pnpm build
pnpm preview
```

The GitHub Pages deploy only uploads `dist/client` — the site must keep working as a **fully static** bundle (no server-only features like server functions that require a Node runtime).

## Testing

```bash
pnpm test
```

Uses [Vitest](https://vitest.dev/) and Testing Library.

## Linting & Formatting

```bash
pnpm lint
pnpm format
pnpm check
```

Eslint is configured via [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint); formatting via Prettier.

## Routing

Uses [TanStack Router](https://tanstack.com/router) file-based routing — routes live in `src/routes`. Run `pnpm generate-routes` if `src/routeTree.gen.ts` needs to be regenerated manually.

## Content

Project and blog content live in `src/lib/data.ts` and `src/lib/blog.ts` as plain TypeScript arrays — edit these directly to add/update entries.
