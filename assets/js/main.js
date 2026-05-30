/* ============================================================
   SUMAIYA JAHAN ALO — Portfolio JS
   Features: scroll progress, reveal animations, active nav,
             sticky header, mobile menu, skill bars, form UX
   ============================================================ */

(function () {
  'use strict';

  /* ── SCROLL PROGRESS ───────────────────────────────── */
  const prog = document.getElementById('scroll-progress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? scrollTop / docH : 0;
    prog.style.transform = `scaleX(${pct})`;
  }

  /* ── STICKY HEADER ─────────────────────────────────── */
  const header = document.getElementById('site-header');
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }

  /* ── ACTIVE NAV ────────────────────────────────────── */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  /* ── REVEAL ON SCROLL ──────────────────────────────── */
  const revealEls = document.querySelectorAll('.rv');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  /* ── SKILL BARS (animate on reveal) ───────────────── */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = e.target;
        const w = target.style.getPropertyValue('--w');
        target.style.width = w;
        skillObs.unobserve(target);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(el => {
    el.style.width = '0';
    skillObs.observe(el);
  });

  /* ── MOBILE MENU ───────────────────────────────────── */
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('mobile-drawer');

  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on nav link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── SMOOTH CLOSE MOBILE MENU ON OUTSIDE CLICK ─────── */
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') &&
        !drawer.contains(e.target) && !burger.contains(e.target)) {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ── CONTACT FORM ──────────────────────────────────── */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Simulate submission (connect to Formspree/Netlify Forms for real)
      setTimeout(() => {
        form.reset();
        btn.textContent = 'Send Message';
        btn.disabled = false;
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      }, 1200);
    });
  }

  /* ── UNIFIED SCROLL HANDLER ────────────────────────── */
  function onScroll() {
    updateProgress();
    updateHeader();
    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── SMOOTH SCROLL FOR ALL ANCHOR LINKS ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── TICKER PAUSE ON HOVER ─────────────────────────── */
  const ticker = document.querySelector('.ticker-track');
  if (ticker) {
    const parent = ticker.parentElement;
    parent.addEventListener('mouseenter', () => { ticker.style.animationPlayState = 'paused'; });
    parent.addEventListener('mouseleave', () => { ticker.style.animationPlayState = 'running'; });
  }

})();
