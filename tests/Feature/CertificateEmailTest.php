<?php

namespace Tests\Feature;

use App\Mail\CertificateMail;
use App\Services\EmailAddressChecker;
use Illuminate\Http\UploadedFile;
use Illuminate\Mail\Attachment;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Tests\TestCase;

class CertificateEmailTest extends TestCase
{
    private function payload(array $overrides = []): array
    {
        return array_merge([
            'batch' => 'batch-1',
            'name' => 'Juan Dela Cruz',
            'email' => 'juan.delacruz@gmail.com',
            'subject' => 'Your IT 31 certificate, {name}',
            'message' => "Hi {name},\n\nYour certificate is attached.",
            'sender_name' => 'IT 31',
            'file_name' => 'IT 31 Certificate - Juan Dela Cruz.pdf',
            'certificate' => UploadedFile::fake()->createWithContent('cert.pdf', "%PDF-1.4\n%fake certificate\n"),
        ], $overrides);
    }

    public function test_the_page_is_served_with_the_send_endpoints(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('name="csrf-token"', false)
            ->assertSee(route('certificates.send'), false);
    }

    public function test_each_attendee_gets_only_their_own_certificate(): void
    {
        Mail::fake();

        $this->postJson(route('certificates.send'), $this->payload())
            ->assertOk()
            ->assertJson(['status' => 'sent']);

        $this->postJson(route('certificates.send'), $this->payload([
            'name' => 'Maria Santos',
            'email' => 'maria.santos@gmail.com',
            'file_name' => 'IT 31 Certificate - Maria Santos.pdf',
        ]))->assertOk();

        Mail::assertSentCount(2);
        Mail::assertSent(CertificateMail::class, function (CertificateMail $mail) {
            return $mail->hasTo('juan.delacruz@gmail.com')
                && ! $mail->hasTo('maria.santos@gmail.com')
                && $mail->fileName === 'IT 31 Certificate - Juan Dela Cruz.pdf'
                && $mail->hasSubject('Your IT 31 certificate, Juan Dela Cruz')
                && $mail->hasAttachment(Attachment::fromData(fn () => "%PDF-1.4\n%fake certificate\n", 'IT 31 Certificate - Juan Dela Cruz.pdf')->withMime('application/pdf'));
        });
        Mail::assertSent(CertificateMail::class, fn (CertificateMail $mail) => $mail->hasTo('maria.santos@gmail.com') && $mail->attendee === 'Maria Santos');
    }

    public function test_the_message_uses_the_attendee_name(): void
    {
        $mail = new CertificateMail('Juan Dela Cruz', 'Hi {name}', "Hi {name},\n\nWell done.", '%PDF', 'cert.pdf', 'IT 31');

        $mail->assertSeeInHtml('Hi Juan Dela Cruz,');
        $mail->assertSeeInHtml('Well done.');
        $this->assertSame('IT 31', $mail->envelope()->from->name);
    }

    public function test_sending_the_same_list_again_skips_people_already_sent(): void
    {
        Mail::fake();

        $this->postJson(route('certificates.send'), $this->payload())->assertJson(['status' => 'sent']);
        $this->postJson(route('certificates.send'), $this->payload())->assertJson(['status' => 'skipped']);
        $this->postJson(route('certificates.send'), $this->payload(['batch' => 'batch-2']))->assertJson(['status' => 'sent']);

        Mail::assertSentCount(2);
    }

    public function test_addresses_are_checked_before_sending(): void
    {
        Mail::fake();

        $this->postJson(route('certificates.send'), $this->payload(['email' => 'juan at gmail.com']))
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['email' => EmailAddressChecker::MESSAGES[EmailAddressChecker::INVALID]]);

        Mail::assertNothingSent();
    }

    public function test_a_domain_without_a_mail_server_is_reported_as_missing(): void
    {
        config(['services.email_dns_check' => true]);
        $this->app->instance(EmailAddressChecker::class, new class extends EmailAddressChecker
        {
            protected function domainReceivesMail(string $domain): bool
            {
                return $domain !== 'gmial.com';
            }
        });

        $this->postJson(route('certificates.check-emails'), ['emails' => ['juan@gmial.com', 'maria@gmail.com', 'not-an-email']])
            ->assertOk()
            ->assertJsonPath('results.0.status', EmailAddressChecker::MISSING)
            ->assertJsonPath('results.1.status', EmailAddressChecker::AVAILABLE)
            ->assertJsonPath('results.2.status', EmailAddressChecker::INVALID);
    }

    public function test_only_pdf_certificates_can_be_attached(): void
    {
        Mail::fake();

        $this->postJson(route('certificates.send'), $this->payload([
            'certificate' => UploadedFile::fake()->createWithContent('cert.html', '<html>not a pdf</html>'),
        ]))->assertJsonValidationErrors('certificate');

        $this->postJson(route('certificates.send'), $this->payload(['file_name' => 'cert.exe']))
            ->assertJsonValidationErrors('file_name');

        Mail::assertNothingSent();
    }

    public function test_a_mail_server_error_is_reported_without_crashing(): void
    {
        Mail::shouldReceive('to')->andThrow(new \RuntimeException('SMTP down'));

        $this->postJson(route('certificates.send'), $this->payload())
            ->assertStatus(503)
            ->assertJson(['status' => 'failed']);
    }

    public function test_sending_is_rate_limited(): void
    {
        Mail::fake();
        RateLimiter::clear('send:127.0.0.1');

        for ($i = 0; $i < 30; $i++) {
            $this->postJson(route('certificates.send'), $this->payload(['batch' => "b{$i}"]))->assertOk();
        }

        $this->postJson(route('certificates.send'), $this->payload(['batch' => 'b-last']))->assertStatus(429);
    }
}
