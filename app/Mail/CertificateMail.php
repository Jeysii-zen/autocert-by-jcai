<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

/**
 * One attendee's certificate: the message written on the page, with only
 * that attendee's PDF attached. {name} in the subject and message becomes
 * the attendee's name.
 */
class CertificateMail extends Mailable
{
    use Queueable;

    public function __construct(
        public string $attendee,
        public string $subjectLine,
        public string $body,
        public string $pdf,
        public string $fileName,
        public ?string $senderName = null,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address((string) config('mail.from.address'), $this->senderName ?: (string) config('mail.from.name')),
            subject: $this->fill($this->subjectLine),
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.certificate',
            with: ['paragraphs' => preg_split('/\R{2,}/', trim($this->fill($this->body)))],
        );
    }

    /**
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromData(fn (): string => $this->pdf, $this->fileName)->withMime('application/pdf'),
        ];
    }

    private function fill(string $text): string
    {
        return str_replace('{name}', $this->attendee, $text);
    }
}
