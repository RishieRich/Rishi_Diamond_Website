/* ═══════════════════════════════════════════════════════════════════
   Rishikesh Pote — Portfolio  |  script.js
   ═══════════════════════════════════════════════════════════════════ */

/* ─── TYPING EFFECT ──────────────────────────────────────────────── */
const roles = [
  'Senior Data Engineer',
  'Cloud Solution Architect',
  'Big Data Specialist',
  'AWS Certified Architect',
  'Healthcare Data Expert',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 60);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
    } else {
      setTimeout(typeEffect, 90);
    }
  }
}
typeEffect();

/* ─── NAVBAR — scroll state & active link ────────────────────────── */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavbar() {
  const scrollY = window.scrollY;

  // scrolled class for background
  navbar.classList.toggle('scrolled', scrollY > 40);

  // active link highlight
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ─── HAMBURGER MENU ─────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

/* ─── SCROLL FADE-IN (IntersectionObserver) ──────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach(el => observer.observe(el));

/* ─── SMOOTH ACTIVE NAV HIGHLIGHT ON CLICK ───────────────────────── */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* ─── FLOATING BADGE PARALLAX (subtle) ──────────────────────────── */
const floatBadges = document.querySelectorAll('.float-badge');
window.addEventListener('mousemove', e => {
  if (window.innerWidth < 768) return;
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  floatBadges.forEach((b, i) => {
    const factor = (i + 1) * 6;
    b.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
  });
});

/* ─── YEAR IN FOOTER ─────────────────────────────────────────────── */
const yearEls = document.querySelectorAll('.footer-year');
yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });
