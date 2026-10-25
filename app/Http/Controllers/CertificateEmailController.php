<?php

namespace App\Http\Controllers;

use App\Services\CertificateMailer;
use App\Services\EmailAddressChecker;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * Sends certificates from the page: first a check of every address on the
 * list, then one request per attendee carrying that attendee's PDF, so the
 * page can show progress and a failure only affects one person.
 */
class CertificateEmailController extends Controller
{
    public const MAX_RECIPIENTS = 1000;

    /**
     * Status of every address on the list (available, missing or invalid),
     * in the same order.
     */
    public function check(Request $request, EmailAddressChecker $checker): JsonResponse
    {
        $validated = $request->validate([
            'emails' => ['required', 'array', 'max:'.self::MAX_RECIPIENTS],
            'emails.*' => ['nullable', 'string', 'max:255'],
        ]);

        $results = array_map(function (?string $email) use ($checker): array {
            $status = $checker->status((string) $email);

            return ['email' => (string) $email, 'status' => $status, 'message' => EmailAddressChecker::MESSAGES[$status]];
        }, $validated['emails']);

        return response()->json(['results' => $results]);
    }

    /**
     * Emails one attendee their certificate.
     */
    public function send(Request $request, EmailAddressChecker $checker, CertificateMailer $mailer): JsonResponse
    {
        $validated = $request->validate([
            'batch' => ['required', 'string', 'alpha_dash', 'max:64'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255'],
            'subject' => ['required', 'string', 'max:200'],
            'message' => ['required', 'string', 'max:5000'],
            'sender_name' => ['nullable', 'string', 'max:100'],
            'file_name' => ['required', 'string', 'max:200', 'regex:/\.pdf$/i'],
            'certificate' => ['required', 'file', 'mimetypes:application/pdf', 'max:10240'],
        ]);

        if (($status = $checker->status($validated['email'])) !== EmailAddressChecker::AVAILABLE) {
            throw ValidationException::withMessages(['email' => EmailAddressChecker::MESSAGES[$status]]);
        }

        // A slow SMTP server can take longer than PHP's default 30 seconds;
        // the mailer's own timeout (MAIL_TIMEOUT) ends a stalled send first.
        set_time_limit(120);

        try {
            $result = $mailer->send(
                $validated['batch'],
                $validated['name'],
                $validated['email'],
                $validated['subject'],
                $validated['message'],
                (string) $request->file('certificate')->get(),
                basename($validated['file_name']),
                $validated['sender_name'] ?? null,
            );
        } catch (\Throwable $exception) {
            report($exception);

            return response()->json([
                'status' => 'failed',
                'message' => 'We could not send this email right now. Check the mail settings in .env, then try again.',
            ], 503);
        }

        return response()->json([
            'status' => $result,
            'message' => $result === CertificateMailer::SENT ? 'Sent.' : 'Already sent earlier.',
        ]);
    }
}
