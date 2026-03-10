/* Rishikesh Pote Portfolio | script.js */

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Typing effect */
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

/* Navbar + scroll progress */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavbar() {
  const scrollY = window.scrollY;

  if (navbar) {
    navbar.classList.toggle('scrolled', scrollY > 40);
  }

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
    scrollTicking = false;
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', handleScroll, { passive: true });
handleScroll();

/* Mobile nav */
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

/* Reveal-on-scroll with staggered delays */
const fadeEls = [...document.querySelectorAll('.fade-in')];
fadeEls.forEach((el, index) => {
  const delay = (index % 8) * 70;
  el.style.setProperty('--reveal-delay', `${delay}ms`);
});

if (prefersReducedMotion) {
  fadeEls.forEach((el) => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}

/* Immediate active-link feedback on click */
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

/* Smoothed floating-badge parallax */
const floatBadges = [...document.querySelectorAll('.float-badge')];
if (!prefersReducedMotion && floatBadges.length > 0) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const spring = 0.09;

  const updateTarget = (event) => {
    if (window.innerWidth < 768) {
      targetX = 0;
      targetY = 0;
      return;
    }

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = (event.clientX - cx) / cx;
    targetY = (event.clientY - cy) / cy;
  };

  const resetTarget = () => {
    targetX = 0;
    targetY = 0;
  };

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
