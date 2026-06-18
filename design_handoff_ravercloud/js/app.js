/* RaverCloud Residency — page behavior (vanilla) */
(function () {
  'use strict';

  // ---- Nav: solid on scroll ----
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Scroll reveals (position-based; robust where IntersectionObserver
  //      doesn't fire, e.g. some preview/embed contexts) ----
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  function checkReveals() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var trigger = vh + 120; // arm just before it scrolls into view (off-screen) to avoid flash
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('in');
        reveals.splice(i, 1);
      }
    }
  }
  window.addEventListener('scroll', checkReveals, { passive: true });
  window.addEventListener('resize', checkReveals);
  checkReveals();
  // settle after fonts/layout
  requestAnimationFrame(checkReveals);
  setTimeout(checkReveals, 250);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(checkReveals);

  // ---- Stagger flicker on video-wall tiles ----
  [].slice.call(document.querySelectorAll('.wall .tile, .fan-wall .tile')).forEach(function (t) {
    if (!t.style.getPropertyValue('--d')) {
      t.style.setProperty('--d', (Math.random() * -4).toFixed(2) + 's');
    }
  });

  // ---- Smooth-close other FAQ items (single-open accordion) ----
  var faqItems = [].slice.call(document.querySelectorAll('.faq details'));
  faqItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqItems.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // ---- Smooth anchor focus offset for sticky nav ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
})();
