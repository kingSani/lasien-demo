const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const header = document.querySelector('.site-header');
const updateHeader = () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 12
    ? '0 8px 30px rgba(7, 57, 111, .08)'
    : 'none';
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
