/* Barcode scanner: torch toggle and the 4-step simulated scan sequence. */

// Scanner Torch Toggle
function toggleTorch(btn) {
  const icon = btn.querySelector('.material-symbols-outlined');
  if (icon.innerText === 'flash_on') {
    icon.innerText = 'flash_off';
    btn.classList.add('bg-secondary-container', 'text-on-secondary-container');
  } else {
    icon.innerText = 'flash_on';
    btn.classList.remove('bg-secondary-container', 'text-on-secondary-container');
  }
}

// Scanner sequence simulation with 4 steps
function executeScanSequence(scenarioType) {
  activeScenario = scenarioType;
  const overlay = document.getElementById('scan-loading-overlay');
  const stepTitle = document.getElementById('scan-loading-step');
  const stepDesc = document.getElementById('scan-loading-desc');

  overlay.classList.remove('hidden');
  overlay.classList.add('flex');

  const steps = [
    { title: 'Reading Barcode...', desc: 'ML Kit detecting code pattern 8901030...' },
    { title: 'Querying Open Food Facts...', desc: 'Checking Redis L2 cache and v2 REST endpoints...' },
    { title: 'Evaluating Java Rules...', desc: 'Executing deterministic threshold logic...' },
    { title: 'Synthesizing Explanation...', desc: 'Grok API formatting natural-language findings...' }
  ];

  let currentStep = 0;
  const interval = setInterval(() => {
    currentStep++;
    if (currentStep < steps.length) {
      stepTitle.innerText = steps[currentStep].title;
      stepDesc.innerText = steps[currentStep].desc;
    } else {
      clearInterval(interval);
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
      
      if (scenarioType === 'unknown') {
        jumpToSimulatorScreen(8);
      } else if (scenarioType === 'missing') {
        applyMissingScenarioUI();
        jumpToSimulatorScreen(6);
      } else {
        applyStandardScenarioUI();
        jumpToSimulatorScreen(6);
      }
    }
  }, 450);
}
