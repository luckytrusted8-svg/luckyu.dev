# Luckyu.dev — Backend (Laravel 12 API)

Hand-authored Laravel 12 API scaffold. No dummy content is seeded — see
`database/seeders/DatabaseSeeder.php`.

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed          # creates the admin role + one admin user only
php artisan storage:link     # required for Spatie Media Library public URLs
php artisan serve
```

Then update `ADMIN_EMAIL` / `ADMIN_PASSWORD` in `.env` **before** seeding
anywhere but your local machine.

## About Laravel Breeze in this scaffold

`laravel/breeze` is listed in `composer.json` (dev) per the requested tech
stack, but the admin auth flow here (`app/Http/Controllers/Api/Admin/AuthController.php`)
was hand-written directly against Sanctum's SPA cookie flow instead of
running `php artisan breeze:install api`. Running that command yourself
will scaffold Breeze's own auth controllers/routes on top of this — review
and reconcile with the existing `AuthController` before doing so, rather
than letting it overwrite `routes/api.php`.

## Architecture conventions

- **Controllers stay thin.** Business logic lives in `app/Services/*`
  (see `PortfolioService` as the reference pattern) — controllers only
  validate (via Form Requests), delegate, and shape the response (via
  API Resources).
- **Authorization** goes through Policies (`app/Policies/*`), auto-discovered
  by Laravel's Model ↔ Policy naming convention. Admin-only routes are
  additionally gated by Spatie's `role:admin` middleware in `routes/api.php`.
- **Every write-capable admin resource follows the same 4-file pattern**
  demonstrated by Portfolio: `Http/Requests/{Resource}/Store*.php` +
  `Update*.php`, `Http/Resources/{Resource}Resource.php`,
  `Http/Controllers/Api/Admin/{Resource}Controller.php`, and (if it has
  business logic beyond plain CRUD) `Services/{Resource}Service.php`.
  Apply this same pattern to add the remaining admin resources listed in
  `routes/api.php` (services, skills, experience, testimonials, blog,
  social-media, seo-settings, settings) — intentionally left for the next
  build phase per the project roadmap (Fase 7).
- **No dummy data.** `DatabaseSeeder` only creates the admin role/user.
  All content (services, portfolios, skills, etc.) is entered through the
  admin dashboard once it exists.

## Sanctum SPA auth — required environment alignment

For the Next.js admin dashboard to authenticate via cookies (not bearer
tokens), the frontend and backend must agree on:

- `CORS_ALLOWED_ORIGINS` (backend `.env`) must list the exact frontend origin(s).
- `SANCTUM_STATEFUL_DOMAINS` (backend `.env`) must list the frontend's host(s)
  (without protocol).
- The frontend's `NEXT_PUBLIC_API_URL` must point at this backend.
- In production, both apps should share a parent domain (e.g.
  `app.luckyu.dev` and `api.luckyu.dev`) so `SESSION_DOMAIN=.luckyu.dev`
  can be set — cross-domain cookies without a shared parent domain are
  unreliable across browsers.

## Testing

```bash
php artisan test
```

`tests/Feature/Api/PortfolioTest.php` is the reference test for the public
Portfolio endpoints — mirror its structure for new resources.
