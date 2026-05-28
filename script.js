// ---------- i18n ----------
const STORAGE_KEY = 'site-lang';
const SUPPORTED = ['en', 'ru', 'it', 'fr'];

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined;
    // Support numeric indices for arrays: items.0.title
    return acc[key];
  }, obj);
}

function applyLang(lang) {
  const dict = window.TRANSLATIONS[lang];
  if (!dict) return;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(dict, key);
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

function detectInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch (_) {}
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : 'en';
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(detectInitialLang());

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Reveal-on-scroll ----------
const revealTargets = document.querySelectorAll(
  '.section, .hero__photo-wrap, .hero__title, .hero__tagline, .hero__cta'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => io.observe(el));

// ---------- Animated background (twinkling sparkles) ----------
(function setupCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const COLORS = ['236, 72, 153', '192, 132, 252', '167, 139, 250', '244, 114, 182'];
  let sparkles;
  const COUNT = Math.min(110, Math.floor((window.innerWidth * window.innerHeight) / 14000));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeSparkle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      // phase 0..1 around a twinkle cycle; speed in cycles/sec
      phase: Math.random(),
      speed: 0.15 + Math.random() * 0.45,
      drift: (Math.random() - 0.5) * 0.08
    };
  }

  function init() {
    resize();
    sparkles = Array.from({ length: COUNT }, makeSparkle);
  }

  let lastT = performance.now();
  function tick(now) {
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const s of sparkles) {
      s.phase += s.speed * dt;
      s.y += s.drift;
      if (s.y < -2) s.y = window.innerHeight + 2;
      if (s.y > window.innerHeight + 2) s.y = -2;

      // smooth twinkle alpha 0..1 using sine
      const a = Math.max(0, Math.sin(s.phase * Math.PI * 2)) * 0.85 + 0.05;

      // soft halo
      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
      grad.addColorStop(0, `rgba(${s.color}, ${a * 0.55})`);
      grad.addColorStop(1, `rgba(${s.color}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
      ctx.fill();

      // bright core
      ctx.fillStyle = `rgba(${s.color}, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  // Respect reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    init();
    // Draw a single static frame so the canvas isn't blank
    for (const s of sparkles) {
      ctx.fillStyle = `rgba(${s.color}, 0.5)`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }

  window.addEventListener('resize', init);
  init();
  requestAnimationFrame(tick);
})();
