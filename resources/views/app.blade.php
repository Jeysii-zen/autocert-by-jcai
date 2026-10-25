<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="certificate-mail" content="{{ route('certificates.send') }}" data-check="{{ route('certificates.check-emails') }}">
<title>Autocert</title>
<script src="{{ asset('js/theme.js') }}?v={{ filemtime(public_path('js/theme.js')) }}"></script>
<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon-32.png') }}">
<link rel="icon" type="image/png" sizes="48x48" href="{{ asset('img/favicon-48.png') }}">
<link rel="apple-touch-icon" href="{{ asset('img/apple-touch-icon.png') }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700&family=Cinzel:wght@500;700&family=Libre+Baskerville&display=swap">
<link rel="stylesheet" href="{{ asset('css/base.css') }}?v={{ filemtime(public_path('css/base.css')) }}">
<link rel="stylesheet" href="{{ asset('css/styles.css') }}?v={{ filemtime(public_path('css/styles.css')) }}">
</head>
<body>
@verbatim
<nav class="topbar gutter" aria-label="Progress">
  <div class="topbar-inner">
    <a class="brand" href="#top" aria-label="Autocert">
      <img class="mark" src="img/autocert-mark.png" alt="" width="40" height="40">
      <span class="brand-text"><b>Autocert</b></span>
    </a>
    <ol class="stepper">
      <li id="stTemplate"><a href="#secTemplate"><i></i>Template</a></li>
      <li id="stNames"><a href="#secNames"><i></i>Names</a></li>
      <li id="stStyle"><a href="#secStyle"><i></i>Style</a></li>
      <li id="stExport"><a href="#secExport"><i></i>Export</a></li>
      <li id="stEmail"><a href="#secEmail"><i></i>Email</a></li>
    </ol>
    <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark mode">
      <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>
      <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>
    </button>
  </div>
</nav>

<header class="hero gutter" id="top">
  <div class="hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">Autocert · by JCAI</p>
      <h1><span class="ln"><span>Every attendee,</span></span> <span class="ln"><span><em>certified</em> in seconds.</span></span></h1>
      <p>Upload the blank Canva certificate, paste the attendee list, and place the name once. One certificate is created for every name.</p>
    </div>
    <div class="tally" aria-live="polite">
      <div><span>Names</span><b id="tallyNames">0</b></div>
      <div><span>Certificates</span><b id="tallyCerts">0</b></div>
      <div><span>Template</span><b id="tallyTpl" class="small">Sample</b></div>
    </div>
  </div>
</header>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <div class="marquee-group">
      <span>JCAI</span><span>Autocert</span><span>BSIT-31</span><span>JCAI</span><span>Autocert</span><span>BSIT-31</span>
      <span>JCAI</span><span>Autocert</span><span>BSIT-31</span><span>JCAI</span><span>Autocert</span><span>BSIT-31</span>
    </div>
    <div class="marquee-group">
      <span>JCAI</span><span>Autocert</span><span>BSIT-31</span><span>JCAI</span><span>Autocert</span><span>BSIT-31</span>
      <span>JCAI</span><span>Autocert</span><span>BSIT-31</span><span>JCAI</span><span>Autocert</span><span>BSIT-31</span>
    </div>
  </div>
</div>

