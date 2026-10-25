<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// php artisan serve: the first request after the server (re)starts loads
// hundreds of files with an empty OPcache. When antivirus scans each file
// that can pass PHP's default 30 seconds, so give the dev server longer.
if (PHP_SAPI === 'cli-server') {
    set_time_limit(300);
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());
