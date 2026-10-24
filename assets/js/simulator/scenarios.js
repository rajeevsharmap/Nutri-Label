/* Demo scenarios (standard / missing fields / unrecognised barcode) and prototype reset. */

function applyStandardScenarioUI() {
  const title = document.getElementById('res-prod-title');
  const alertBanner = document.getElementById('res-alert-banner');
  if (title) title.innerText = 'Wholegrain Oat Biscuits';
  if (alertBanner) {
    alertBanner.classList.remove('hidden');
    alertBanner.innerHTML = `
      <div class="flex items-center gap-1 font-label-md text-label-md font-bold text-error">
        <span class="material-symbols-outlined text-[18px]">error</span>
        <span>Dietary Compatibility: Review Recommended</span>
      </div>
      <p class="font-body-sm text-body-sm">Contains <strong class="underline">18.2g Sugar per 100g</strong>, which exceeds your configured limit (&le; 10g).</p>
      <div class="font-body-sm text-body-sm text-error font-medium">Allergen alert: Wheat Gluten detected.</div>
    `;
  }
}

function applyMissingScenarioUI() {
  const title = document.getElementById('res-prod-title');
  const alertBanner = document.getElementById('res-alert-banner');
  if (title) title.innerText = 'Artisan Sourdough Loaf';
  if (alertBanner) {
    alertBanner.classList.remove('hidden');
    alertBanner.innerHTML = `
      <div class="flex items-center gap-1 font-label-md text-label-md font-bold text-on-surface">
        <span class="material-symbols-outlined text-[18px] text-secondary">info</span>
        <span>Partial Nutritional Fields Available</span>
      </div>
      <p class="font-body-sm text-body-sm text-on-surface-variant">Sodium and dietary fiber fields were not indexed. Please consider photographing the packaging to contribute missing data.</p>
    `;
  }
}

// Quick Switcher helper
function setScenario(scen) {
  activeScenario = scen;
  const btns = ['available', 'missing', 'unknown'];
  btns.forEach(b => {
    const el = document.getElementById(`scen-btn-${b}`);
    if (!el) return;
    if (b === scen) {
      el.className = 'px-3 py-1.5 rounded-lg font-label-sm text-label-sm bg-primary text-on-primary font-semibold transition-all';
    } else {
      el.className = 'px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface hover:bg-surface-container transition-all';
    }
  });

  if (scen === 'available') {
    applyStandardScenarioUI();
    jumpToSimulatorScreen(6);
  } else if (scen === 'missing') {
    applyMissingScenarioUI();
    jumpToSimulatorScreen(6);
  } else if (scen === 'unknown') {
    jumpToSimulatorScreen(8);
  }
}

function resetPrototype() {
  jumpToSimulatorScreen(1);
  setScenario('available');
}
