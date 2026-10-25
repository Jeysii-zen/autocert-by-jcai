<?php

namespace App\Services;

use App\Mail\CertificateMail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

/**
 * Emails one attendee their own certificate.
 *
 * Each send is remembered per batch (one attendee list on the page) for
 * REMEMBER_DAYS, so pressing "Send" again after a stop, a failure or the
 * daily Gmail limit skips everyone who already got their certificate.
 * Only a hash of the address and file name is kept.
 */
class CertificateMailer
{
    public const SENT = 'sent';

    public const SKIPPED = 'skipped';

    public const REMEMBER_DAYS = 30;

    public function send(string $batch, string $attendee, string $email, string $subject, string $body, string $pdf, string $fileName, ?string $senderName = null): string
    {
        $email = strtolower(trim($email));
        $key = $this->key($batch, $email, $fileName);

        if (Cache::has($key)) {
            return self::SKIPPED;
        }

        Mail::to($email)->send(new CertificateMail($attendee, $subject, $body, $pdf, $fileName, $senderName));

        Cache::put($key, now()->getTimestamp(), now()->addDays(self::REMEMBER_DAYS));

        return self::SENT;
    }

    private function key(string $batch, string $email, string $fileName): string
    {
        return 'certificate-sent:'.$batch.':'.hash('sha256', $email.'|'.$fileName);
    }
}
