# Design System

## Color tokens
- `--color-bg` #080B17 — page background
- `--color-bg-elevated` #0C1024 — headers, terminal card
- `--color-surface` #10142A — cards
- `--color-surface-hover` #151A35
- `--color-border` #1E2440
- `--color-primary` #8B5CF6 (purple)
- `--color-secondary` #3B82F6 (blue)
- `--color-accent` #EC4899 (pink)
- `--color-text` #F8FAFC
- `--color-muted` #94A3B8
- `--color-muted-dim` #5B6785

All tokens are defined once in `src/index.css` under `@theme` (Tailwind v4), which auto-generates matching utility classes (`bg-primary`, `text-muted`, `border-border`, etc).

## Type
- Display: **Sora** (headings, tight tracking) — `font-display`
- Body: **Inter** — `font-body`
- Utility/mono: **JetBrains Mono** (eyebrows, tags, code) — `font-mono`

## Signature element
The hero's "currently-building.sh" terminal card is the one deliberate, memorable risk in the design — it reflects Lucky's actual current build status instead of a generic "N years of experience" stat card, and ties the developer-tool aesthetic (mono type, blinking cursor) to the subject matter.

## Motion
Fade-up on scroll reveal, spring-based active nav pill, hover-lift on cards/buttons. Kept restrained — no parallax overload, no simultaneous competing animations. `prefers-reduced-motion` disables Lenis smooth-scroll and shortens all transitions to ~0.
