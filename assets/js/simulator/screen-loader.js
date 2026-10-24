/* Screen loader
   Loads the 13 phone screens from /screens/*.html into #phone-screen-container, in order,
   then the other simulator scripts (jumpToSimulatorScreen, setScenario, ...) work on them
   exactly as if they were written inline.

   1. Normal case (served over http/https, e.g. Live Server): each file is fetched.
   2. Opened by double-clicking index.html (file://): browsers block fetch(), so the pre-built
      assets/js/generated/screens-bundle.js is used instead (see tools/bundle-screens.js). */
(function () {
  'use strict';

  var SCREEN_FILES = [
    'screens/screen-01-welcome.html',
    'screens/screen-02-dietary-preferences.html',
    'screens/screen-03-personal-profile.html',
    'screens/screen-04-home-dashboard.html',
    'screens/screen-05-barcode-scanner.html',
    'screens/screen-06-product-analysis.html',
    'screens/screen-07-ingredient-explorer.html',
    'screens/screen-08-product-missing.html',
    'screens/screen-09-add-product-ocr.html',
    'screens/screen-10-contributor-verification.html',
    'screens/screen-11-product-comparison.html',
    'screens/screen-12-profile-preferences.html',
    'screens/screen-13-education.html'
  ];

  var container = document.getElementById('phone-screen-container');
  if (!container) return;

  function fromBundle(file) {
    var bundle = window.NUTRILABEL_SCREEN_BUNDLE;
    if (bundle && typeof bundle[file] === 'string') return Promise.resolve(bundle[file]);
    return Promise.reject(new Error('Screen not available: ' + file));
  }

  function loadScreen(file) {
    return fetch(file, { cache: 'no-cache' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status + ' for ' + file);
        return res.text();
      })
      .catch(function () { return fromBundle(file); });
  }

  function showError(err) {
    container.innerHTML =
      '<div class="flex-1 flex flex-col items-center justify-center gap-space-sm p-space-lg text-center" role="alert">' +
      '<span class="material-symbols-outlined text-error text-[36px]">error</span>' +
      '<p class="font-headline-sm text-headline-sm text-primary">Couldn\u2019t load app screens</p>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant">Serve the project folder over http ' +
      '(VS Code Live Server, or <code>python -m http.server</code>) or run ' +
      '<code>node tools/bundle-screens.js</code>.</p></div>';
    console.error('[NutriLabel] screen loading failed:', err);
  }

  Promise.all(SCREEN_FILES.map(loadScreen))
    .then(function (html) {
      container.innerHTML = html.join('\n');
      document.dispatchEvent(new CustomEvent('nutrilabel:screens-ready'));
    })
    .catch(showError);
})();
