/* OCR contribution form submission and contributor verification actions. */

// OCR Form submission
function submitOcrContribution() {
  const name = document.getElementById('ocr-input-name').value;
  const sugar = document.getElementById('ocr-input-sugar').value;
  const protein = document.getElementById('ocr-input-protein').value;

  const verifName = document.getElementById('verif-prod-name');
  const verifSugar = document.getElementById('verif-sugar-val');
  const verifProt = document.getElementById('verif-protein-val');

  if (verifName) verifName.innerText = name;
  if (verifSugar) verifSugar.innerText = `${sugar}g`;
  if (verifProt) verifProt.innerText = `${protein}g`;

  jumpToSimulatorScreen(10);
}

// Verification actions
function approveVerification() {
  const badge = document.getElementById('verif-status-badge');
  if (badge) {
    badge.innerText = 'Verified in NutriLabel';
    badge.classList.remove('bg-surface-container', 'text-secondary');
    badge.classList.add('bg-secondary-container', 'text-on-secondary-container', 'font-bold');
  }
  setTimeout(() => {
    alert('Record verified and queued for commit to community dataset!');
    jumpToSimulatorScreen(4);
  }, 400);
}

function rejectVerification() {
  const badge = document.getElementById('verif-status-badge');
  if (badge) {
    badge.innerText = 'Needs Correction';
    badge.classList.remove('bg-surface-container', 'text-secondary');
    badge.classList.add('bg-error-container', 'text-on-error-container', 'font-bold');
  }
}
