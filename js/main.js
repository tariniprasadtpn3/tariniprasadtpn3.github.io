/* ============================================================
   Tarini Prasad Naik — portfolio behaviour
   ------------------------------------------------------------
   EVERYTHING YOU EDIT REGULARLY LIVES IN THE `DATA` BLOCK BELOW.
   Add a real image by giving an item a `src`; leave `src` off
   and a generated placeholder is drawn instead.
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   1. DATA  —  edit me
   ══════════════════════════════════════════════════════════ */

const DATA = {

  /* Typed strings under the hero headline (professional mode) */
  typed: [
    'python · crewai · n8n · airflow',
    'agents that do the boring half',
    'ETL that survives Monday morning',
    'ex-networking, now GenAI',
    'photographer after 6pm'
  ],

  /* Skills — group must be one of: lang | ai | data | ops
     (the filter buttons). Shown as plain tags: no self-rated levels.  */
  skills: [
    { name: 'Python', group: 'lang' },
    { name: 'Go', group: 'lang' },
    { name: 'SQL', group: 'lang' },
    { name: 'Shell / Bash', group: 'lang' },
    { name: 'CrewAI', group: 'ai' },
    { name: 'Multi-agent systems', group: 'ai' },
    { name: 'n8n', group: 'ai' },
    { name: 'LLM integration', group: 'ai' },
    { name: 'Prompt engineering', group: 'ai' },
    { name: 'Copilot / Direct Line', group: 'ai' },
    { name: 'Rule engines', group: 'ai' },
    { name: 'Workflow automation', group: 'ai' },
    { name: 'AI image generation', group: 'ai' },
    { name: 'Character consistency', group: 'ai' },
    { name: 'Apache Airflow', group: 'data' },
    { name: 'Spark / Scala', group: 'data' },
    { name: 'StreamSets', group: 'data' },
    { name: 'Google OCR', group: 'data' },
    { name: 'Synthetic data generation', group: 'data' },
    { name: 'ML model training & inference', group: 'data' },
    { name: 'Data augmentation', group: 'data' },
    { name: 'Backend APIs', group: 'data' },
    { name: 'Keepa API', group: 'data' },
    { name: 'Docker', group: 'ops' },
    { name: 'Linux', group: 'ops' },
    { name: 'Git / GitLab', group: 'ops' },
    { name: 'Selenium', group: 'ops' },
    { name: 'pytest', group: 'ops' },
    { name: 'BDD / Gherkin', group: 'ops' }
  ],

  /* Photography — drop files in assets/photos/ and add `src`.
     cat must be one of the filter buttons: street|nature|portrait|night
     ratio is width/height and keeps the masonry tidy before load.   */
  photos: [
    { title: 'Charminar, 6:40am',   meta: 'Hyderabad · 35mm',      cat: 'street',   ratio: 0.75, hue: 24 },
    { title: 'Monsoon ridge',       meta: 'Araku Valley',          cat: 'nature',   ratio: 1.5,  hue: 152 },
    { title: 'The tea seller',      meta: 'Bhubaneswar',           cat: 'portrait', ratio: 0.8,  hue: 12 },
    { title: 'Long exposure, NH16', meta: '20s · f/11',            cat: 'night',    ratio: 1.6,  hue: 258 },
    { title: 'Steps at dawn',       meta: 'Golconda Fort',         cat: 'nature',   ratio: 0.72, hue: 40 },
    { title: 'Wires and sky',       meta: 'Secunderabad',          cat: 'street',   ratio: 1.35, hue: 200 },
    { title: 'Grandmother',         meta: 'Odisha · 50mm',         cat: 'portrait', ratio: 0.78, hue: 30 },
    { title: 'City after rain',     meta: 'Hitec City',            cat: 'night',    ratio: 1.45, hue: 285 },
    { title: 'Above the treeline',  meta: 'somewhere steep',       cat: 'nature',   ratio: 0.85, hue: 172 },
    { title: 'Sunday market',       meta: 'Begum Bazaar',          cat: 'street',   ratio: 1.4,  hue: 8 },
    { title: 'Blue hour bridge',    meta: 'Durgam Cheruvu',        cat: 'night',    ratio: 0.9,  hue: 222 },
    { title: 'Fisherman',           meta: 'Chilika Lake',          cat: 'portrait', ratio: 1.3,  hue: 190 }
  ],

  /* AI Comics — "The Invisible Hero", published on WEBTOON Canvas.
     Every episode is prompt-generated, not drawn.

     `pages` can be either:
       - a string path to an exported page, e.g. 'assets/comics/ch1/p1.jpg'
       - or a generated placeholder: { layout: 'splash'|'2x2'|'1+2'|'3-strip' }
     Placeholder panels are deliberately left without dialogue — the real
     script lives on WEBTOON, and inventing lines for it would be wrong.
     `link` points at the episode; leave it as the series URL until you have
     per-episode links.                                                        */
  series: {
    title: 'The Invisible Hero',
    url: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760'
  },

  comics: [
    {
      title: 'Chapter 1: The Awakening',
      sub: 'Dec 17, 2025',
      hue: 265,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: 'splash' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 2: Rise of Fani',
      sub: 'Dec 22, 2025',
      hue: 200,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '1+2' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 3: Rise of Chamoli',
      sub: 'Dec 30, 2025',
      hue: 190,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '2x2' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 4: Rise of Corona',
      sub: 'Feb 21, 2026',
      hue: 150,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '3-strip' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 5: Srisailam',
      sub: 'Mar 5, 2026',
      hue: 32,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: 'splash' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 6: The Trident of Maharastra — Part 1',
      sub: 'Mar 26, 2026',
      hue: 20,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '1+2' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 6: The Trident of Maharastra — Part 2',
      sub: 'Apr 28, 2026',
      hue: 12,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '2x2' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 6: The Trident of Maharastra — Part 3',
      sub: 'May 18, 2026',
      hue: 5,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '3-strip' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 7: Dhanushkodi — The Last Land of India',
      sub: 'Jul 20, 2026',
      hue: 42,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: 'splash' }, { layout: '2x2' } ]
    },
    {
      title: 'Chapter 8: Doomsday — Part 1',
      sub: 'Aug 9, 2026',
      hue: 280,
      link: 'https://www.webtoons.com/en/canvas/the-invisible-hero-/list?title_no=1108760',
      pages: [ { layout: 'splash' }, { layout: '1+2' }, { layout: '2x2' } ]
    }
  ],

  /* Travel — x/y are percentages on the stylised map (0-100).  */
  trips: [
    { place: 'Araku Valley',   when: 'Aug 2023', note: 'Coffee hills, one very slow train, endless green.', x: 62, y: 40, hue: 150 },
    { place: 'Bhubaneswar',    when: 'Home',     note: 'Temples, my college, and the best street food argument in India.', x: 70, y: 46, hue: 26 },
    { place: 'Chilika Lake',   when: 'Dec 2022', note: 'Dawn boat out to the sandbar. Migratory birds everywhere.', x: 73, y: 53, hue: 192 },
    { place: 'Hyderabad',      when: 'Living',   note: 'Old city mornings, rock formations at the edge of town.', x: 52, y: 48, hue: 40 },
    { place: 'Gandikota',      when: 'Feb 2024', note: 'The gorge. Camped on the rim, woke up to fog in the canyon.', x: 48, y: 62, hue: 18 },
    { place: 'Coorg',          when: 'Jun 2023', note: 'Rain the whole time. Would do it again immediately.', x: 40, y: 72, hue: 132 },
    { place: 'Vizag Coast',    when: 'Nov 2022', note: 'Road along the sea, stopped at every viewpoint.', x: 66, y: 36, hue: 205 },
    { place: 'Konark',         when: 'Jan 2023', note: 'Stone wheels, and a sunrise worth the 4am alarm.', x: 76, y: 48, hue: 34 },
    { place: 'Munnar',         when: 'Apr 2025', note: 'Tea terraces to the horizon. Highest I have walked so far.', x: 36, y: 82, hue: 160 }
  ]
};

