/* Onboarding controls: dietary/allergen chips and goal selection. */

// Preference chip toggle
function toggleChip(button) {
  const isActive = button.getAttribute('data-active') === 'true';
  if (isActive) {
    button.setAttribute('data-active', 'false');
    button.classList.remove('bg-secondary-container', 'text-on-secondary-container');
    button.classList.add('bg-surface-container-low', 'text-on-surface');
  } else {
    button.setAttribute('data-active', 'true');
    button.classList.add('bg-secondary-container', 'text-on-secondary-container');
    button.classList.remove('bg-surface-container-low', 'text-on-surface');
  }
}

// Goal radio selection
function selectGoal(card) {
  const allCards = document.querySelectorAll('.goal-card');
  allCards.forEach(c => {
    c.setAttribute('data-selected', 'false');
    c.classList.remove('bg-secondary-container');
    c.classList.add('bg-surface-container-low');
    const icon = c.querySelector('.check-icon');
    if (icon) {
      icon.innerText = 'radio_button_unchecked';
      icon.classList.remove('text-secondary');
      icon.classList.add('text-outline');
    }
  });

  card.setAttribute('data-selected', 'true');
  card.classList.remove('bg-surface-container-low');
  card.classList.add('bg-secondary-container');
  const icon = card.querySelector('.check-icon');
  if (icon) {
    icon.innerText = 'check_circle';
    icon.classList.add('text-secondary');
    icon.classList.remove('text-outline');
  }
}
