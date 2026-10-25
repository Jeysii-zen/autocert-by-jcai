// Google Fonts that Canva also offers: [name, kind, styles]. Styles lists the
// real cuts beyond regular ("b" bold, "i" italic); others are synthesized.
// Each font loads only when it's chosen (see loadFont).
const FONTS = [
  // Script and handwriting
  ["Alex Brush", "script", ""], ["Allura", "script", ""], ["Arizonia", "script", ""],
  ["Bad Script", "script", ""], ["Ballet", "script", ""], ["Berkshire Swash", "script", ""],
  ["Bilbo Swash Caps", "script", ""], ["Birthstone", "script", ""], ["Caveat", "script", "b"],
  ["Cedarville Cursive", "script", ""], ["Charm", "script", "b"], ["Clicker Script", "script", ""],
  ["Cookie", "script", ""], ["Corinthia", "script", "b"], ["Courgette", "script", ""],
  ["Damion", "script", ""], ["Dancing Script", "script", "b"], ["Dawning of a New Day", "script", ""],
  ["Edu SA Beginner", "script", "b"], ["Engagement", "script", ""], ["Euphoria Script", "script", ""],
  ["Felipa", "script", ""], ["Grand Hotel", "script", ""], ["Great Vibes", "script", ""],
  ["Herr Von Muellerhoff", "script", ""], ["Homemade Apple", "script", ""], ["Imperial Script", "script", ""],
  ["Italianno", "script", ""], ["Kalam", "script", "b"], ["Kaushan Script", "script", ""],
  ["La Belle Aurore", "script", ""], ["Lavishly Yours", "script", ""], ["League Script", "script", ""],
  ["Lobster", "script", ""], ["Marck Script", "script", ""], ["Mea Culpa", "script", ""],
  ["Meddon", "script", ""], ["Monsieur La Doulaise", "script", ""], ["Montez", "script", ""],
  ["Mr De Haviland", "script", ""], ["Mrs Saint Delafield", "script", ""], ["Ms Madi", "script", ""],
  ["Niconne", "script", ""], ["Norican", "script", ""], ["Nothing You Could Do", "script", ""],
  ["Oleo Script", "script", "b"], ["Pacifico", "script", ""], ["Parisienne", "script", ""],
  ["Petit Formal Script", "script", ""], ["Pinyon Script", "script", ""], ["Playball", "script", ""],
  ["Qwigley", "script", ""], ["Reenie Beanie", "script", ""], ["Rouge Script", "script", ""],
  ["Ruthie", "script", ""], ["Sacramento", "script", ""], ["Satisfy", "script", ""],
  ["Style Script", "script", ""], ["Tangerine", "script", "b"], ["Water Brush", "script", ""],
  ["Whisper", "script", ""], ["WindSong", "script", ""], ["Yellowtail", "script", ""],
  // Serif
  ["Aboreto", "serif", ""], ["Abril Fatface", "serif", ""], ["Alfa Slab One", "serif", ""],
  ["Alice", "serif", ""], ["Almendra", "serif", "bi"], ["Arvo", "serif", "bi"], ["Bellefair", "serif", ""],
  ["Bitter", "serif", "bi"], ["Bodoni Moda", "serif", "bi"], ["Cardo", "serif", "bi"],
  ["Castoro", "serif", "i"], ["Cinzel", "serif", "b"], ["Cinzel Decorative", "serif", "b"],
  ["Cormorant", "serif", "bi"], ["Cormorant Garamond", "serif", "bi"], ["Cormorant SC", "serif", "b"],
  ["Cormorant Upright", "serif", "b"], ["Crimson Pro", "serif", "bi"], ["Crimson Text", "serif", "bi"],
  ["Della Respira", "serif", ""], ["DM Serif Display", "serif", "i"], ["Domine", "serif", "b"],
  ["EB Garamond", "serif", "bi"], ["Federo", "serif", ""], ["Forum", "serif", ""],
  ["Fraunces", "serif", "bi"], ["Gilda Display", "serif", ""], ["Gloock", "serif", ""],
  ["IM Fell English", "serif", "i"], ["Instrument Serif", "serif", "i"], ["Italiana", "serif", ""],
  ["Josefin Slab", "serif", "bi"], ["Libre Baskerville", "serif", "bi"],
  ["Libre Caslon Display", "serif", ""], ["Libre Caslon Text", "serif", "bi"], ["Limelight", "serif", ""],
  ["Lora", "serif", "bi"], ["Marcellus", "serif", ""], ["Marcellus SC", "serif", ""],
  ["Merriweather", "serif", "bi"], ["Newsreader", "serif", "bi"], ["Noto Serif", "serif", "bi"],
  ["Old Standard TT", "serif", "bi"], ["Pirata One", "serif", ""], ["Playfair Display", "serif", "bi"],
  ["Playfair Display SC", "serif", "bi"], ["Prata", "serif", ""], ["PT Serif", "serif", "bi"],
  ["Roboto Slab", "serif", "b"], ["Rozha One", "serif", ""], ["Rye", "serif", ""],
  ["Sorts Mill Goudy", "serif", "i"], ["Source Serif 4", "serif", "bi"], ["Spectral", "serif", "bi"],
  ["Trirong", "serif", "bi"], ["Uncial Antiqua", "serif", ""], ["UnifrakturMaguntia", "serif", ""],
  ["Unna", "serif", "bi"], ["Vollkorn", "serif", "bi"], ["Yeseva One", "serif", ""],
  ["Young Serif", "serif", ""], ["Zilla Slab", "serif", "bi"],
  // Sans serif
  ["Abel", "sans-serif", ""], ["Alata", "sans-serif", ""], ["Alegreya Sans", "sans-serif", "bi"],
  ["Anton", "sans-serif", ""], ["Antonio", "sans-serif", "b"], ["Archivo", "sans-serif", "bi"],
  ["Archivo Black", "sans-serif", ""], ["Baloo 2", "sans-serif", "b"], ["Barlow", "sans-serif", "bi"],
  ["Barlow Condensed", "sans-serif", "bi"], ["Bebas Neue", "sans-serif", ""],
  ["Big Shoulders Display", "sans-serif", "b"], ["Cabin", "sans-serif", "bi"], ["Chivo", "sans-serif", "bi"],
  ["Comfortaa", "sans-serif", "b"], ["Didact Gothic", "sans-serif", ""], ["DM Sans", "sans-serif", "bi"],
  ["Exo 2", "sans-serif", "bi"], ["Figtree", "sans-serif", "bi"], ["Fjalla One", "sans-serif", ""],
  ["Fredoka", "sans-serif", "b"], ["Gruppo", "sans-serif", ""], ["Heebo", "sans-serif", "b"],
  ["Hind", "sans-serif", "b"], ["Inter", "sans-serif", "bi"], ["Josefin Sans", "sans-serif", "bi"],
  ["Julius Sans One", "sans-serif", ""], ["Kanit", "sans-serif", "bi"], ["Karla", "sans-serif", "bi"],
  ["Lato", "sans-serif", "bi"], ["League Spartan", "sans-serif", "b"], ["Lexend", "sans-serif", "b"],
  ["Libre Franklin", "sans-serif", "bi"], ["Manrope", "sans-serif", "b"], ["Maven Pro", "sans-serif", "b"],
  ["Michroma", "sans-serif", ""], ["Montserrat", "sans-serif", "bi"], ["Mulish", "sans-serif", "bi"],
  ["Noto Sans", "sans-serif", "bi"], ["Nunito", "sans-serif", "bi"], ["Open Sans", "sans-serif", "bi"],
  ["Oswald", "sans-serif", "b"], ["Outfit", "sans-serif", "b"], ["Pathway Gothic One", "sans-serif", ""],
  ["Plus Jakarta Sans", "sans-serif", "bi"], ["Poppins", "sans-serif", "bi"], ["Prompt", "sans-serif", "bi"],
  ["PT Sans", "sans-serif", "bi"], ["Questrial", "sans-serif", ""], ["Quicksand", "sans-serif", "b"],
  ["Raleway", "sans-serif", "bi"], ["Red Hat Display", "sans-serif", "bi"], ["Righteous", "sans-serif", ""],
  ["Roboto", "sans-serif", "bi"], ["Rubik", "sans-serif", "bi"], ["Saira", "sans-serif", "bi"],
  ["Six Caps", "sans-serif", ""], ["Sora", "sans-serif", "b"], ["Source Sans 3", "sans-serif", "bi"],
  ["Space Grotesk", "sans-serif", "b"], ["Spartan", "sans-serif", "b"], ["Staatliches", "sans-serif", ""],
  ["Syncopate", "sans-serif", "b"], ["Teko", "sans-serif", "b"], ["Tenor Sans", "sans-serif", ""],
  ["Titillium Web", "sans-serif", "bi"], ["Ubuntu", "sans-serif", "bi"], ["Urbanist", "sans-serif", "bi"],
  ["Varela Round", "sans-serif", ""], ["Work Sans", "sans-serif", "bi"],
  // Display
  ["Amatic SC", "display", "b"], ["Architects Daughter", "display", ""], ["Audiowide", "display", ""],
  ["Bangers", "display", ""], ["Black Ops One", "display", ""], ["Boogaloo", "display", ""],
  ["Bowlby One SC", "display", ""], ["Bungee", "display", ""], ["Bungee Shade", "display", ""],
  ["Cherry Bomb One", "display", ""], ["Chewy", "display", ""], ["Codystar", "display", ""],
  ["Coiny", "display", ""], ["Concert One", "display", ""], ["Creepster", "display", ""],
  ["Elsie", "display", ""], ["Faster One", "display", ""], ["Fredericka the Great", "display", ""],
  ["Gloria Hallelujah", "display", ""], ["Indie Flower", "display", ""], ["Lobster Two", "display", "bi"],
  ["Londrina Solid", "display", ""], ["Luckiest Guy", "display", ""], ["Monoton", "display", ""],
  ["Orbitron", "display", "b"], ["Patrick Hand", "display", ""], ["Permanent Marker", "display", ""],
  ["Poiret One", "display", ""], ["Press Start 2P", "display", ""], ["Rampart One", "display", ""],
  ["Rubik Mono One", "display", ""], ["Shadows Into Light", "display", ""], ["Shrikhand", "display", ""],
  ["Sigmar One", "display", ""], ["Special Elite", "display", ""], ["Titan One", "display", ""],
  ["Unica One", "display", ""], ["Vast Shadow", "display", ""],
  // Monospace
  ["Courier Prime", "monospace", "bi"], ["IBM Plex Mono", "monospace", "bi"],
  ["JetBrains Mono", "monospace", "bi"], ["Roboto Mono", "monospace", "bi"],
  ["Source Code Pro", "monospace", "bi"], ["Space Mono", "monospace", "bi"]
];
const SAMPLE_NAMES = "1. Maria Santos\n2. John Paul Dela Cruz\n3. Angelica Reyes\n4. Mark Anthony Villanueva\n5. Kristine Joy Mendoza-Bautista";
const DEFAULTS = { font: "Great Vibes", size: 7, color: "#1f3a5f", caseMode: "asis", bold: "normal", italic: "normal", align: "center", maxW: 70, posX: 50, posY: 50 };
const STORE_KEY = "it31-certgen-settings-v1";