<main class="wrap gutter">
  <div class="workspace">
    <div class="rail rail-left">
      <section class="step" id="secTemplate">
        <h2><span class="n">1</span>Certificate template</h2>
        <label class="drop" id="drop">
          <input type="file" id="templateFile" accept="image/png,image/jpeg,image/webp">
          <strong id="dropTitle">Upload your Canva certificate</strong>
          <span class="hint">PNG or JPG, with the name area left blank</span>
        </label>
        <details>
          <summary>How to export it from Canva</summary>
          <ol>
            <li>Open your certificate design and delete the sample name text (keep everything else).</li>
            <li>Click <b>Share → Download</b>.</li>
            <li>Choose <b>PNG</b>, set size to 2× if available, and download.</li>
            <li>Upload that PNG here.</li>
          </ol>
        </details>
      </section>

      <section class="step" id="secNames">
        <h2><span class="n">2</span>Attendee names</h2>
        <textarea id="names" spellcheck="false" placeholder="One name per line"></textarea>
        <div class="row" style="justify-content: space-between;">
          <span class="count" id="count"></span>
          <label class="check"><input type="checkbox" id="stripNums" checked> Remove list numbers</label>
        </div>
        <p class="hint" id="namesHint">Paste one name per line, straight from Excel, Google Sheets or a chat.</p>
      </section>
    </div>

    <section class="stage" aria-label="Preview">
      <div class="stage-bar">
        <span class="who" id="who"></span>
        <div class="pager">
          <span class="badge" id="sampleBadge">Sample template &amp; names</span>
          <div class="pager-ctl">
            <button id="prev" aria-label="Previous name">‹</button>
            <span class="pos" id="pos" aria-live="polite"></span>
            <button id="next" aria-label="Next name">›</button>
          </div>
        </div>
      </div>
      <div class="canvas-box"><canvas id="preview"></canvas></div>
      <p class="stage-foot">Drag on the certificate to move the name (on a phone, press and hold first). The dashed box marks the area long names shrink to fit.</p>
    </section>

    <div class="rail rail-right">
      <section class="step" id="secStyle">
        <h2><span class="n">3</span>Name style &amp; position</h2>
        <div class="row">
          <div class="field" style="flex-basis: 100%;">
            <label for="font">Font</label>
            <select id="font"></select>
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label for="size">Size <span id="sizeVal"></span></label>
            <input type="range" id="size" min="2" max="20" step="0.1">
          </div>
          <div class="field" style="flex: 0 0 auto;">
            <label for="color">Color</label>
            <input type="color" id="color">
          </div>
        </div>
        <div class="row">
          <div class="field" style="flex-basis: 100%;">
            <label for="caseMode">Letter case</label>
            <select id="caseMode">
              <option value="asis">As typed</option>
              <option value="title">Title Case</option>
              <option value="upper">UPPERCASE</option>
            </select>
          </div>
          <div class="field">
            <label for="bold">Weight</label>
            <select id="bold">
              <option value="normal">Regular</option>
              <option value="bold">Bold</option>
            </select>
          </div>
          <div class="field">
            <label for="italic">Style</label>
            <select id="italic">
              <option value="normal">Upright</option>
              <option value="italic">Italic</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label for="align">Alignment</label>
          <select id="align">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
          <p class="hint">Left starts each name at the position, Center centers it there, Right ends it there.</p>
        </div>
        <div class="field">
          <label for="maxW">Max name width <span id="maxWVal"></span></label>
          <input type="range" id="maxW" min="20" max="95" step="1">
        </div>
        <div class="row">
          <div class="field">
            <label for="posX">Horizontal <span id="posXVal"></span></label>
            <input type="range" id="posX" min="0" max="100" step="0.1">
          </div>
          <div class="field">
            <label for="posY">Vertical <span id="posYVal"></span></label>
            <input type="range" id="posY" min="0" max="100" step="0.1">
          </div>
        </div>
      </section>

      <section class="step export" id="secExport">
        <h2><span class="n">4</span>Export</h2>
        <div class="formats" role="radiogroup" aria-label="File format">
          <label class="fmt"><input type="radio" name="fmt" value="pdf" checked><span><b>One PDF</b><small>A page for every attendee, ready to print</small></span></label>
          <label class="fmt"><input type="radio" name="fmt" value="pngzip"><span><b>PNG images</b><small>One image per attendee, in a .zip</small></span></label>
          <label class="fmt"><input type="radio" name="fmt" value="pdfzip"><span><b>Separate PDFs</b><small>One PDF per attendee, in a .zip, for emailing</small></span></label>
        </div>
        <button class="primary big" id="exportBtn" type="button">Download certificates</button>
        <div class="progress" id="progress" hidden><div></div></div>
        <p class="status" id="status"></p>
      </section>
    </div>
  </div>

  <section class="gallery-section">
    <div class="gallery-head">
      <div>
        <h3 id="galleryTitle">All certificates</h3>
        <span class="hint">One certificate per name in your list. Click one to preview it.</span>
      </div>
      <input type="search" id="gallerySearch" placeholder="Find a name" aria-label="Find a name">
    </div>
    <div class="gallery" id="gallery"></div>
  </section>

  <section class="mail-section" id="secEmail">
    <div class="mail-head">
      <div>
        <p class="eyebrow">Email delivery</p>
        <h3>Send each attendee their own certificate</h3>
        <p class="hint">Pair every name with an email address. Juan's certificate goes only to Juan's email.</p>
      </div>
      <div class="seg" role="tablist" aria-label="How to add email addresses">
        <button type="button" role="tab" id="tabCsv" aria-selected="true" aria-controls="paneCsv">Upload CSV</button>
        <button type="button" role="tab" id="tabPaste" aria-selected="false" aria-controls="panePaste">Paste lists</button>
      </div>
    </div>

    <div class="mail-grid">
      <div class="mail-input">
        <div id="paneCsv" role="tabpanel">
          <label class="drop" id="csvDrop">
            <input type="file" id="csvFile" accept=".csv,text/csv,text/plain">
            <strong id="csvTitle">Upload a CSV file</strong>
            <span class="hint">Two columns, name and email. A header row is optional.</span>
          </label>
          <p class="hint csv-eg">Example rows:<br><code>Name,Email</code><br><code>Juan Dela Cruz,juan.delacruz@gmail.com</code></p>
        </div>
        <div id="panePaste" role="tabpanel" hidden>
          <div class="two">
            <div class="field">
              <label for="mailNames">Names <span id="mailNamesCount"></span></label>
              <textarea id="mailNames" spellcheck="false" placeholder="Juan Dela Cruz&#10;Maria Santos"></textarea>
            </div>
            <div class="field">
              <label for="mailEmails">Email addresses <span id="mailEmailsCount"></span></label>
              <textarea id="mailEmails" spellcheck="false" placeholder="juan.delacruz@gmail.com&#10;maria.santos@gmail.com"></textarea>
            </div>
          </div>
          <p class="hint">One per line, in the same order. Line 1 of names goes with line 1 of emails.</p>
        </div>
        <div class="mail-check" id="mailCheck" role="status"></div>
        <div class="table-wrap" id="mailTableWrap" hidden>
          <table id="mailTable">
            <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Certificate file</th><th class="st-col">Status</th></tr></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div class="mail-compose">
        <div class="field">
          <label for="mailFrom">Sender name</label>
          <input type="text" id="mailFrom" value="IT 31">
        </div>
        <div class="field">
          <label for="mailSubject">Subject</label>
          <input type="text" id="mailSubject" value="Your IT 31 certificate, {name}">
        </div>
        <div class="field">
          <label for="mailBody">Message <span>{name} becomes each attendee's name</span></label>
          <textarea id="mailBody" class="short">Hi {name},

