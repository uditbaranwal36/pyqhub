/**
 * PYQ Hub — Name Gate + User Counter
 * -----------------------------------
 * Blocks the page behind a modal until the visitor enters their name.
 * Also increments a site-wide "total users" counter using CounterAPI
 * (a free, no-signup counter service) since this is a static site with
 * no backend/database of its own.
 *
 * Include this ONE script on every page you want gated:
 *   <script src="gate.js"></script>
 *
 * NOTE ON THE COUNTER: because this site has no backend, "total users"
 * is tracked via a free third-party counter API (https://counterapi.dev).
 * It increments once per NEW visitor (first time they submit their name
 * on this browser). Returning visitors (same browser, name already saved)
 * are not re-counted. If you later add a real backend, swap
 * incrementVisitorCount() to call your own API instead.
 */
(function () {
  var NAME_KEY = 'pyqhub_username';
  var COUNTED_KEY = 'pyqhub_counted';
  // CounterAPI workspace/counter — change 'pyqhub-demo' to something
  // unique to your site so your count doesn't mix with anyone else's.
  var COUNTER_URL = 'https://api.counterapi.dev/v1/pyqhub-demo/total-users/up';

  // Paste the Web App URL from your Google Apps Script deployment here
  // (ends in /exec). Names submitted on the site are sent here so you
  // can see them in your Google Sheet.
  var SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz_1jZPTSgVf4bC6sEjzkhY2jEHOtGPt2q04ngJrGrpqdyPcAR1WXkU6Jd9EwWc3sxf/exec';

  function sendNameToSheet(name) {
    if (!SHEET_ENDPOINT || SHEET_ENDPOINT.indexOf('PASTE_') === 0) return;
    fetch(SHEET_ENDPOINT, {
      method: 'POST',
      // Apps Script web apps don't support CORS preflight well, so we
      // send as text/plain and parse JSON.parse(e.postData.contents) on
      // the script side (already set up that way above).
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ name: name })
    }).catch(function () {
      // Offline or endpoint unreachable — fail silently, gate still works.
    });
  }

  function injectStyles() {
    var css =
      '#pyqGateOverlay{position:fixed;inset:0;background:rgba(20,16,10,0.92);' +
      'backdrop-filter:blur(4px);z-index:9999;display:flex;align-items:center;' +
      'justify-content:center;padding:20px;font-family:"Inter",sans-serif;}' +
      '#pyqGateBox{background:#F7F3EA;border-radius:14px;max-width:400px;width:100%;' +
      'padding:32px 28px;box-shadow:0 20px 60px rgba(0,0,0,0.4);text-align:center;' +
      'animation:pyqGateIn .25s ease-out;}' +
      '@keyframes pyqGateIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}' +
      '#pyqGateBox h2{font-family:"Fraunces",serif;font-size:1.6rem;margin:0 0 8px;color:#1a1410;}' +
      '#pyqGateBox p{color:#5a5148;font-size:0.95rem;margin:0 0 20px;line-height:1.4;}' +
      '#pyqGateInput{width:100%;padding:12px 14px;border:1.5px solid #d8cfc0;border-radius:8px;' +
      'font-size:1rem;margin-bottom:6px;box-sizing:border-box;font-family:"Inter",sans-serif;}' +
      '#pyqGateInput:focus{outline:none;border-color:#D9A130;}' +
      '#pyqGateError{color:#b23b3b;font-size:0.85rem;min-height:18px;margin:2px 0 12px;text-align:left;}' +
      '#pyqGateSubmit{width:100%;padding:12px;background:#1a1410;color:#F7F3EA;border:none;' +
      'border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;font-family:"Inter",sans-serif;' +
      'transition:background .15s,color .15s;}' +
      '#pyqGateSubmit:hover{background:#D9A130;color:#1a1410;}' +
      'body.pyq-gate-locked{overflow:hidden;}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function updateVisibleCounters(value) {
    // If a page has an element with id="statUsers", keep it in sync.
    var el = document.getElementById('statUsers');
    if (el) el.textContent = value;
  }

  function incrementVisitorCount() {
    fetch(COUNTER_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var value = data && (data.count || data.value);
        if (typeof value === 'number') {
          localStorage.setItem('pyqhub_total_users_cache', String(value));
          updateVisibleCounters(value);
        }
      })
      .catch(function () {
        // Offline or API unreachable — fail silently, gate still works.
      });
  }

  function showCachedCountIfAny() {
    var cached = localStorage.getItem('pyqhub_total_users_cache');
    if (cached) updateVisibleCounters(cached);
  }

  function showGate() {
    document.body.classList.add('pyq-gate-locked');

    var overlay = document.createElement('div');
    overlay.id = 'pyqGateOverlay';
    overlay.innerHTML =
      '<div id="pyqGateBox">' +
        '<h2>Welcome to PYQ Hub</h2>' +
        '<p>Tell us your name to continue — takes two seconds.</p>' +
        '<input type="text" id="pyqGateInput" placeholder="Your name" autocomplete="name" maxlength="40">' +
        '<div id="pyqGateError"></div>' +
        '<button id="pyqGateSubmit" type="button">Continue</button>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = document.getElementById('pyqGateInput');
    var errorEl = document.getElementById('pyqGateError');
    var submit = document.getElementById('pyqGateSubmit');
    input.focus();

    function submitName() {
      var name = input.value.trim();
      if (!name) {
        errorEl.textContent = 'Please enter your name to continue.';
        input.focus();
        return;
      }
      if (name.length < 2) {
        errorEl.textContent = 'That name looks too short — try again.';
        input.focus();
        return;
      }
      localStorage.setItem(NAME_KEY, name);

      if (!localStorage.getItem(COUNTED_KEY)) {
        localStorage.setItem(COUNTED_KEY, '1');
        incrementVisitorCount();
        sendNameToSheet(name);
      }

      overlay.remove();
      document.body.classList.remove('pyq-gate-locked');
    }

    submit.addEventListener('click', submitName);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') submitName();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();
    showCachedCountIfAny();
    var existingName = localStorage.getItem(NAME_KEY);
    if (!existingName) {
      showGate();
    }
  });

  // Expose the saved name so other scripts (main.js) can use it,
  // e.g. to say "Welcome back, {name}" somewhere on the page.
  window.pyqGetUserName = function () {
    return localStorage.getItem(NAME_KEY) || '';
  };
})();