/* ══════════════════════════════════════════════════════════
   2. helpers
   ══════════════════════════════════════════════════════════ */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* A deterministic gradient placeholder, so the same item always
   looks the same between reloads. */
function placeholder(hue, label, ratio) {
  const h2 = (hue + 42) % 360;
  const style = [
    `--c1:hsl(${hue} 62% 46%)`,
    `--c2:hsl(${h2} 58% 26%)`,
    `--a:${(hue % 8) * 26 + 120}deg`,
    ratio ? `aspect-ratio:${ratio}` : ''
  ].filter(Boolean).join(';');
  return `<span class="ph" style="${style}">${label ? `<span class="ph-tag">${label}</span>` : ''}</span>`;
}

/* Either a real <img> or the placeholder. */
function media(item, label) {
  if (item.src) {
    const r = item.ratio ? ` style="aspect-ratio:${item.ratio}"` : '';
    return `<img src="${item.src}" alt="${item.alt || item.title || ''}" loading="lazy"${r} />`;
  }
  return placeholder(item.hue ?? 210, label, item.ratio);
}

/* ══════════════════════════════════════════════════════════
   3. mode + theme
   ══════════════════════════════════════════════════════════ */

const root = document.documentElement;
const store = {
  get(k, fallback) { try { return localStorage.getItem(k) || fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } }
};

