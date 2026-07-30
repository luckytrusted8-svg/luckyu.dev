---
title: "Mini E-Commerce"
category: "Laravel + React/Inertia"
description: "A role-based e-commerce app built as an internship portfolio piece, from ERD to checkout flow."
tech: ["Laravel 12", "Inertia.js", "React", "TypeScript", "MySQL", "shadcn/ui"]
github: "https://github.com/"
demo: ""
accent: "blue"
featured: true
order: 2
---
## Overview

Built as a structured, 11-stage internship project: ERD design, migrations, Eloquent models, controllers, role-based middleware, and full frontend pages — in that order, with a review at each stage.

## Notable decisions

- A custom `LoginResponse` class to handle role-based redirects on top of Laravel Fortify
- File uploads handled through `router.post()` with manual `FormData` and a `_method: 'put'` override
- Separate add/edit pages instead of modals, for clearer state and easier validation

## Stack details

Frontend runs on Inertia.js with TypeScript and the shadcn/ui "Vega" preset for consistent, accessible components; the whole project runs locally through Laragon.
