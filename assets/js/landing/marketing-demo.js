/* Problem section: front-claim vs. back-panel toggle. */

// Problem card marketing claim toggle
function toggleMarketingDemo(btn) {
  const state = btn.getAttribute('data-state');
  const box = document.getElementById('marketing-demo-box');
  if (state === 'front') {
    btn.setAttribute('data-state', 'back');
    btn.innerText = 'Show Front Claim';
    box.innerHTML = `<span class="font-bold text-error">Actual Nutrition:</span> Contains 24g Sugar per serving (Invert Syrup listed as 2nd ingredient).`;
  } else {
    btn.setAttribute('data-state', 'front');
    btn.innerText = 'Show Back Panel';
    box.innerHTML = `<span class="font-bold text-secondary">Front Claim:</span> &ldquo;High Protein 15g • No Added Refined Sugar&rdquo;`;
  }
}
