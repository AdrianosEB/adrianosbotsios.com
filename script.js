// Sticky-nav border fade once the page has scrolled past the very top.
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 4);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Mobile nav: toggle the collapsed menu open/closed.
(function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle('nav--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav--open'));
  });

  // Close when a link is tapped or on Escape.
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();

// Scroll-spy: highlight the nav link for the section currently in view.
// "Active zone" is the slice just below the sticky nav, ending mid-viewport.
// When a section enters that zone, its link becomes active and the URL hash syncs.
(function () {
  if (!('IntersectionObserver' in window)) return;

  const navLinks = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));
  if (!navLinks.length) return;

  const linkById = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    if (id) linkById.set(id, link);
  });

  const sections = Array.from(linkById.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((l) => {
      l.classList.toggle('nav__link--active', l.getAttribute('href') === '#' + id);
    });
    if (history.replaceState) {
      history.replaceState(null, '', '#' + id);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    {
      rootMargin: '-72px 0px -55% 0px',
      threshold: 0,
    }
  );

  sections.forEach((s) => observer.observe(s));
})();
