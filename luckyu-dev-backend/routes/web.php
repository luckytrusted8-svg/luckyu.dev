<?php

use Illuminate\Support\Facades\Route;

// This backend is API-only — the frontend is a separate Next.js app.
// This route exists only so `php artisan serve` has a sane root response.
Route::get('/', function () {
    return response()->json([
        'name' => config('app.name'),
        'status' => 'ok',
    ]);
});
