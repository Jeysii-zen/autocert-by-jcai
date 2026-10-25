<?php

/**
 * Router for `php artisan serve` (it uses this file when it exists).
 *
 * PHP's built-in server sends static files with no caching headers, so the
 * browser downloads every stylesheet, script and image again on each reload,
 * one at a time. Here files in public/ get cache headers instead: a URL with
 * ?v= (the file's modified time, added in the Blade view) is cached for a
 * year, anything else for an hour, and an unchanged file answers 304.
 * Everything else goes to Laravel as before.
 */
$publicPath = getcwd();
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '');
$file = $uri !== '/' ? realpath($publicPath.$uri) : false;

const STATIC_TYPES = [
    'css' => 'text/css; charset=utf-8',
    'js' => 'text/javascript; charset=utf-8',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'webp' => 'image/webp',
    'svg' => 'image/svg+xml',
    'ico' => 'image/x-icon',
    'woff2' => 'font/woff2',
    'txt' => 'text/plain; charset=utf-8',
];

$type = $file ? (STATIC_TYPES[strtolower(pathinfo($file, PATHINFO_EXTENSION))] ?? null) : null;

if ($type && is_file($file) && str_starts_with($file, realpath($publicPath).DIRECTORY_SEPARATOR)) {
    $etag = '"'.dechex(filemtime($file)).'-'.dechex(filesize($file)).'"';

    header('Content-Type: '.$type);
    header('X-Content-Type-Options: nosniff');
    header('ETag: '.$etag);
    header(isset($_GET['v']) ? 'Cache-Control: public, max-age=31536000, immutable' : 'Cache-Control: public, max-age=3600');

    if (($_SERVER['HTTP_IF_NONE_MATCH'] ?? '') === $etag) {
        http_response_code(304);

        return true;
    }

    header('Content-Length: '.filesize($file));
    readfile($file);

    return true;
}

return require __DIR__.'/vendor/laravel/framework/src/Illuminate/Foundation/resources/server.php';
