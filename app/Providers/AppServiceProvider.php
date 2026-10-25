<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureRateLimiting();
    }

    /**
     * Named limiters for the routes in routes/web.php, per IP address.
     */
    private function configureRateLimiting(): void
    {
        // Address checks: one per "Check addresses" or "Send" click.
        RateLimiter::for('certificate-check', fn (Request $request) => Limit::perMinute(20)->by('ip:'.$request->ip()));

        // Each send is an outgoing email. Gmail allows about 500 a day
        // (2,000 for Google Workspace), so the hourly cap keeps one long
        // list from using up the whole day's allowance at once.
        RateLimiter::for('certificate-send', fn (Request $request) => [
            Limit::perMinute(30)->by('send:'.$request->ip()),
            Limit::perHour(300)->by('send-hour:'.$request->ip()),
        ]);
    }
}
