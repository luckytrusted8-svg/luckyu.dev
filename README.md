# Lucky — Personal Portfolio

A premium, dark-themed personal portfolio built with React 19, Vite, TypeScript, and Tailwind CSS v4. All content (about, skills, services, projects, experience, testimonials) is authored in Markdown under `src/content/` and rendered through a typed content loader — no backend, no database, no CMS.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion — page-load and scroll-reveal animations
- React Router DOM — client-side routing (`/` and `/projects/:slug`)
- Lucide React — icons
- Lenis — smooth scrolling, including smooth anchor navigation
- React Markdown + Gray Matter — Markdown content pipeline

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`.

## Editing content

Everything you'd normally put in a CMS lives in `src/content/`:

- `about.md` — hero stats + bio (frontmatter fields + body)
- `skills.md` — skill categories and levels (0–100)
- `services/*.md` — one file per service card (`icon` field maps to a Lucide icon name)
- `projects/*.md` — one file per project; the body becomes the case-study page at `/projects/<slug>` (the slug is the filename, minus any leading `NN-` ordering prefix)
- `experience/*.md` — timeline entries (`type: work` or `type: education`)
- `testimonials/*.md` — slider entries

Add a new project by dropping a new Markdown file into `src/content/projects/` with the same frontmatter shape as an existing one — no code changes needed.

## Replacing placeholders

- **Photo**: the hero currently uses a gradient monogram placeholder (`src/components/sections/Hero.tsx`) — swap in an `<img>` once you have a photo you like.
- **Project thumbnails**: `src/components/ui/ProjectThumb.tsx` renders a stylized CSS "browser mockup" per project accent color, so the site works without screenshots. Swap in real screenshots by replacing this component with an `<img>` if/when you have them.
- **Resume**: add your CV at `public/resume.pdf` — the sidebar's "Download CV" button already points there.
- **Social links / contact details**: `src/lib/nav.ts` (social links) and `src/components/sections/Contact.tsx` (email/phone/location).

## Folder structure

```
src/
  components/
    layout/     Sidebar, MobileNav, MainLayout, Footer
    sections/   Hero, About, Services, Skills, Projects, Experience, Testimonials, Contact
    ui/         Button, Reveal, SectionHeading, Tag, ProjectThumb, StatusTerminal
  pages/        Home, ProjectDetail
  hooks/        useLenis, useActiveSection, useMediaQuery
  lib/          content.ts (Markdown loader), types.ts, nav.ts
  animations/   shared Framer Motion variants
  content/      all Markdown content
public/
  images/, icons/, resume.pdf
```

## Notes

- The contact form has no backend by design — submitting it opens the visitor's email client with the message pre-filled via a `mailto:` link. Nothing is stored or sent anywhere else.
- Respects `prefers-reduced-motion` (Lenis smooth-scroll and CSS animations both fall back to instant/no motion).
