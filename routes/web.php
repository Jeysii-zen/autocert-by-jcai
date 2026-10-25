<?php

use App\Http\Controllers\CertificateEmailController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'app')->name('home');

Route::post('/certificates/check-emails', [CertificateEmailController::class, 'check'])
    ->middleware('throttle:certificate-check')
    ->name('certificates.check-emails');

Route::post('/certificates/send', [CertificateEmailController::class, 'send'])
    ->middleware('throttle:certificate-send')
    ->name('certificates.send');