const $ = id => document.getElementById(id);
const canvas = $("preview"), ctx = canvas.getContext("2d");
let template = null;        // HTMLImageElement or HTMLCanvasElement
let usingSample = true;
let current = 0;
let dragging = false;
let busy = false;
let exportedOnce = false;

const settings = Object.assign({}, DEFAULTS, loadSettings());

function loadSettings() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { return {}; }
}
function saveSettings() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(settings)); } catch {}
}

// ---------- Sample template (shown until the user uploads their own) ----------
function makeSampleTemplate() {
  const c = document.createElement("canvas");
  c.width = 2000; c.height = 1414;
  const g = c.getContext("2d");
  g.fillStyle = "#fbfaf6"; g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = "#1f3a5f"; g.lineWidth = 18; g.strokeRect(50, 50, c.width - 100, c.height - 100);
  g.strokeStyle = "#b08d3c"; g.lineWidth = 4; g.strokeRect(90, 90, c.width - 180, c.height - 180);
  g.textAlign = "center"; g.fillStyle = "#1f3a5f";
  g.font = "700 96px Cinzel, Georgia, serif"; g.fillText("CERTIFICATE", 1000, 300);
  g.font = "500 44px Cinzel, Georgia, serif"; g.fillStyle = "#b08d3c"; g.fillText("OF PARTICIPATION", 1000, 375);
  g.fillStyle = "#4a5560"; g.font = "36px 'Libre Baskerville', Georgia, serif";
  g.fillText("This certificate is proudly presented to", 1000, 540);
  g.strokeStyle = "#b08d3c"; g.lineWidth = 3;
  g.beginPath(); g.moveTo(520, 790); g.lineTo(1480, 790); g.stroke();
  g.font = "32px 'Libre Baskerville', Georgia, serif";
  g.fillText("for actively participating in the IT 31 Seminar 2026", 1000, 890);
  g.fillText("held on October 24, 2026", 1000, 945);
  g.beginPath(); g.moveTo(330, 1180); g.lineTo(780, 1180); g.moveTo(1220, 1180); g.lineTo(1670, 1180); g.stroke();
  g.font = "28px 'Instrument Sans', Arial, sans-serif";
  g.fillText("Event Organizer", 555, 1225); g.fillText("Program Director", 1445, 1225);
  return c;
}

