// 온니버스 (Onniverse) — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // Mobile dropdown (서비스) expand
  document.querySelectorAll('.nav-menu .has-dropdown > .nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 834) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // Accordion (FAQ)
  document.querySelectorAll('.accordion-item').forEach((item) => {
    const q = item.querySelector('.accordion-q');
    const a = item.querySelector('.accordion-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.accordion-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Reference filter
  const filterBtns = document.querySelectorAll('.ref-filter button');
  const refCards = document.querySelectorAll('.ref-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      refCards.forEach((card) => {
        card.style.display = cat === 'all' || card.dataset.cat === cat ? '' : 'none';
      });
    });
  });

  // Contact form (static demo — no backend)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const box = document.getElementById('form-result');
      form.style.display = 'none';
      if (box) box.style.display = 'block';
    });
  }
});
