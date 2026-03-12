/* Rishikesh Pote Portfolio | script.js */

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── TYPING EFFECT ─────────────────────────────────────────────────────── */
const roles = [
  'AI Engineering Architect',
  'Senior GenAI Engineer',
  'Agentic AI Systems Lead',
  'RAG and Evaluation Framework Specialist',
  'Enterprise AI Platform Builder',
  'LLM Governance and Quality Engineering',
];

const typedEl = document.getElementById('typed-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 55);
    return;
  }
  typedEl.textContent = current.slice(0, ++charIndex);
  if (charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1700);
    return;
  }
  setTimeout(typeEffect, 82);
}

if (typedEl) {
  if (prefersReducedMotion) {
    typedEl.textContent = roles[0];
  } else {
    typeEffect();
  }
}

/* ─── NAVBAR + SCROLL PROGRESS ──────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavbar() {
  const scrollY = window.scrollY;
  if (navbar) navbar.classList.toggle('scrolled', scrollY > 40);

  let current = '';
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  root.style.setProperty('--scroll-progress', progress.toFixed(4));
}

let scrollTicking = false;
function handleScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(() => {
    updateNavbar();
    updateScrollProgress();
    updateBackToTop();
    scrollTicking = false;
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', handleScroll, { passive: true });
handleScroll();

/* ─── MOBILE NAV ─────────────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

if (hamburger && navLinksEl) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });
  navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });
}

/* ─── REVEAL ON SCROLL ───────────────────────────────────────────────────── */
const fadeEls = [...document.querySelectorAll('.fade-in')];
fadeEls.forEach((el, index) => {
  const delay = (index % 8) * 70;
  el.style.setProperty('--reveal-delay', `${delay}ms`);
});

if (prefersReducedMotion) {
  fadeEls.forEach((el) => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach((el) => revealObserver.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}

/* ─── IMMEDIATE ACTIVE LINK ON CLICK ────────────────────────────────────── */
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

/* ─── FLOATING BADGE PARALLAX ────────────────────────────────────────────── */
const floatBadges = [...document.querySelectorAll('.float-badge')];
if (!prefersReducedMotion && floatBadges.length > 0) {
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  const spring = 0.09;

  const updateTarget = (event) => {
    if (window.innerWidth < 768) { targetX = 0; targetY = 0; return; }
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = (event.clientX - cx) / cx;
    targetY = (event.clientY - cy) / cy;
  };

  const resetTarget = () => { targetX = 0; targetY = 0; };

  const animateBadges = () => {
    currentX += (targetX - currentX) * spring;
    currentY += (targetY - currentY) * spring;
    floatBadges.forEach((badge, index) => {
      const factor = (index + 1) * 5;
      badge.style.setProperty('--tx', `${(currentX * factor).toFixed(2)}px`);
      badge.style.setProperty('--ty', `${(currentY * factor).toFixed(2)}px`);
    });
    window.requestAnimationFrame(animateBadges);
  };

  window.addEventListener('mousemove', updateTarget, { passive: true });
  window.addEventListener('mouseleave', resetTarget, { passive: true });
  window.addEventListener('blur', resetTarget);
  animateBadges();
}

/* ─── CURSOR GLOW ────────────────────────────────────────────────────────── */
const cursorGlow = document.getElementById('cursor-glow');
if (!prefersReducedMotion && cursorGlow) {
  window.addEventListener('mousemove', (e) => {
    root.style.setProperty('--cx', `${e.clientX}px`);
    root.style.setProperty('--cy', `${e.clientY}px`);
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top  = `${e.clientY}px`;
  }, { passive: true });
}

/* ─── BACK TO TOP ────────────────────────────────────────────────────────── */
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTop() {
  if (!backToTopBtn) return;
  backToTopBtn.classList.toggle('visible', window.scrollY > 300);
}

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

/* ─── EXPANDABLE CARDS ───────────────────────────────────────────────────── */
document.querySelectorAll('.expand-toggle').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Stop link navigation if the button is inside an <a> tag
    e.preventDefault();
    e.stopPropagation();

    const card = btn.closest('.expandable-card');
    if (!card) return;

    const isExpanded = card.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

    // Update button label based on context
    const chevron = btn.querySelector('.expand-chevron');
    if (btn.classList.contains('expand-toggle-case')) {
      // Case study toggle
      const textNode = btn.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = isExpanded ? 'Hide Details ' : 'View Details ';
      }
    } else if (btn.closest('.skill-cat-card')) {
      // Skills toggle
      const textNode = btn.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = isExpanded ? 'Show Less ' : 'Show All ';
      }
    } else if (btn.closest('.article-card')) {
      // Article toggle
      const textNode = btn.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = isExpanded ? 'Less ' : 'More ';
      }
    } else {
      // Project card toggle
      const textNode = btn.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = isExpanded ? 'Hide ' : 'Details ';
      }
    }
  });
});

/* ─── COUNTER ANIMATION ──────────────────────────────────────────────────── */
function animateCounter(el) {
  const raw = el.getAttribute('data-count');
  if (!raw) return;

  const target = parseFloat(raw);
  const suffix = el.getAttribute('data-suffix') || '';
  const isDecimal = raw.includes('.');
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = isDecimal
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);

    // For 7.5+, show as "7.5+"
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
  }

  requestAnimationFrame(step);
}

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  statNums.forEach((el) => counterObserver.observe(el));
}

/* ─── 3D TILT ON CARDS ───────────────────────────────────────────────────── */
if (!prefersReducedMotion && window.innerWidth > 768) {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -5;   // max ±5 deg
      const rotY = ((x - cx) / cx) * 6;    // max ±6 deg
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}

/* ─── HERO PARTICLES (JS-powered for mobile fallback) ────────────────────── */
// Particles are handled via CSS ::before/::after for desktop.
// For touch devices we skip to avoid overhead.

/* ─── TOUCH-FRIENDLY EXPAND (tap) ───────────────────────────────────────── */
// The expand-toggle buttons already use click events which work on touch.
// No extra code needed — touchstart fires click on mobile.