function setMode(mode, { animate = true } = {}) {
  if (mode !== 'pro' && mode !== 'play') mode = 'pro';
  if (root.dataset.mode === mode && animate) return;

  root.dataset.mode = mode;
  store.set('tpn-mode', mode);
  $$('.mode-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setMode === mode)));

  if (animate && !reduced) {
    document.body.classList.remove('mode-swapping', 'mode-flash');
    void document.body.offsetWidth;          /* restart the animations */
    document.body.classList.add('mode-swapping', 'mode-flash');
    setTimeout(() => document.body.classList.remove('mode-swapping', 'mode-flash'), 700);
  }
  if (animate) window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });

  closeMenu();
  replayReveals();
  runMeters();
  startTyping();
}

function setTheme(theme) {
  root.dataset.theme = theme;
  store.set('tpn-theme', theme);
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f7fb' : '#0b0f16');
}

/* The inline script in <head> has already stamped the stored mode and
   theme onto <html>, so there is no flash. Section 13 syncs the UI to it
   once every element below has been declared. */

document.addEventListener('click', e => {
  const setBtn = e.target.closest('[data-set-mode]');
  if (setBtn) { setMode(setBtn.dataset.setMode); return; }
  if (e.target.closest('[data-toggle-mode]')) {
    setMode(root.dataset.mode === 'pro' ? 'play' : 'pro');
  }
});

$('#themeToggle').addEventListener('click', () => {
  setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
});

/* ══════════════════════════════════════════════════════════
   4. header: menu, scroll state, progress, scrollspy
   ══════════════════════════════════════════════════════════ */

const header = $('#siteHeader');
const nav = $('#siteNav');
const menuBtn = $('#menuBtn');

function closeMenu() {
  nav.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('is-locked');
}
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });

const progress = $('#progressBar');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? clamp(y / max, 0, 1) * 100 : 0) + '%';
    header.classList.toggle('is-stuck', y > 12);
    spy();
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

function spy() {
  const links = $$(`.nav-list[data-nav="${root.dataset.mode}"] a`);
  let current = links[0];
  links.forEach(a => {
    const target = document.getElementById(a.hash.slice(1));
    if (target && target.getBoundingClientRect().top <= 140) current = a;
  });
  links.forEach(a => a.classList.toggle('is-active', a === current));
}

/* pointer spotlight */
if (!reduced && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', e => {
    root.style.setProperty('--mx', e.clientX + 'px');
    root.style.setProperty('--my', e.clientY + 'px');
  }, { passive: true });
} else {
  $('#spotlight').remove();
}

