/* Ingredient Explorer: search box and filter chips. */

// Ingredients Search and Filter
function filterIngredients(query) {
  const items = document.querySelectorAll('.ing-item');
  const q = query.toLowerCase().trim();
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes(q)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function filterIngredientTab(type) {
  const items = document.querySelectorAll('.ing-item');
  const chips = document.querySelectorAll('.ing-chip');

  chips.forEach(chip => {
    chip.classList.remove('bg-primary', 'text-on-primary');
    chip.classList.add('bg-surface-container', 'text-on-surface');
  });
  event.target.classList.add('bg-primary', 'text-on-primary');
  event.target.classList.remove('bg-surface-container', 'text-on-surface');

  items.forEach(item => {
    if (type === 'all') {
      item.classList.remove('hidden');
    } else if (item.getAttribute('data-type') === type) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
