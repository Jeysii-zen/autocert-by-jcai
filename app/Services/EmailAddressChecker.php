<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

/**
 * Whether a certificate can be emailed to an address: well formed, and its
 * domain receives mail (has an MX record).
 *
 * shortcut: a real mailbox cannot be confirmed for free (mail servers like
 * Gmail refuse to say), so "does not exist" means the domain has no mail
 * server, e.g. a typo like gmial.com. A wrong name before the @ still
 * bounces back to the sender's inbox.
 */
class EmailAddressChecker
{
    public const AVAILABLE = 'available';

    public const MISSING = 'missing';

    public const INVALID = 'invalid';

    public const MESSAGES = [
        self::AVAILABLE => 'This email address can receive mail.',
        self::MISSING => 'This email address does not exist. Check it for typos.',
        self::INVALID => 'Enter a valid email address.',
    ];

    public function status(string $email): string
    {
        $email = strtolower(trim($email));

        if (Validator::make(['email' => $email], ['email' => ['required', 'email:rfc', 'max:255']])->fails()) {
            return self::INVALID;
        }

        return $this->domainReceivesMail(substr($email, strrpos($email, '@') + 1)) ? self::AVAILABLE : self::MISSING;
    }

    protected function domainReceivesMail(string $domain): bool
    {
        // Tests and offline development skip the DNS lookup (EMAIL_DNS_CHECK=false).
        if (! config('services.email_dns_check', true)) {
            return true;
        }

        return Cache::remember("email-domain-mx:{$domain}", now()->addDay(), fn (): bool => checkdnsrr($domain.'.', 'MX'));
    }
}
