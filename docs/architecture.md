# Architecture

- `src/lib/content.ts` uses `import.meta.glob` to eagerly load every Markdown file under `src/content/**` as raw text, then parses frontmatter + body with `gray-matter`. Each content type has a typed getter (`getAbout`, `getSkills`, `getServices`, `getProjects`, `getExperience`, `getTestimonials`).
- Sections under `src/components/sections/` call these getters directly (they run at module-eval time, so this is effectively static-site data with zero network requests).
- Routing is minimal: `/` renders the one-page scroll experience, `/projects/:slug` renders a case-study page via `ProjectDetail.tsx`, which pulls the matching entry from `getProjectBySlug`.
- `MainLayout` renders the fixed `Sidebar` (desktop) / `MobileNav` (drawer) once, so both routes share navigation.