/* ══════════════════════════════════════════════════════════
   5. reveal on scroll + counters + meters
   ══════════════════════════════════════════════════════════ */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    revealObserver.unobserve(entry.target);
    if (entry.target.classList.contains('hero-stats')) countUp(entry.target);
    $$('.meter', entry.target).forEach(fillMeter);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

function observeReveals() { $$('.reveal:not(.is-in)').forEach(el => revealObserver.observe(el)); }

/* When the mode flips, the newly shown panel replays its intro. */
function replayReveals() {
  requestAnimationFrame(() => {
    const panel = $(`.mode-panel[data-panel="${root.dataset.mode}"]`);
    if (!panel) return;
    $$('.reveal', panel).forEach(el => el.classList.remove('is-in'));
    observeReveals();
    onScroll();
  });
}

function countUp(scope) {
  $$('.count', scope).forEach(el => {
    const target = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    if (reduced) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const dur = 1100;
    (function step(now) {
      const p = clamp((now - start) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    })(start);
  });
}

function fillMeter(meter) {
  const bar = meter.querySelector('span');
  if (bar) bar.style.width = clamp(parseFloat(meter.dataset.value) || 0, 0, 100) + '%';
}
function runMeters() {
  requestAnimationFrame(() => $$(`.mode-panel[data-panel="${root.dataset.mode}"] .reveal.is-in .meter`).forEach(fillMeter));
}

/* ══════════════════════════════════════════════════════════
   6. typing headline
   ══════════════════════════════════════════════════════════ */

let typeTimer = null;
function startTyping() {
  const el = $('#typed');
  clearTimeout(typeTimer);
  if (!el || root.dataset.mode !== 'pro') return;
  if (reduced) { el.textContent = DATA.typed[0]; return; }

  let line = 0, char = 0, deleting = false;
  (function tick() {
    const text = DATA.typed[line % DATA.typed.length];
    char += deleting ? -1 : 1;
    el.textContent = text.slice(0, char);

    let wait = deleting ? 32 : 62;
    if (!deleting && char === text.length) { wait = 1900; deleting = true; }
    else if (deleting && char === 0) { deleting = false; line++; wait = 320; }
    typeTimer = setTimeout(tick, wait);
  })();
}

/* ══════════════════════════════════════════════════════════
   7. experience accordion
   ══════════════════════════════════════════════════════════ */

$$('#timeline button.tl-head').forEach(head => {
  head.addEventListener('click', () => {
    const item = head.closest('.tl-item');
    const open = item.classList.contains('is-open');
    $$('#timeline .tl-item:not(.tl-static)').forEach(other => {
      other.classList.remove('is-open');
      other.querySelector('.tl-head').setAttribute('aria-expanded', 'false');
    });
    if (!open) { item.classList.add('is-open'); head.setAttribute('aria-expanded', 'true'); }
  });
});

/* Project cards flip on hover where hover exists, and on tap where it
   does not — binding click everywhere would leave desktop cards stuck. */
const canHover = window.matchMedia('(hover: hover)').matches;
$$('.proj').forEach(card => {
  if (!canHover) card.addEventListener('click', () => card.classList.toggle('is-flipped'));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('is-flipped'); }
  });
});

/* ══════════════════════════════════════════════════════════
   8. skills
   ══════════════════════════════════════════════════════════ */

$('#skillGrid').innerHTML = DATA.skills.map(s => `
  <span class="skill reveal" data-group="${s.group}">${s.name}</span>
`).join('');

function wireFilters(rowSel, itemSel, attr) {
  const row = $(rowSel);
  if (!row) return;
  row.addEventListener('click', e => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    $$('.filter', row).forEach(b => {
      const on = b === btn;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', String(on));
    });
    const want = btn.dataset.filter;
    $$(itemSel).forEach(item => {
      item.classList.toggle('is-hidden', want !== 'all' && item.dataset[attr] !== want);
    });
    onScroll();
  });
}
wireFilters('#skillFilters', '#skillGrid .skill', 'group');

