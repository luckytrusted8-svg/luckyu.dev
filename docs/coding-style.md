# Coding Style

- Functional components, named exports, colocated by responsibility (`layout` / `sections` / `ui`).
- Content and copy never hardcoded in components beyond structural labels — anything editorial lives in Markdown.
- Tailwind utility classes composed with `cn()` (`clsx` + `tailwind-merge`) to avoid class-conflict bugs.
- Types for all content shapes live in `src/lib/types.ts`; loaders in `content.ts` are the only place that casts frontmatter into those types.
