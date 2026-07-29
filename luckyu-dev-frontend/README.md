# Luckyu.dev — Frontend (Next.js 15)

## Stack

Next.js **15.5.10** · React **19.2.8** · TypeScript · Tailwind CSS v4 ·
shadcn/ui (hand-configured) · Framer Motion · GSAP · TanStack Query ·
React Hook Form + Zod · axios (Sanctum SPA auth) · Lucide React

## ⚠️ Security note

`package.json` pins `next` and `react` with a **caret range** (`^15.5.10`,
`^19.2.8`), not an exact version — `npm install` will resolve to the latest
compatible patch automatically (currently resolves to **15.5.22**), which
matters because Next.js now ships monthly security patches. Do **not**
pin to an exact old patch version; that defeats the point. Two relevant
advisories worth knowing about on the 15.x line:

- **CVE-2025-66478** (CVSS 10.0, critical RCE) — fixed in 15.5.7+.
- Next.js's first formal **monthly security release** (July 2026) fixed
  4 high + 5 medium severity issues — fixed in 15.5.21+.

Run `npm outdated next` periodically and re-`npm install` to stay on the
latest patch of the 15.5.x line; don't jump to Next 16 without deliberately
reviewing its breaking changes first.

`npm audit` will still report high-severity issues in `postcss`/`sharp` —
these are bundled transitive dependencies inside `next` itself as of this
writing, not something fixable by pinning versions in this project without
breaking the build. Re-run `npm audit` periodically; it will clear once
Next.js ships a release with updated bundled deps.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Requires normal internet access for two things this sandbox could not
verify directly: `next/font/google` fetching Sora & Plus Jakarta Sans at
build time, and (optionally) `npx shadcn@latest add <component>` reaching
`ui.shadcn.com`.

## Why shadcn/ui components are hand-written here

The shadcn CLI (`npx shadcn@latest init`) needs to reach `ui.shadcn.com`,
which wasn't reachable from the sandbox this scaffold was built in. So
`components.json` is configured correctly and a handful of primitives
(`Button`, `Card`, `Input`, `Textarea`, `Label`) were authored by hand
following the exact shadcn convention (cva variants, `cn()` helper, Radix
primitives). Once you have normal network access, `npx shadcn@latest add
dialog select tabs tooltip` etc. will drop right into `src/components/ui/`
alongside these.

## Architecture conventions

- **Feature-based, not type-based.** Each domain (`portfolio`, `blog`,
  `testimonials`, `contact`, `auth`) owns its `api/` (fetch functions +
  TanStack Query hooks) and `types/` under `src/features/*`. UI
  components stay in `src/components/{sections,shared,layout,admin}`.
- **Server Components fetch for SEO-critical initial render**; TanStack
  Query hooks (`usePortfolios`, etc.) take over for client-side
  interactivity (filtering, admin mutations) — see the comment in
  `src/features/portfolio/api/use-portfolio.ts`.
- **Animation ownership split, on purpose:** Framer Motion
  (`RevealOnScroll`) owns one-shot scroll-triggered reveals; GSAP
  (`useFloatingIcons`) owns continuous/looping interactions. Don't mix the
  two for the same element.
- **`ContactForm`** (`src/components/shared/contact-form.tsx`) is the
  reference implementation for React Hook Form + Zod + TanStack Query
  mutation + shadcn UI wiring — copy its shape for the admin dashboard
  forms.
- Design tokens (brand colors, radius, gradient) live in
  `src/app/globals.css` under `@theme inline`, sourced from the logo's
  sampled hex values — see `project-plan.md` for the extraction method.
  Don't hand-tune them without re-checking that source.

## Scripts

```bash
npm run dev          # start dev server (Turbopack)
npm run build
npm run lint
npm run type-check    # tsc --noEmit
npm run format        # prettier --write .
```
