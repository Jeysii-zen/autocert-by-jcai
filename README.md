# IT 31 Certificate Generator

Upload a blank Canva certificate, paste the attendee list, and download one personalized certificate per name. With email addresses added, the app emails each attendee **only their own certificate** through your mail account.

It's a small Laravel 13 app. The page itself is plain HTML, CSS and JavaScript. There's no Vite or npm build.

## Setup

You need PHP 8.3+ and Composer.

```sh
composer run setup     # installs packages, creates .env, generates the app key
composer run dev       # same as: php artisan serve
```

Open http://127.0.0.1:8000.

## Sending email

Mail settings are in `.env`, with the same variables as any Laravel app (`config/mail.php`).

1. **Try it first without sending anything.** Leave `MAIL_MAILER=log`. Each email, with its PDF attached, is written to `storage/logs/laravel.log` instead of being delivered.
2. **Send for real with Gmail:**
   - turn on 2-Step Verification on the Google account
   - create an App Password at https://myaccount.google.com/apppasswords
   - fill in `.env`:

   ```env
   MAIL_MAILER=smtp
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USERNAME=your.address@gmail.com
   MAIL_PASSWORD="abcd efgh ijkl mnop"
   MAIL_FROM_ADDRESS=your.address@gmail.com
   MAIL_FROM_NAME="IT 31"
   ```

   Then run `php artisan config:clear` and restart `php artisan serve`.

On the page, add names and emails in the **Email delivery** section (by CSV or two pasted lists of the same length), then click **Send N emails**:

1. Every address is checked first: it must be a valid address whose domain has a mail server (so `juan@gmial.com` is caught). If any fail, nothing is sent and the bad rows are marked.
2. Each attendee's PDF is created in the browser and sent in its own request. The table shows *Sending… / Sent ✓ / Already sent / Failed* per person.
3. Pressing **Send** again for the same list skips people who already got their certificate. Untick *Skip people already sent* to send to everyone again.

Gmail allows about 500 emails a day (2,000 on Google Workspace). The app caps sending at 30 a minute and 300 an hour per computer. When it hits the limit it waits and continues on its own.

## Where the code is

| Part | File |
| --- | --- |
| Routes (with rate limits) | `routes/web.php` |
| Rate limits | `app/Providers/AppServiceProvider.php` |
| Check addresses / send one certificate | `app/Http/Controllers/CertificateEmailController.php` |
| Address check (format + mail server) | `app/Services/EmailAddressChecker.php` |
| Send once per attendee per list | `app/Services/CertificateMailer.php` |
| The email (subject, sender, PDF attachment) | `app/Mail/CertificateMail.php`, `resources/views/mail/certificate.blade.php` |
| Page markup | `resources/views/app.blade.php` |
| Page styling | `public/css/styles.css` (colors and fonts are the tokens at the top) |
| Page behavior | `public/js/app.js` (sending is under `Sending through the Laravel app`) |
| Tests | `tests/Feature/CertificateEmailTest.php` |

Run the tests with `php artisan test`.

## Notes

- Run it on your own computer. Anyone who can open the page can send email from your account, so don't put it on a public server without adding a login.
- **Match the name style** compares your finished sample with the blank template in the browser, so both must come from the same Canva design. Type the name shown on the sample to match the font as well as the position, size and color.
