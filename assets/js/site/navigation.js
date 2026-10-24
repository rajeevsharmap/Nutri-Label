/* Site navigation
   - Anchor links (#features, #architecture-section, ...) scroll natively; smooth scrolling and the
     header offset are handled in assets/css/navigation.css.
   - This script adds: active-tab highlighting while scrolling (scroll-spy) and the compact menu
     used below the xl breakpoint. */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var desktopNav = document.getElementById('primary-nav');
  var menu = document.getElementById('mobile-menu');
  var toggle = document.getElementById('mobile-menu-toggle');
  if (!header || !desktopNav) return;

  /* ---------- Scroll-spy ---------- */
  // Page sections in document order -> nav tab (data-path) that should be highlighted.
  var SECTIONS = [
    { id: 'overview', tab: null },
    { id: 'problem', tab: null },
    { id: 'how-it-works', tab: 'how-it-works' },
    { id: 'simulator-section', tab: null },
    { id: 'features', tab: 'features' },
    { id: 'architecture-section', tab: 'technology' },
    { id: 'about-the-project', tab: 'about-the-project' },
    { id: 'roadmap', tab: 'about-the-project' },
    { id: 'closing-cta', tab: null }
  ];

  var activeClasses = (desktopNav.getAttribute('data-active-classes') || '').split(/\s+/).filter(Boolean);
  var tabLinks = Array.prototype.slice.call(document.querySelectorAll('#primary-nav a, #mobile-menu nav a'));
  var currentTab = undefined;

  function setActiveTab(tab) {
    if (tab === currentTab) return;
    currentTab = tab;
    tabLinks.forEach(function (link) {
      var on = !!tab && link.getAttribute('data-path') === tab;
      activeClasses.forEach(function (c) { link.classList.toggle(c, on); });
      link.classList.toggle('text-on-surface-variant', !on);
      if (on) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
  }

  function updateSpy() {
    var line = header.offsetHeight + 24;
    var current = SECTIONS[0];
    SECTIONS.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= line) current = s;
    });
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = SECTIONS[SECTIONS.length - 1];
    setActiveTab(current.tab);
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; updateSpy(); });
  }, { passive: true });
  window.addEventListener('resize', updateSpy);
  window.addEventListener('load', updateSpy);
  updateSpy();

  /* ---------- Compact menu ---------- */
  if (!menu || !toggle) return;
  var icon = toggle.querySelector('.material-symbols-outlined');

  function setMenu(open) {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (icon) icon.textContent = open ? 'close' : 'menu';
  }

  toggle.addEventListener('click', function () {
    setMenu(menu.classList.contains('hidden'));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 1280px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });
})();
