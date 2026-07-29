<?php

use App\Http\Controllers\Api\Admin\AboutController as AdminAboutController;
use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\ContactMessageController as AdminContactMessageController;
use App\Http\Controllers\Api\Admin\DashboardController;
use App\Http\Controllers\Api\Admin\PortfolioController as AdminPortfolioController;
use App\Http\Controllers\Api\Public\AboutController;
use App\Http\Controllers\Api\Public\BlogPostController;
use App\Http\Controllers\Api\Public\ContactMessageController;
use App\Http\Controllers\Api\Public\PortfolioController;
use App\Http\Controllers\Api\Public\ServiceController;
use App\Http\Controllers\Api\Public\SkillController;
use App\Http\Controllers\Api\Public\TestimonialController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public API — read-only, no auth, safe to cache at the edge later.
|--------------------------------------------------------------------------
*/
Route::get('/about', [AboutController::class, 'show']);
Route::apiResource('services', ServiceController::class)->only(['index', 'show']);
Route::apiResource('portfolios', PortfolioController::class)
    ->only(['index', 'show'])
    ->parameters(['portfolios' => 'portfolio:slug']);
Route::get('/skills', [SkillController::class, 'index']);
Route::apiResource('testimonials', TestimonialController::class)->only(['index']);
Route::apiResource('blog-posts', BlogPostController::class)
    ->only(['index', 'show'])
    ->parameters(['blog-posts' => 'blogPost:slug']);

// Rate-limited separately from the rest of the public API — this is the
// one public endpoint that writes to the database.
Route::post('/contact-messages', [ContactMessageController::class, 'store'])
    ->middleware('throttle:5,1');

/*
|--------------------------------------------------------------------------
| Admin API — Sanctum session auth + Spatie Permission role check.
|--------------------------------------------------------------------------
*/
Route::prefix('admin')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:10,1');

    Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/me', [AuthController::class, 'me']);

        Route::get('/dashboard-summary', [DashboardController::class, 'summary']);

        Route::put('/about', [AdminAboutController::class, 'update']);
        Route::post('/about/cv', [AdminAboutController::class, 'uploadCv']);

        Route::apiResource('portfolios', AdminPortfolioController::class);
        Route::post('/portfolios/{portfolio}/media', [AdminPortfolioController::class, 'uploadMedia']);

        Route::get('/contact-messages', [AdminContactMessageController::class, 'index']);
        Route::patch('/contact-messages/{contactMessage}/read', [AdminContactMessageController::class, 'markAsRead']);

        // Remaining admin resources (services, skills, experience,
        // testimonials, blog, social-media, seo-settings, settings)
        // follow the exact same apiResource + Request + Resource pattern
        // as `portfolios` above — added incrementally per roadmap Fase 7.
    });
});
