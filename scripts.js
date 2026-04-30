/* ═══════════════════════════════════════════════
   Danichi — Shared Scripts
   Used by: index.html, about.html, contact.html, faq.html
   ═══════════════════════════════════════════════ */

/* ── Custom cursor ─────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
    ring.style.width    = '52px';
    ring.style.height   = '52px';
    ring.style.opacity  = '0.5';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
    ring.style.width    = '36px';
    ring.style.height   = '36px';
    ring.style.opacity  = '1';
  });
});

/* ── Nav scroll ────────────────────────────────── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (nav.classList.contains('nav-solid')) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Scroll reveal ─────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));
