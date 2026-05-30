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

  /* ── DOWNLOAD PORTFOLIO AS PDF ─────────────────────── */
  const downloadPortfolioBtn = document.getElementById('download-portfolio-btn');
  
  if (downloadPortfolioBtn) {
    downloadPortfolioBtn.addEventListener('click', function () {
      
      // 1. Change button text to show it's loading
      const originalText = this.innerHTML;
      this.innerHTML = 'Generating PDF... Please wait.';
      this.style.opacity = '0.7';
      this.style.pointerEvents = 'none';

      // 2. Hide elements that look bad in a PDF (like the sticky header and progress bar)
      const header = document.getElementById('site-header');
      const progress = document.getElementById('scroll-progress');
      if (header) header.style.display = 'none';
      if (progress) progress.style.display = 'none';

      // 3. Select the whole body to convert
      const element = document.body;

      // 4. Configure PDF options
      const opt = {
        margin:       [0, 0, 0, 0],
        filename:     'Sumaiya_Jahan_Alo_Portfolio.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true, 
          scrollY: 0 // Ensures it captures from the top of the page
        },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // 5. Generate the PDF
      html2pdf().set(opt).from(element).save().then(() => {
        // 6. Restore the header, progress bar, and button text after downloading
        if (header) header.style.display = '';
        if (progress) progress.style.display = '';
        this.innerHTML = originalText;
        this.style.opacity = '1';
        this.style.pointerEvents = 'auto';
      });
    });
  }

})();
