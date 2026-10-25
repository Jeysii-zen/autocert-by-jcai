<?php

declare(strict_types=1);

// Vercel runs this function on a read-only filesystem with no .env file and
// no database, so Laravel's defaults (SQLite sessions, file writes under
// storage/ and bootstrap/cache/) fail with a 500. Only /tmp is writable, so
// point everything Laravel writes there and pick drivers that need no
// database. Values set in the Vercel project's Environment Variables win.

$storage = '/tmp/storage';

foreach (['framework/views', 'framework/cache/data', 'framework/sessions', 'logs'] as $dir) {
    if (! is_dir("{$storage}/{$dir}")) {
        @mkdir("{$storage}/{$dir}", 0755, true);
    }
}

$defaults = [
    'LARAVEL_STORAGE_PATH' => $storage,
    'APP_ENV' => 'production',
    'APP_DEBUG' => 'false',
    'APP_SERVICES_CACHE' => '/tmp/services.php',
    'APP_PACKAGES_CACHE' => '/tmp/packages.php',
    'APP_CONFIG_CACHE' => '/tmp/config.php',
    'APP_ROUTES_CACHE' => '/tmp/routes.php',
    'APP_EVENTS_CACHE' => '/tmp/events.php',
    'VIEW_COMPILED_PATH' => "{$storage}/framework/views",
    'SESSION_DRIVER' => 'cookie',
    'CACHE_STORE' => 'file',
    'LOG_CHANNEL' => 'stderr',
    'QUEUE_CONNECTION' => 'sync',
];

foreach ($defaults as $key => $value) {
    if (getenv($key) === false && ! isset($_ENV[$key]) && ! isset($_SERVER[$key])) {
        putenv("{$key}={$value}");
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

// Send requests handled by Vercel to Laravel's front controller.
require __DIR__ . '/../public/index.php';