/* ══════════════════════════════════════════════════════════
   9. photo gallery + lightbox
   ══════════════════════════════════════════════════════════ */

const gallery = $('#gallery');
gallery.innerHTML = DATA.photos.map((p, i) => `
  <button type="button" class="shot reveal" data-cat="${p.cat}" data-index="${i}" aria-label="Open ${p.title}">
    <span class="shot-media">${media(p, p.cat)}</span>
    <span class="shot-cap"><b>${p.title}</b><span>${p.meta}</span></span>
  </button>
`).join('');
wireFilters('#photoFilters', '#gallery .shot', 'cat');

const lb = {
  el: $('#lightbox'), media: $('#lbMedia'), title: $('#lbTitle'), meta: $('#lbMeta'),
  index: 0, opener: null
};

function openLightbox(i) {
  lb.index = (i + DATA.photos.length) % DATA.photos.length;
  const p = DATA.photos[lb.index];
  lb.media.innerHTML = p.src
    ? `<img src="${p.src}" alt="${p.title}" />`
    : placeholder(p.hue ?? 210, p.cat, null);
  lb.title.textContent = p.title;
  lb.meta.textContent = `${p.meta} · ${lb.index + 1} of ${DATA.photos.length}`;
  lb.el.hidden = false;
  document.body.classList.add('is-locked');
  $('#lbClose').focus();
}
function closeLightbox() {
  lb.el.hidden = true;
  document.body.classList.remove('is-locked');
  if (lb.opener) lb.opener.focus();
}

gallery.addEventListener('click', e => {
  const shot = e.target.closest('.shot');
  if (!shot) return;
  lb.opener = shot;
  openLightbox(Number(shot.dataset.index));
});
$('#lbClose').addEventListener('click', closeLightbox);
$('#lbPrev').addEventListener('click', () => openLightbox(lb.index - 1));
$('#lbNext').addEventListener('click', () => openLightbox(lb.index + 1));
lb.el.addEventListener('click', e => { if (e.target === lb.el) closeLightbox(); });

/* ══════════════════════════════════════════════════════════
   10. comic reader
   ══════════════════════════════════════════════════════════ */

const LAYOUTS = {
  'splash':  { cols: '1fr',       rows: '1fr',            spans: [[1, 1]] },
  '2x2':     { cols: '1fr 1fr',   rows: '1fr 1fr',        spans: [[1, 1], [1, 1], [1, 1], [1, 1]] },
  '1+2':     { cols: '1fr 1fr',   rows: '1.3fr 1fr',      spans: [[2, 1], [1, 1], [1, 1]] },
  '3-strip': { cols: '1fr',       rows: '1fr 1fr 1fr',    spans: [[1, 1], [1, 1], [1, 1]] }
};

function comicPage(page, hue) {
  if (typeof page === 'string') return `<img src="${page}" alt="Comic page" />`;
  const spec = LAYOUTS[page.layout] || LAYOUTS['2x2'];
  const lines = page.lines || [];   /* empty for the real series — see the DATA note */
  const panels = spec.spans.map((span, i) => {
    const panelHue = (hue + i * 34) % 360;
    const text = lines[i];
    return `<div class="panel" style="grid-column:span ${span[0]};grid-row:span ${span[1]}">
      ${placeholder(panelHue, '', null)}
      ${text ? `<span class="bubble">${text}</span>` : ''}
    </div>`;
  }).join('');
  return `<div class="panels" style="grid-template-columns:${spec.cols};grid-template-rows:${spec.rows}">${panels}</div>`;
}

const reader = {
  book: 0, page: 0,
  stage: $('#readerStage'), dots: $('#readerDots'),
  title: $('#readerTitle'), sub: $('#readerSub'),
  now: $('#pageNow'), total: $('#pageTotal'), link: $('#readerLink')
};