Thank you for attending. Your certificate is attached to this email.

Best regards,
IT 31</textarea>
        </div>
        <div class="server-send" id="serverSend">
          <button class="primary big" id="sendNow" type="button" disabled>Send emails</button>
          <div class="row">
            <button type="button" id="checkEmails" disabled>Check addresses</button>
            <button type="button" id="stopSend" hidden>Stop sending</button>
            <label class="check"><input type="checkbox" id="skipSent" checked> Skip people already sent</label>
          </div>
          <div class="progress" id="sendProgress" hidden><div></div></div>
          <p class="status" id="sendStatus" role="status"></p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="site-foot gutter">
  <div class="site-foot-inner">
    <div class="foot-brand">
      <img class="mark" src="img/autocert-mark.png" alt="" width="40" height="40">
      <div>
        <b>Autocert</b>
        <span>by JCAI · BSIT-31</span>
      </div>
    </div>
    <div class="foot-contact">
      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:magtubacamp25@gmail.com">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>
          magtubacamp25@gmail.com</a></li>
        <li><a href="tel:+639272389700">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h2.6l1.4 4-2 1.3a12 12 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"/></svg>
          0927 238 9700</a></li>
        <li><a href="https://www.facebook.com/jeysii.magtuba" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M15.5 7.5h-1.8a2 2 0 0 0-2 2V21M9 12.5h6"/></svg>
          Facebook<span class="sr-only"> (opens in a new tab)</span></a></li>
        <li><a href="https://www.instagram.com/_jeyciiii_/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>
          Instagram<span class="sr-only"> (opens in a new tab)</span></a></li>
      </ul>
    </div>
    <p class="foot-note">© 2026 JCAI · Autocert. Certificates are made in your browser. Your template and names never leave it unless you send emails.</p>
  </div>
</footer>

@endverbatim
<script src="{{ asset('js/platform.js') }}?v={{ filemtime(public_path('js/platform.js')) }}"></script>
<script src="{{ asset('js/app.js') }}?v={{ filemtime(public_path('js/app.js')) }}"></script>
</body>
</html>
