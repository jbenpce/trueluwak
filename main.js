// True Luwak — i18n engine (FR · EN · IT · ES · PT) + reveal-on-scroll
(function () {
  var LANGS = ['fr', 'en', 'it', 'es', 'pt'];
  var root = document.documentElement;
  var sel = document.getElementById('langSelect');

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = 'fr';
    var dict = (window.TL_I18N && window.TL_I18N[lang]) || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n')];
      if (typeof val !== 'string') return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    root.setAttribute('lang', lang);
    if (sel) sel.value = lang;
    try { localStorage.setItem('tl-lang', lang); } catch (e) {}
  }

  var lang = null;
  try { lang = localStorage.getItem('tl-lang'); } catch (e) {}
  if (!lang) {
    var nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    lang = LANGS.indexOf(nav) >= 0 ? nav : 'fr';
  }
  apply(lang);
  if (sel) sel.addEventListener('change', function () { apply(sel.value); });
})();

(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