const newest = DATA.comics.length - 1;
$('#comicShelf').innerHTML = DATA.comics.map((c, i) => `
  <button type="button" class="comic-card${i === 0 ? ' is-on' : ''}" data-book="${i}">
    <span class="comic-cover">${c.cover ? `<img src="${c.cover}" alt="${c.title} cover" />` : placeholder(c.hue ?? 260, `ep ${i + 1}`, null)}</span>
    <span class="comic-meta">
      <b>${c.title}</b>
      <span>${c.sub}${i === newest ? ' · latest' : ''}</span>
    </span>
  </button>
`).join('');

function renderReader(direction = 1) {
  const book = DATA.comics[reader.book];
  if (!book) return;
  reader.page = clamp(reader.page, 0, book.pages.length - 1);

  reader.title.textContent = book.title;
  reader.sub.textContent = book.sub;
  reader.total.textContent = book.pages.length;
  reader.now.textContent = reader.page + 1;

  reader.stage.innerHTML = `<div class="page-art" style="--from:${direction >= 0 ? 30 : -30}px;--rot:${direction >= 0 ? 1.5 : -1.5}deg">
    ${comicPage(book.pages[reader.page], book.hue ?? 260)}
  </div>`;

  reader.dots.innerHTML = book.pages.map((_, i) =>
    `<button type="button" class="dot${i === reader.page ? ' is-on' : ''}" data-page="${i}" role="tab"
       aria-selected="${i === reader.page}" aria-label="Page ${i + 1}"></button>`).join('');

  if (reader.link) {
    reader.link.href = book.link || DATA.series.url;
    reader.link.firstChild.textContent = 'Read episode ' + (reader.book + 1) + ' ';
  }

  $('#pagePrev').disabled = reader.page === 0;
  $('#pageNext').disabled = reader.page === book.pages.length - 1;
}

function turnPage(delta) {
  const book = DATA.comics[reader.book];
  const next = clamp(reader.page + delta, 0, book.pages.length - 1);
  if (next === reader.page) return;
  reader.page = next;
  renderReader(delta);
}

$('#comicShelf').addEventListener('click', e => {
  const card = e.target.closest('.comic-card');
  if (!card) return;
  $$('.comic-card').forEach(c => c.classList.toggle('is-on', c === card));
  reader.book = Number(card.dataset.book);
  reader.page = 0;
  renderReader(1);
  reader.stage.focus({ preventScroll: true });
});
$('#pagePrev').addEventListener('click', () => turnPage(-1));
$('#pageNext').addEventListener('click', () => turnPage(1));
reader.dots.addEventListener('click', e => {
  const dot = e.target.closest('.dot');
  if (!dot) return;
  const target = Number(dot.dataset.page);
  turnPage(target - reader.page);
});

/* swipe the reader on touch */
let swipeX = null;
reader.stage.addEventListener('pointerdown', e => { swipeX = e.clientX; });
reader.stage.addEventListener('pointerup', e => {
  if (swipeX === null) return;
  const dx = e.clientX - swipeX;
  if (Math.abs(dx) > 55) turnPage(dx < 0 ? 1 : -1);
  swipeX = null;
});

renderReader(1);

/* ══════════════════════════════════════════════════════════
   11. travel map
   ══════════════════════════════════════════════════════════ */

const MAP_W = 400, MAP_H = 260;

/* scattered background dots — a suggestion of land, not a real map */
$('#mapDots').innerHTML = Array.from({ length: 150 }, (_, i) => {
  const a = i * 2.399963;                        /* golden-angle spiral */
  const r = Math.sqrt(i / 150);
  const x = MAP_W / 2 + Math.cos(a) * r * 150;
  const y = MAP_H / 2 + Math.sin(a) * r * 105;
  return `<circle class="map-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.4 - r).toFixed(2)}" />`;
}).join('');

const pt = t => [(t.x / 100) * MAP_W, (t.y / 100) * MAP_H];

$('#mapRoutes').innerHTML = DATA.trips.slice(0, -1).map((t, i) => {
  const [x1, y1] = pt(t);
  const [x2, y2] = pt(DATA.trips[i + 1]);
  const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2 - 22;
  return `<path class="map-route" d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" />`;
}).join('');