// ---------- Names ----------
function parseNames() {
  const strip = $("stripNums").checked;
  return $("names").value.split(/\r?\n/)
    .map(l => l.split("\t")[0].trim())
    .map(l => strip ? l.replace(/^\s*(\d+|[a-zA-Z])[\.\)\-:]\s+/, "") : l)
    .map(l => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
function applyCase(name) {
  if (settings.caseMode === "upper") return name.toLocaleUpperCase();
  if (settings.caseMode === "title") return name.toLocaleLowerCase().replace(/(^|[\s\-'’.])(\p{L})/gu, (m, p, c) => p + c.toLocaleUpperCase());
  return name;
}

// ---------- Libraries loaded on first use ----------
// jsPDF and JSZip (about 460 KB) are only needed to export or send, so they
// load in the background once the page is idle instead of holding it up.
const LIBS = {
  jspdf: ["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", "sha384-JcnsjUPPylna1s1fvi1u12X5qjY5OL56iySh75FdtrwhO/SWXgMjoVqcKyIIWOLk"],
  jszip: ["https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", "sha384-+mbV2IY1Zk/X1p/nWllGySJSUN8uMs+gUAN10Or95UBH0fpj6GfKgPmgC5EXieXG"],
};
const libLoads = {};
function loadLib(name) {
  return libLoads[name] ||= new Promise((resolve, reject) => {
    const [src, integrity] = LIBS[name];
    const s = Object.assign(document.createElement("script"), { src, integrity, crossOrigin: "anonymous", referrerPolicy: "no-referrer" });
    s.onload = resolve;
    s.onerror = () => {
      delete libLoads[name]; s.remove();
      reject(Object.assign(new Error("The PDF tools couldn't load. Check your internet connection, then try again."), { code: "lib_failed" }));
    };
    document.head.appendChild(s);
  });
}
const loadLibs = names => Promise.all(names.map(loadLib));

// ---------- Drawing ----------
const GENERIC = { script: "cursive", serif: "serif", "sans-serif": "sans-serif", display: "sans-serif", monospace: "monospace" };
function fontFamilyCss() {
  const f = FONTS.find(x => x[0] === settings.font) || FONTS[0];
  return `"${f[0]}", ${GENERIC[f[1]]}`;
}

// Google Fonts stylesheet for one font, added once. `text` loads only those
// letters (the font list shows each name in its own font that way).
const fontSheets = {};
function fontSheet(name, text) {
  const f = FONTS.find(x => x[0] === name);
  if (!f) return Promise.resolve();
  const family = name.replace(/ /g, "+");
  const spec = text ? family
    : f[2] === "bi" ? `${family}:ital,wght@0,400;0,700;1,400;1,700`
    : f[2] === "b" ? `${family}:wght@400;700`
    : f[2] === "i" ? `${family}:ital@0;1` : family;
  const href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap` + (text ? `&text=${encodeURIComponent(text)}` : "");
  return fontSheets[href] ||= new Promise(resolve => {
    const link = Object.assign(document.createElement("link"), { rel: "stylesheet", href });
    link.onload = link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}
async function loadFont(name, italic = "normal", bold = "normal") {
  await fontSheet(name);
  try { await document.fonts.load(`${italic} ${bold} 40px "${name}"`, "AaBb"); } catch {}
}
function drawCertificate(g, img, name) {
  const W = img.width, H = img.height;
  g.clearRect(0, 0, W, H);
  g.drawImage(img, 0, 0, W, H);
  const text = applyCase(name);
  let px = (settings.size / 100) * H;
  const maxWidth = (settings.maxW / 100) * W;
  g.font = `${settings.italic} ${settings.bold} ${px}px ${fontFamilyCss()}`;
  const w = g.measureText(text).width;
  if (w > maxWidth) { px = px * maxWidth / w; g.font = `${settings.italic} ${settings.bold} ${px}px ${fontFamilyCss()}`; }
  g.fillStyle = settings.color;
  g.textAlign = settings.align;
  g.textBaseline = "middle";
  g.fillText(text, (settings.posX / 100) * W, (settings.posY / 100) * H);
  return { px, maxWidth };
}

function ensureFont() { return loadFont(settings.font, settings.italic, settings.bold); }

async function render() {
  if (!template) return;
  await ensureFont();
  const names = parseNames();
  if (current >= names.length) current = Math.max(0, names.length - 1);
  const name = names[current] || "Attendee Name";
  // Resizing a canvas reallocates it, so only do it when the template size changes.
  if (canvas.width !== template.width || canvas.height !== template.height) { canvas.width = template.width; canvas.height = template.height; }
  const { px, maxWidth } = drawCertificate(ctx, template, name);
  // Guide (preview only): dashed box showing the max width area
  const cx = settings.posX / 100 * canvas.width, cy = settings.posY / 100 * canvas.height;
  ctx.save();
  ctx.setLineDash([12, 10]); ctx.lineWidth = Math.max(2, canvas.width / 900);
  ctx.strokeStyle = "rgba(35,134,208,.85)";
  const boxLeft = settings.align === "left" ? cx : settings.align === "right" ? cx - maxWidth : cx - maxWidth / 2;
  ctx.strokeRect(boxLeft, cy - px * 0.7, maxWidth, px * 1.4);
  ctx.restore();
  $("who").innerHTML = names.length ? "<b></b>" : "No names yet";
  if (names.length) { const b = $("who").querySelector("b"); b.textContent = applyCase(name); $("who").title = applyCase(name); }
  $("pos").textContent = names.length ? `${current + 1} of ${names.length}` : "0 of 0";
  $("prev").disabled = current <= 0;
  $("next").disabled = current >= names.length - 1;
  markGallery();
  scheduleGallery();
}

// Typing and slider drags fire many input events per frame; draw once per frame.
let renderQueued = false;
function requestRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => { renderQueued = false; render(); });
}

// ---------- Gallery: one thumbnail per name ----------
let galleryTimer = null, galleryKey = "";
function scheduleGallery() {
  clearTimeout(galleryTimer);
  galleryTimer = setTimeout(buildGallery, 250);
}
async function buildGallery() {
  if (!template) return;
  const names = parseNames();
  const key = JSON.stringify([names, settings, template.width, template.height, usingSample ? 0 : template.src]);
  if (key === galleryKey) return;
  galleryKey = key;
  $("galleryTitle").textContent = `All certificates (${names.length})`;
  const box = $("gallery");
  box.textContent = "";
  const TW = 300, scale = TW / template.width, TH = Math.round(template.height * scale);
  for (let i = 0; i < names.length; i++) {
    if (key !== galleryKey) return; // a newer change started a rebuild
    const card = document.createElement("button");
    card.type = "button"; card.className = "card"; card.dataset.i = i;
    const c = document.createElement("canvas"); c.width = TW; c.height = TH;
    const g = c.getContext("2d"); g.scale(scale, scale);
    drawCertificate(g, template, names[i]);
    const label = document.createElement("span");
    label.textContent = `${i + 1}. ${applyCase(names[i])}`;
    card.append(c, label);
    card.addEventListener("click", async () => { const d = Math.sign(i - current); current = i; await render(); swapPreview(d); });
    card.style.animationDelay = `${Math.min(i, 16) * 35}ms`;
    box.appendChild(card);
    if (i === 3) fitGallery();
    if (i % 12 === 11) await tick();
  }
  markGallery();
  filterGallery();
}
function markGallery() {
  document.querySelectorAll("#gallery .card").forEach(c => c.classList.toggle("on", +c.dataset.i === current));
}

function updateCount() {
  const names = parseNames();
  const seen = new Set(), dups = new Set();
  names.forEach(n => { const k = n.toLowerCase(); if (seen.has(k)) dups.add(n); seen.add(k); });
  $("count").innerHTML = `<b>${names.length}</b> name${names.length === 1 ? "" : "s"} → <b>${names.length}</b> certificate${names.length === 1 ? "" : "s"}`;
  countTo($("tallyNames"), names.length); countTo($("tallyCerts"), names.length);
  $("exportBtn").textContent = `Download ${names.length} certificate${names.length === 1 ? "" : "s"}`;
  const hint = $("namesHint");
  if (dups.size) { hint.className = "warn"; hint.textContent = `Listed more than once: ${[...dups].slice(0, 4).join(", ")}${dups.size > 4 ? "…" : ""}`; }
  else { hint.className = "hint"; hint.textContent = "Paste one name per line, straight from Excel, Google Sheets or a chat."; }
  $("exportBtn").disabled = busy || !names.length;
  updateSteps();
}

function updateSteps() {
  const names = parseNames();
  const realNames = names.length && $("names").value.trim() !== SAMPLE_NAMES;
  $("stTemplate").classList.toggle("done", !usingSample);
  $("stNames").classList.toggle("done", !!realNames);
  $("stStyle").classList.toggle("done", !usingSample);
  $("stExport").classList.toggle("done", exportedOnce);
  $("stEmail").classList.toggle("done", recipients.length > 0);
  const t = $("tallyTpl");
  const label = usingSample ? "Sample" : "Ready";
  if (t.textContent !== label) { t.textContent = label; bump(t); }
  t.classList.toggle("ready", !usingSample);
}
function filterGallery() {
  const q = $("gallerySearch").value.trim().toLowerCase();
  document.querySelectorAll("#gallery .card").forEach(c => c.classList.toggle("hide", !!q && !c.textContent.toLowerCase().includes(q)));
  fitGallery();
}

// On phones the gallery shows at most three certificates and scrolls inside
// its card, instead of making the page as long as the list. Thumbnail height
// depends on the template, so the limit is measured from the third card.
const PHONE = matchMedia("(max-width: 760px)");
function fitGallery() {
  const box = $("gallery");
  const cards = [...box.querySelectorAll(".card:not(.hide)")];
  if (!PHONE.matches || cards.length <= 3) {
    box.style.maxHeight = "";
  } else {
    const third = cards[2];
    box.style.maxHeight = `${third.offsetTop + third.offsetHeight + parseFloat(getComputedStyle(box).paddingBottom)}px`;
  }
  fadeGallery();
}
// A soft fade at the bottom shows there are more certificates to scroll to.
function fadeGallery() {
  const box = $("gallery");
  box.classList.toggle("more-below", box.scrollHeight - box.clientHeight - box.scrollTop > 4);
}

function syncBadge() {
  const sampleNames = $("names").value.trim() === SAMPLE_NAMES;
  const parts = [];
  if (usingSample) parts.push("template");
  if (sampleNames) parts.push("names");
  $("sampleBadge").hidden = !parts.length;
  $("sampleBadge").textContent = "Sample " + parts.join(" & ");
}

// ---------- Controls ----------
function initControls() {
  const sel = $("font");
  FONTS.forEach(([name]) => { const o = document.createElement("option"); o.value = name; o.textContent = name; sel.appendChild(o); });
  const bind = (id, key, fmt) => {
    const el = $(id);
    el.value = settings[key];
    const out = $(id + "Val");
    const show = () => { if (out) out.textContent = fmt(settings[key]); };
    show();
    el.addEventListener("input", () => {
      settings[key] = el.type === "range" ? parseFloat(el.value) : el.value;
      show(); saveSettings(); requestRender();
    });
  };
  bind("font", "font");
  bind("size", "size", v => `(${v.toFixed(1)}% of height)`);
  bind("color", "color");
  bind("caseMode", "caseMode");
  bind("bold", "bold");
  bind("italic", "italic");
  bind("align", "align");
  bind("maxW", "maxW", v => `(${v}%)`);
  bind("posX", "posX", v => `(${v.toFixed(1)}%)`);
  bind("posY", "posY", v => `(${v.toFixed(1)}%)`);

  $("names").value = (() => { try { return localStorage.getItem(STORE_KEY + "-names") || SAMPLE_NAMES; } catch { return SAMPLE_NAMES; } })();
  $("names").addEventListener("input", () => {
    try { localStorage.setItem(STORE_KEY + "-names", $("names").value); } catch {}
    updateCount(); syncBadge(); requestRender();
  });
  $("names").addEventListener("focus", () => {
    if ($("names").value.trim() === SAMPLE_NAMES) $("names").select();
  });
  $("stripNums").addEventListener("change", () => { updateCount(); render(); });
  $("prev").addEventListener("click", async () => { current--; await render(); swapPreview(-1); });
  $("next").addEventListener("click", async () => { current++; await render(); swapPreview(1); });

  // Template upload
  const file = $("templateFile"), drop = $("drop");
  file.addEventListener("change", () => file.files[0] && loadTemplate(file.files[0]));
  ["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("over"); }));
  drop.addEventListener("drop", e => { const f = e.dataTransfer.files[0]; if (f) loadTemplate(f); });

  // Drag-to-position on the preview
  const moveTo = e => {
    const r = canvas.getBoundingClientRect();
    settings.posX = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100));
    settings.posY = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
    $("posX").value = settings.posX; $("posY").value = settings.posY;
    $("posXVal").textContent = `(${settings.posX.toFixed(1)}%)`;
    $("posYVal").textContent = `(${settings.posY.toFixed(1)}%)`;
    render();
  };
  // Mouse and pen drag right away. A finger has to press and hold first, so
  // swiping across the preview scrolls the page instead of moving the name.
  let hold = null;
  const startDrag = e => { dragging = true; canvas.classList.add("dragging"); canvas.setPointerCapture(e.pointerId); moveTo(e); };
  const endDrag = () => {
    if (hold) { clearTimeout(hold.timer); hold = null; }
    if (dragging) { dragging = false; canvas.classList.remove("dragging"); saveSettings(); }
  };
  canvas.addEventListener("pointerdown", e => {
    if (e.pointerType !== "touch") { startDrag(e); return; }
    hold = { x: e.clientX, y: e.clientY, timer: setTimeout(() => { hold = null; navigator.vibrate?.(10); startDrag(e); }, 350) };
  });
  canvas.addEventListener("pointermove", e => {
    if (hold && Math.hypot(e.clientX - hold.x, e.clientY - hold.y) > 8) endDrag();   // it's a scroll
    else if (dragging) moveTo(e);
  });
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
  canvas.addEventListener("contextmenu", e => { if (dragging || hold) e.preventDefault(); });
  // Once a finger is dragging the name, keep the page from scrolling under it.
  canvas.addEventListener("touchmove", e => { if (dragging) e.preventDefault(); }, { passive: false });

  // Sliders: on a phone a swipe that starts on a slider is usually a scroll.
  // If the page scrolls (pointercancel) or the finger moves more up/down than
  // sideways, put the slider back where it was.
  document.querySelectorAll('input[type="range"]').forEach(r => {
    let start = null;
    const restore = () => {
      if (!start) return;
      if (r.value !== start.value) { r.value = start.value; r.dispatchEvent(new Event("input")); }
      start = null;
    };
    r.addEventListener("pointerdown", e => { start = e.pointerType === "touch" ? { value: r.value, x: e.clientX, y: e.clientY } : null; });
    r.addEventListener("pointermove", e => {
      if (start && Math.abs(e.clientY - start.y) > 10 && Math.abs(e.clientY - start.y) > Math.abs(e.clientX - start.x)) restore();
    });
    r.addEventListener("pointercancel", restore);
    r.addEventListener("pointerup", () => { start = null; });
  });

  const chosenFormat = () => (document.querySelector('input[name="fmt"]:checked') || {}).value || "pdf";
  $("exportBtn").addEventListener("click", () => runExport(chosenFormat()));
  $("gallerySearch").addEventListener("input", filterGallery);
  $("gallery").addEventListener("scroll", fadeGallery, { passive: true });
  let fitTimer = null;
  window.addEventListener("resize", () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitGallery, 150); });
}

function loadTemplate(f) {
  if (!/^image\/(png|jpeg|webp)$/.test(f.type)) {
    setStatus("That file isn't a PNG or JPG. In Canva, download the certificate as PNG and upload that file.");
    return;
  }
  const url = URL.createObjectURL(f);
  const img = new Image();
  img.onload = () => {
    template = img; usingSample = false;
    flashPreview();
    $("dropTitle").textContent = `${f.name} · ${img.width}×${img.height}px`;
    if (img.width < 1500) setStatus("Tip: this image is small. Export from Canva at 2× size for sharper prints.");
    else setStatus("Template loaded. Drag on the preview to place the name.");
    syncBadge(); updateSteps(); render();
  };
  img.onerror = () => setStatus("The image couldn't be opened. Try exporting it again from Canva as PNG.");
  img.src = url;
}

// ---------- Export ----------
function setStatus(t) { $("status").textContent = t; }
function setProgress(frac) {
  $("progress").hidden = frac == null;
  $("progress").firstElementChild.style.width = `${Math.round((frac || 0) * 100)}%`;
}
const tick = () => new Promise(r => setTimeout(r, 0));
function safeName(n) { return n.replace(/[\\/:*?"<>|]+/g, "").replace(/\s+/g, " ").trim().slice(0, 120) || "Attendee"; }
function canvasBlob(c, type, q) { return new Promise(r => c.toBlob(r, type, q)); }

async function runExport(kind) {
  const names = parseNames();
  if (!names.length || !template) return;
  const downloads = await claude.use("downloads");
  if (!downloads) { setStatus("Downloads aren't available in this view. Open this page in claude.ai to save files."); return; }

  busy = true; updateCount();
  await ensureFont();
  const W = template.width, H = template.height;
  const off = document.createElement("canvas"); off.width = W; off.height = H;
  const g = off.getContext("2d");
  const orient = W >= H ? "landscape" : "portrait";
  let blob, filename;
  try {
    await loadLibs(kind === "pdf" ? ["jspdf"] : ["jspdf", "jszip"]);
    const { jsPDF } = window.jspdf;
    const usedNames = new Map();
    const uniqueFile = n => { const base = safeName(applyCase(n)); const c = (usedNames.get(base) || 0) + 1; usedNames.set(base, c); return c > 1 ? `${base} (${c})` : base; };

    if (kind === "pdf") {
      const doc = new jsPDF({ orientation: orient, unit: "px", format: [W, H], hotfixes: ["px_scaling"], compress: true });
      for (let i = 0; i < names.length; i++) {
        drawCertificate(g, template, names[i]);
        if (i > 0) doc.addPage([W, H], orient);
        doc.addImage(off.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, W, H);
        setProgress((i + 1) / names.length); setStatus(`Creating certificate ${i + 1} of ${names.length}…`); await tick();
      }
      blob = doc.output("blob"); filename = "IT 31 Certificates.pdf";
    } else {
      const zip = new JSZip();
      for (let i = 0; i < names.length; i++) {
        drawCertificate(g, template, names[i]);
        const fname = uniqueFile(names[i]);
        if (kind === "pngzip") {
          zip.file(`Certificate - ${fname}.png`, await canvasBlob(off, "image/png"));
        } else {
          const doc = new jsPDF({ orientation: orient, unit: "px", format: [W, H], hotfixes: ["px_scaling"], compress: true });
          doc.addImage(off.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, W, H);
          zip.file(`Certificate - ${fname}.pdf`, doc.output("blob"));
        }
        setProgress((i + 1) / names.length); setStatus(`Creating certificate ${i + 1} of ${names.length}…`); await tick();
      }
      setStatus("Packing the zip file…"); await tick();
      blob = await zip.generateAsync({ type: "blob" });
      filename = kind === "pngzip" ? "IT 31 Certificates (PNG).zip" : "IT 31 Certificates (PDF).zip";
    }
    setStatus("Confirm the download to save your file.");
    await downloads.save({ filename, data: blob });
    exportedOnce = true; updateSteps();
    celebrate($("exportBtn"));
    setStatus(`Saved ${names.length} certificate${names.length === 1 ? "" : "s"} (one for each name in your list) as ${filename}.`);
  } catch (e) {
    const code = e && e.code;
    if (code === "lib_failed") setStatus(e.message);
    else if (code === "declined") setStatus("Download cancelled. Click a download button to try again.");
    else if (code === "rate_limited") setStatus("A download prompt is already open. Finish it, then try again.");
    else if (code === "too_large") setStatus("The file is too large for this view. Try separate PDFs or a smaller template image.");
    else setStatus("The download couldn't be saved here. Open this page in claude.ai and try again.");
  } finally {
    busy = false; setProgress(null); updateCount();
  }
}

// ---------- Custom dropdowns (glass style, keyboard friendly) ----------
function enhanceSelect(sel, fontPreview) {
  sel.hidden = true;
  const wrap = document.createElement("div"); wrap.className = "dd";
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "dd-btn"; btn.id = sel.id + "Btn";
  btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
  const list = document.createElement("ul");
  list.className = "dd-list" + (fontPreview ? " fonts" : ""); list.setAttribute("role", "listbox"); list.hidden = true;
  const lbl = document.querySelector(`label[for="${sel.id}"]`);
  if (lbl) { lbl.htmlFor = btn.id; lbl.id = sel.id + "Lbl"; list.setAttribute("aria-labelledby", lbl.id); }
  let active = 0;
  // The font list is long: a search box on top, and each name shown in its
  // own font once it scrolls into view (only the letters of the name load).
  let search = null;
  if (fontPreview) {
    const li = document.createElement("li");
    li.className = "dd-search"; li.setAttribute("role", "presentation");
    search = Object.assign(document.createElement("input"), { type: "search", placeholder: "Search fonts", autocomplete: "off" });
    search.setAttribute("aria-label", "Search fonts");
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      items.forEach(li => { li.hidden = !!q && !li.dataset.value.toLowerCase().includes(q); });
      setActive(0);
    });
    // Arrow keys, Enter and Escape work from the search box too.
    search.addEventListener("keydown", e => {
      if (!["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) return;
      e.preventDefault();
      btn.dispatchEvent(new KeyboardEvent("keydown", { key: e.key }));
      if (e.key === "Escape") btn.focus();
    });
    li.appendChild(search); list.appendChild(li);
  }
  const preview = fontPreview && "IntersectionObserver" in window && new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const name = en.target.dataset.value;
    preview.unobserve(en.target);
    fontSheet(name, name).then(() => { en.target.style.fontFamily = `"${name}", var(--font-body)`; });
  }), { root: list, rootMargin: "120px 0px" });
  const items = [...sel.options].map(o => {
    const li = document.createElement("li");
    li.setAttribute("role", "option"); li.dataset.value = o.value; li.textContent = o.textContent;
    if (preview) preview.observe(li);
    li.addEventListener("click", () => choose(o.value));
    li.addEventListener("mousemove", () => setActive(shown().indexOf(li), false));
    list.appendChild(li);
    return li;
  });
  const shown = () => items.filter(li => !li.hidden);
  function setActive(i, scroll = true) {
    const vis = shown();
    if (!vis.length) return;
    active = (i + vis.length) % vis.length;
    items.forEach(li => li.classList.toggle("active", li === vis[active]));
    if (scroll) vis[active].scrollIntoView({ block: "nearest" });
  }
  function sync() {
    const o = sel.options[sel.selectedIndex];
    btn.textContent = o ? o.textContent : "";
    if (fontPreview) fontSheet(sel.value, sel.value).then(() => { btn.style.fontFamily = `"${sel.value}", var(--font-body)`; });
    items.forEach(li => li.setAttribute("aria-selected", String(li.dataset.value === sel.value)));
  }
  const outside = e => { if (!wrap.contains(e.target)) close(); };
  function open() {
    list.hidden = false; btn.setAttribute("aria-expanded", "true");
    wrap.closest(".step")?.classList.add("has-open");
    if (search) { search.value = ""; items.forEach(li => { li.hidden = false; }); }
    setActive(Math.max(0, sel.selectedIndex));
    // Focus the search with a mouse; on phones that would pop up the keyboard.
    if (search && matchMedia("(pointer: fine)").matches) search.focus();
    document.addEventListener("pointerdown", outside, true);
  }
  function close() {
    list.hidden = true; btn.setAttribute("aria-expanded", "false");
    wrap.closest(".step")?.classList.remove("has-open");
    document.removeEventListener("pointerdown", outside, true);
  }
  function choose(v) { sel.value = v; sel.dispatchEvent(new Event("input")); sync(); close(); btn.focus(); }
  btn.addEventListener("click", () => list.hidden ? open() : close());
  btn.addEventListener("keydown", e => {
    if (list.hidden) { if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) { e.preventDefault(); open(); } return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter" || (e.key === " " && e.target === btn)) { e.preventDefault(); const li = shown()[active]; if (li) choose(li.dataset.value); }
    else if (e.key === "Escape" || e.key === "Tab") close();
  });
  sel._sync = sync;
  wrap.append(btn, list); sel.after(wrap); sync();
}

// ---------- Email delivery ----------
const EMAIL_RE = /^[^\s@,;<>()\[\]"'`]+@[^\s@,;<>()\[\]"'`]+\.[^\s@,;<>()\[\]"'`.]{2,}$/;
let recipients = [];        // [{name, email}] when both lists match

function parseCsv(text) {
  text = text.replace(/^﻿/, "");
  const first = text.split(/\r?\n/)[0] || "";
  const delim = [",", ";", "\t"].sort((a, b) => first.split(b).length - first.split(a).length)[0];
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; }
      else f += c;
    } else if (c === '"') q = true;
    else if (c === delim) { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows.map(r => r.map(x => x.trim())).filter(r => r.some(Boolean));
}

function csvToLists(rows) {
  if (!rows.length) return null;
  const head = rows[0].map(h => h.toLowerCase());
  const hasHeader = !rows[0].some(c => c.includes("@")) && head.some(h => /name|e-?mail/.test(h));
  const body = hasHeader ? rows.slice(1) : rows;
  const cols = Math.max(...rows.map(r => r.length));
  let emailCol = hasHeader ? head.findIndex(h => /e-?mail/.test(h)) : -1;
  if (emailCol < 0) {
    let best = -1, bestN = 0;
    for (let c = 0; c < cols; c++) { const n = body.filter(r => (r[c] || "").includes("@")).length; if (n > bestN) { best = c; bestN = n; } }
    emailCol = best;
  }
  if (emailCol < 0) return null;
  const firstCol = hasHeader ? head.findIndex(h => /first/.test(h) && /name/.test(h)) : -1;
  const lastCol = hasHeader ? head.findIndex(h => /(last|sur)/.test(h) && /name/.test(h)) : -1;
  let nameCol = hasHeader ? head.findIndex((h, i) => i !== emailCol && /name/.test(h)) : -1;
  if (nameCol < 0) nameCol = [...Array(cols).keys()].find(c => c !== emailCol);
  const names = body.map(r => (firstCol >= 0 && lastCol >= 0) ? `${r[firstCol] || ""} ${r[lastCol] || ""}`.trim() : (r[nameCol] || ""));
  const emails = body.map(r => r[emailCol] || "");
  return { names, emails };
}

function cleanLines(text, isName) {
  const strip = $("stripNums").checked;
  return text.split(/\r?\n/).map(l => l.trim())
    .map(l => isName && strip ? l.replace(/^\s*(\d+|[a-zA-Z])[\.\)\-:]\s+/, "") : l)
    .map(l => isName ? l.replace(/\s+/g, " ") : cleanEmail(l))
    .filter(Boolean);
}

// Pulls the address out of a pasted line, so "Juan <juan@gmail.com>",
// "juan@gmail.com;" or "1. juan@gmail.com" all count as juan@gmail.com.
// Lines with no address are kept as they are, to be flagged.
function cleanEmail(line) {
  line = line.replace(/[​-‍⁠﻿­]/g, "").replace(/＠/g, "@").replace(/．/g, ".")
    .replace(/mailto:/gi, "").trim();
  const m = line.match(/[^\s@,;<>()\[\]"'`]+@[^\s@,;<>()\[\]"'`]+/);
  return m ? m[0].replace(/\.+$/, "") : line;
}

function certFileNames(names) {
  const used = new Map();
  return names.map(n => {
    const base = `IT 31 Certificate - ${safeName(applyCase(n))}`;
    const c = (used.get(base) || 0) + 1; used.set(base, c);
    return `${c > 1 ? `${base} (${c})` : base}.pdf`;
  });
}

function validateMail() {
  const names = cleanLines($("mailNames").value, true);
  const emails = cleanLines($("mailEmails").value, false);
  const nc = $("mailNamesCount"), ec = $("mailEmailsCount"), box = $("mailCheck");
  nc.textContent = `(${names.length})`; ec.textContent = `(${emails.length})`;
  const mismatch = names.length !== emails.length;
  nc.classList.toggle("bad", mismatch); ec.classList.toggle("bad", mismatch);
  recipients = [];
  box.className = "mail-check";
  const tbody = $("mailTable").querySelector("tbody");
  tbody.textContent = "";
  $("mailTableWrap").hidden = true;

  if (!names.length && !emails.length) {
    box.innerHTML = "";
  } else if (mismatch) {
    box.className = "mail-check bad";
    box.innerHTML = `<b>The lists don't match yet.</b><span>You have ${names.length} name${names.length === 1 ? "" : "s"} and ${emails.length} email address${emails.length === 1 ? "" : "es"}. Both lists need the same number of lines to continue.</span>`;
  } else {
    const bad = emails.map((e, i) => EMAIL_RE.test(e) ? null : i).filter(i => i !== null);
    const seen = new Map(); const dups = new Set();
    emails.forEach(e => { const k = e.toLowerCase(); if (seen.has(k)) dups.add(k); seen.set(k, 1); });
    const files = certFileNames(names);
    names.slice(0, 500).forEach((n, i) => {
      const tr = document.createElement("tr");
      if (bad.includes(i)) tr.className = "bad"; else if (dups.has(emails[i].toLowerCase())) tr.className = "dup";
      [i + 1, applyCase(n), emails[i], files[i]].forEach(v => { const td = document.createElement("td"); td.textContent = v; tr.appendChild(td); });
      if (mailServer) {
        const st = document.createElement("td"); st.className = "st";
        const saved = rowStates.get(`${n}|${emails[i].toLowerCase()}`);
        if (saved) { st.textContent = saved.text; st.dataset.state = saved.state; }
        tr.appendChild(st);
      }
      tbody.appendChild(tr);
    });
    $("mailTableWrap").hidden = false;
    if (bad.length) {
      box.className = "mail-check bad";
      const list = bad.slice(0, 5).map(i => `line ${i + 1} (${emails[i]})`).join(", ");
      box.innerHTML = `<b>Some email addresses look wrong.</b><span></span>`;
      box.querySelector("span").textContent = `Check ${list}${bad.length > 5 ? ` and ${bad.length - 5} more` : ""}. Fix them to continue.`;
    } else {
      recipients = names.map((n, i) => ({ name: n, email: emails[i] }));
      box.className = "mail-check ok";
      box.innerHTML = `<b>✓ ${names.length} attendee${names.length === 1 ? "" : "s"} matched to ${emails.length} email address${emails.length === 1 ? "" : "es"}.</b>` +
        `<small>The names list in step 2 now uses these attendees, so the certificates match.</small>` +
        (dups.size ? `<small>Note: ${dups.size} email address${dups.size === 1 ? " is" : "es are"} used for more than one person.</small>` : "");
      syncNamesFromRecipients();
    }
  }
  if (mailServer) { $("sendNow").disabled = $("checkEmails").disabled = sending || !recipients.length; $("sendNow").textContent = recipients.length ? `Send ${recipients.length} email${recipients.length === 1 ? "" : "s"}` : "Send emails"; }
}

function syncNamesFromRecipients() {
  const text = recipients.map(r => r.name).join("\n");
  if ($("names").value === text) return;
  $("names").value = text;
  $("names").dispatchEvent(new Event("input"));
}

// ---------- Sending through the Laravel app (routes/web.php) ----------
// Present only when the page is served by Laravel: the view adds the CSRF
// token and the two endpoints as <meta> tags.
const mailServer = (() => {
  const m = document.querySelector('meta[name="certificate-mail"]');
  const t = document.querySelector('meta[name="csrf-token"]');
  return m && t ? { send: m.content, check: m.dataset.check, token: t.content } : null;
})();
let sending = false, stopRequested = false;
const rowStates = new Map();   // "name|email" -> {state, text}, kept when the table is redrawn

function setRowStatus(i, state, text) {
  if (recipients[i]) rowStates.set(`${recipients[i].name}|${recipients[i].email.toLowerCase()}`, { state, text });
  const td = $("mailTable").querySelector(`tbody tr:nth-child(${i + 1}) td.st`);
  if (!td) return;
  td.textContent = text; td.dataset.state = state;
  if (state === "busy") td.closest("tr").scrollIntoView({ block: "nearest" });
}

async function serverPost(url, body) {
  const headers = { "X-CSRF-TOKEN": mailServer.token, "Accept": "application/json", "X-Requested-With": "XMLHttpRequest" };
  if (!(body instanceof FormData)) { headers["Content-Type"] = "application/json"; body = JSON.stringify(body); }
  const res = await fetch(url, { method: "POST", headers, body, credentials: "same-origin" });
  let data = {};
  try { data = await res.json(); } catch {}
  return { res, data };
}

const firstError = data => data && data.errors ? Object.values(data.errors).flat()[0] : (data && data.message) || "";
const wait = ms => new Promise(r => setTimeout(r, ms));

async function checkAddresses() {
  const { res, data } = await serverPost(mailServer.check, { emails: recipients.map(r => r.email) });
  if (!res.ok) throw new Error(res.status === 429 ? "Too many checks in a row. Wait a minute and try again." : (firstError(data) || "The addresses couldn't be checked."));
  const bad = [];
  data.results.forEach((r, i) => {
    if (r.status === "available") setRowStatus(i, "ok", "Can receive mail");
    else { setRowStatus(i, "bad", r.status === "missing" ? "No mail server for this domain" : "Not a valid address"); bad.push(i); }
  });
  return bad;
}

async function batchId() {
  if (!$("skipSent").checked) return (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
  const text = [$("mailSubject").value, ...recipients.map(r => `${r.name}|${r.email.toLowerCase()}`)].join("\n");
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 40);
  } catch { return "list-" + text.length + "-" + recipients.length; }
}

function setSending(on) {
  sending = on;
  ["mailNames", "mailEmails", "csvFile", "mailSubject", "mailBody", "mailFrom", "skipSent"].forEach(id => $(id).disabled = on);
  $("stopSend").hidden = !on;
  $("sendProgress").hidden = !on;
  validateMail();
}

async function sendAll() {
  if (sending || !recipients.length || !template) return;
  const status = $("sendStatus"), bar = $("sendProgress").firstElementChild;
  const list = recipients.slice();
  stopRequested = false;
  setSending(true);
  bar.style.width = "0";
  let sent = 0, skipped = 0, failed = 0, failedInARow = 0;
  try {
    status.textContent = "Checking every email address…";
    const bad = await checkAddresses();
    if (bad.length) {
      status.textContent = `${bad.length} address${bad.length === 1 ? " can't" : "es can't"} receive mail (line ${bad.slice(0, 5).map(i => i + 1).join(", ")}${bad.length > 5 ? ", …" : ""}). Fix ${bad.length === 1 ? "it" : "them"} in the list, then press Send again. Nothing was sent.`;
      return;
    }
    const batch = await batchId();
    await ensureFont();
    const W = template.width, H = template.height, orient = W >= H ? "landscape" : "portrait";
    const off = document.createElement("canvas"); off.width = W; off.height = H;
    const g = off.getContext("2d");
    await loadLibs(["jspdf"]);
    const { jsPDF } = window.jspdf;
    const files = certFileNames(list.map(r => r.name));

    for (let i = 0; i < list.length; i++) {
      if (stopRequested) break;
      setRowStatus(i, "busy", "Sending…");
      status.textContent = `Sending ${i + 1} of ${list.length} to ${list[i].email}…`;
      drawCertificate(g, template, list[i].name);
      const doc = new jsPDF({ orientation: orient, unit: "px", format: [W, H], hotfixes: ["px_scaling"], compress: true });
      doc.addImage(off.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, W, H);
      const fd = new FormData();
      fd.append("batch", batch);
      fd.append("name", applyCase(list[i].name));
      fd.append("email", list[i].email);
      fd.append("subject", $("mailSubject").value.trim() || "Your certificate");
      fd.append("message", $("mailBody").value.trim() || "Your certificate is attached.");
      fd.append("sender_name", $("mailFrom").value.trim());
      fd.append("file_name", files[i]);
      fd.append("certificate", new File([doc.output("blob")], files[i], { type: "application/pdf" }));

      let res, data, retried = false;
      for (;;) {
        ({ res, data } = await serverPost(mailServer.send, fd));
        // A mail server hiccup (500/503) usually passes; try that person once more.
        if (res.status >= 500 && !retried && !stopRequested) {
          retried = true;
          setRowStatus(i, "busy", "Retrying…");
          await wait(5000);
          continue;
        }
        if (res.status !== 429 || stopRequested) break;
        const secs = Math.max(5, parseInt(res.headers.get("Retry-After") || "60", 10));
        for (let s = secs; s > 0 && !stopRequested; s--) {
          setRowStatus(i, "busy", `Waiting ${s}s`);
          status.textContent = `Sending limit reached. Continuing in ${s} seconds…`;
          await wait(1000);
        }
      }
      if (res.status === 419) {
        setRowStatus(i, "bad", "Not sent");
        status.textContent = "The page session expired. Reload the page and press Send again. People already sent will be skipped.";
        return;
      }
      if (res.ok && data.status === "sent") { sent++; failedInARow = 0; setRowStatus(i, "ok", "Sent ✓"); }
      else if (res.ok && data.status === "skipped") { skipped++; failedInARow = 0; setRowStatus(i, "skip", "Already sent"); }
      else if (res.status === 429) { setRowStatus(i, "skip", "Stopped"); break; }
      else { failed++; failedInARow++; setRowStatus(i, "bad", firstError(data) || "Failed"); }
      bar.style.width = `${Math.round((i + 1) / list.length * 100)}%`;
      if (failedInARow >= 3) {
        status.textContent = "Sending stopped after 3 failures in a row. Check the mail settings in .env, then press Send again. People already sent will be skipped.";
        return;
      }
    }
    const parts = [`Sent ${sent}`];
    if (skipped) parts.push(`already sent ${skipped}`);
    if (failed) parts.push(`failed ${failed}`);
    status.textContent = (stopRequested ? "Stopped. " : "Done. ") + parts.join(" · ") + "." + (failed ? " Press Send again to retry the failed ones." : "");
    if (sent && !failed && !stopRequested) celebrate($("sendNow"));
  } catch (e) {
    status.textContent = (e && e.message) || "Sending stopped because the server couldn't be reached. Make sure php artisan serve is running.";
  } finally {
    setSending(false);
  }
}

function initServerSend() {
  if (!mailServer) return;
  $("sendNow").addEventListener("click", sendAll);
  $("stopSend").addEventListener("click", () => { stopRequested = true; $("sendStatus").textContent = "Stopping after the current email…"; });
  $("checkEmails").addEventListener("click", async () => {
    $("checkEmails").disabled = true;
    try {
      const bad = await checkAddresses();
      $("sendStatus").textContent = bad.length ? `${bad.length} address${bad.length === 1 ? "" : "es"} can't receive mail. They're marked in the table.` : `All ${recipients.length} addresses can receive mail.`;
    } catch (e) { $("sendStatus").textContent = e.message || "The addresses couldn't be checked."; }
    finally { validateMail(); }
  });
}

function initMail() {
  const tabs = [["tabCsv", "paneCsv"], ["tabPaste", "panePaste"]];
  const show = id => tabs.forEach(([t, p]) => { const on = t === id; $(t).setAttribute("aria-selected", String(on)); $(p).hidden = !on; });
  tabs.forEach(([t]) => $(t).addEventListener("click", () => show(t)));

  const loadCsv = f => {
    const rd = new FileReader();
    rd.onload = () => {
      const lists = csvToLists(parseCsv(String(rd.result)));
      if (!lists) { $("csvTitle").textContent = "Upload a CSV file"; $("mailCheck").className = "mail-check bad"; $("mailCheck").innerHTML = "<b>No email column found.</b><span>Make sure the file has one column of names and one column of email addresses.</span>"; return; }
      $("mailNames").value = lists.names.join("\n");
      $("mailEmails").value = lists.emails.join("\n");
      $("csvTitle").textContent = `${f.name} · ${lists.names.length} rows`;
      validateMail();
      show("tabPaste");
    };
    rd.onerror = () => { $("mailCheck").className = "mail-check bad"; $("mailCheck").innerHTML = "<b>The file couldn't be read.</b><span>Save it again as CSV and upload it.</span>"; };
    rd.readAsText(f);
  };
  const cf = $("csvFile"), cd = $("csvDrop");
  cf.addEventListener("change", () => cf.files[0] && loadCsv(cf.files[0]));
  ["dragenter", "dragover"].forEach(ev => cd.addEventListener(ev, e => { e.preventDefault(); cd.classList.add("over"); }));
  ["dragleave", "drop"].forEach(ev => cd.addEventListener(ev, e => { e.preventDefault(); cd.classList.remove("over"); }));
  cd.addEventListener("drop", e => { const f = e.dataTransfer.files[0]; if (f) loadCsv(f); });

  let t = null;
  ["mailNames", "mailEmails"].forEach(id => $(id).addEventListener("input", () => { clearTimeout(t); t = setTimeout(validateMail, 200); }));
  validateMail();
}

// ---------- Motion helpers ----------
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function bump(el) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
function countTo(el, target) {
  const from = parseInt(el.textContent, 10) || 0;
  if (from === target) return;
  if (reduceMotion()) { el.textContent = target; return; }
  cancelAnimationFrame(el._raf);
  const t0 = performance.now(), dur = 600;
  const step = now => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(from + (target - from) * e);
    if (k < 1) el._raf = requestAnimationFrame(step); else bump(el);
  };
  el._raf = requestAnimationFrame(step);
}
function swapPreview(dir) {
  if (reduceMotion() || !canvas.animate) return;
  canvas.animate([
    { opacity: .35, transform: `translateX(${dir * 22}px) scale(.985)`, filter: "blur(3px)" },
    { opacity: 1, transform: "none", filter: "none" }
  ], { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" });
}
function flashPreview() {
  const box = document.querySelector(".canvas-box");
  box.classList.remove("flash"); void box.offsetWidth; box.classList.add("flash");
  swapPreview(0);
}
function celebrate(btn) {
  const old = btn.textContent;
  btn.classList.add("saved"); btn.textContent = "Saved ✓";
  setTimeout(() => { btn.classList.remove("saved"); updateCount(); }, 1800);
  if (reduceMotion()) return;
  const r = btn.getBoundingClientRect();
  const c = document.createElement("canvas");
  c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:200";
  const dpr = window.devicePixelRatio || 1;
  c.width = innerWidth * dpr; c.height = innerHeight * dpr;
  document.body.appendChild(c);
  const g = c.getContext("2d"); g.scale(dpr, dpr);
  const cs = getComputedStyle(document.documentElement);
  const colors = ["--accent", "--btn-1", "--btn-2"].map(v => cs.getPropertyValue(v).trim()).concat("#ffffff");
  const parts = Array.from({ length: 90 }, () => {
    const a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.1, v = 5 + Math.random() * 8;
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
      w: 4 + Math.random() * 5, h: 7 + Math.random() * 7, rot: Math.random() * 6, vr: (Math.random() - .5) * .35,
      col: colors[(Math.random() * colors.length) | 0] };
  });
  const t0 = performance.now();
  (function frame(now) {
    const k = (now - t0) / 1500;
    g.clearRect(0, 0, innerWidth, innerHeight);
    g.globalAlpha = Math.max(0, 1 - k * k);
    for (const p of parts) {
      p.vy += .28; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.fillStyle = p.col; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 2))); g.restore();
    }
    if (k < 1) requestAnimationFrame(frame); else c.remove();
  })(t0);
}
// Pointer spotlight on glass panels
document.addEventListener("pointermove", e => {
  const el = e.target.closest && e.target.closest(".step, .stage, .gallery-section, .tally, .mail-section");
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}, { passive: true });

// ---------- Light / dark mode ----------
// Follows the device setting until the toggle is used; the choice is saved
// and applied early by theme.js on the next visit.
function initTheme() {
  const btn = $("themeToggle"), root = document.documentElement, prefersDark = matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : prefersDark.matches;
  const sync = () => {
    const dark = isDark();
    btn.dataset.mode = dark ? "dark" : "light";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.title = btn.getAttribute("aria-label");
  };
  btn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("autocert-theme", root.dataset.theme); } catch {}
    sync();
  });
  prefersDark.addEventListener("change", sync);
  sync();
}

// ---------- Boot ----------
initTheme();
initControls();
enhanceSelect($("font"), true);
enhanceSelect($("caseMode"));
enhanceSelect($("bold"));
enhanceSelect($("italic"));
enhanceSelect($("align"));
initServerSend();
initMail();
template = makeSampleTemplate();
updateCount(); syncBadge();
document.fonts.ready.then(() => { template = usingSample ? makeSampleTemplate() : template; render(); });
render();
window.addEventListener("load", () => (window.requestIdleCallback || setTimeout)(() => loadLibs(["jspdf", "jszip"]).catch(() => {}), { timeout: 3000 }));
