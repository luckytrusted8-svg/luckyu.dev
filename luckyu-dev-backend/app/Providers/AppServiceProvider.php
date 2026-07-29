<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Behind a reverse proxy in production, force HTTPS so generated
        // asset/media URLs (Spatie Media Library) and CORS never mismatch
        // on scheme.
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