$('#mapPins').innerHTML = DATA.trips.map((t, i) => {
  const [x, y] = pt(t);
  return `<g class="pin" data-trip="${i}" tabindex="0" role="button" aria-label="${t.place}">
    <circle class="halo" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" />
    <circle class="core" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" />
    <text x="${(x + 11).toFixed(1)}" y="${(y + 2.5).toFixed(1)}">${t.place}</text>
  </g>`;
}).join('');

$('#tripList').innerHTML = DATA.trips.map((t, i) => `
  <button type="button" class="trip reveal" data-trip="${i}">
    <span class="trip-thumb">${t.photo ? `<img src="${t.photo}" alt="${t.place}" loading="lazy" />` : placeholder(t.hue ?? 160, '', 1)}</span>
    <span class="trip-body">
      <b>${t.place}</b>
      <span class="trip-when">${t.when}</span>
      <span class="trip-note">${t.note}</span>
    </span>
  </button>
`).join('');

function highlightTrip(i, scroll) {
  $$('.pin').forEach(p => p.classList.toggle('is-on', Number(p.dataset.trip) === i));
  $$('.trip').forEach(c => c.classList.toggle('is-on', Number(c.dataset.trip) === i));
  if (scroll) {
    const card = $(`.trip[data-trip="${i}"]`);
    if (card) card.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
  }
}

$('#map').addEventListener('click', e => {
  const pin = e.target.closest('.pin');
  if (pin) highlightTrip(Number(pin.dataset.trip), true);
});
$('#map').addEventListener('keydown', e => {
  const pin = e.target.closest('.pin');
  if (pin && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); highlightTrip(Number(pin.dataset.trip), true); }
});
$('#tripList').addEventListener('click', e => {
  const card = e.target.closest('.trip');
  if (card) highlightTrip(Number(card.dataset.trip), false);
});

/* ══════════════════════════════════════════════════════════
   12. keyboard shortcuts
   ══════════════════════════════════════════════════════════ */

document.addEventListener('keydown', e => {
  /* lightbox owns the keyboard while it is open */
  if (!lb.el.hidden) {
    if (e.key === 'Escape') { closeLightbox(); }
    else if (e.key === 'ArrowRight') { openLightbox(lb.index + 1); }
    else if (e.key === 'ArrowLeft') { openLightbox(lb.index - 1); }
    return;
  }
  if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); return; }

  const typingInField = /^(input|textarea|select)$/i.test(e.target.tagName);
  if (typingInField || e.metaKey || e.ctrlKey || e.altKey) return;

  if (e.key === 'm' || e.key === 'M') setMode(root.dataset.mode === 'pro' ? 'play' : 'pro');
  if (e.key === 't' || e.key === 'T') setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');

  /* arrows page the comic when the reader has focus */
  if (root.dataset.mode === 'play' && reader.stage.contains(document.activeElement)) {
    if (e.key === 'ArrowRight') turnPage(1);
    if (e.key === 'ArrowLeft') turnPage(-1);
  }
});

/* ══════════════════════════════════════════════════════════
   13. boot
   ══════════════════════════════════════════════════════════ */

$('#year').textContent = new Date().getFullYear();

/* Derived so they can never drift from the data above. */
$('#epCount').textContent = DATA.comics.length;
$('#seriesArt').innerHTML = DATA.series.cover
  ? `<img src="${DATA.series.cover}" alt="${DATA.series.title} cover" />`
  : placeholder(272, 'cover art', 0.75);
$$('.hero-play .count[data-count]').forEach(el => {
  if (el.nextElementSibling && /episodes/.test(el.nextElementSibling.textContent)) {
    el.dataset.count = String(DATA.comics.length);
  }
});
setTheme(root.dataset.theme || 'dark');
setMode(root.dataset.mode || 'pro', { animate: false });
observeReveals();
onScroll();
