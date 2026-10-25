<x-mail::message>
@foreach ($paragraphs as $paragraph)
{!! nl2br(e($paragraph)) !!}

@endforeach
</x-mail::message>
