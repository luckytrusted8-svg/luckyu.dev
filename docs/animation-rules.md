# Animation Rules

- Scroll reveals use `Reveal` (single items) or `staggerContainer` + `fadeUp` (grids/lists) from `src/animations/variants.ts` — reused everywhere instead of one-off inline variants.
- `viewport={{ once: true }}` on all reveals — content animates in once, never re-triggers on scroll-back.
- Hover feedback is a small `y: -2` to `-6` lift, never scale-and-glow together.
- Lenis (`useLenis`) provides both smooth wheel scroll and smooth in-page anchor navigation (intercepts `a[href^="#"]` clicks); disabled entirely under `prefers-reduced-motion`.
