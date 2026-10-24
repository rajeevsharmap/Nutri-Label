/* Phone screen navigation: jumpToSimulatorScreen() + bottom-nav highlight. */

// Jump to specific simulator screen
function jumpToSimulatorScreen(screenNum) {
  currentSimScreen = screenNum;
  
  // Hide all screens
  const screens = document.querySelectorAll('.sim-screen');
  screens.forEach(s => {
    s.classList.add('hidden');
    s.classList.remove('flex');
  });

  // Show target screen
  const target = document.getElementById(`sim-screen-${screenNum}`);
  if (target) {
    target.classList.remove('hidden');
    if (screenNum === 1 || screenNum === 2 || screenNum === 3 || screenNum === 5 || screenNum === 8) {
      target.classList.add('flex');
    }
  }

  // Update screen indicator text
  const ind = document.getElementById('active-screen-indicator');
  if (ind) ind.innerText = `Screen ${screenNum} / 13`;

  // Update index list button styles
  const navBtns = document.querySelectorAll('.screen-nav-btn');
  navBtns.forEach(btn => {
    if (parseInt(btn.getAttribute('data-screen')) === screenNum) {
      btn.classList.add('bg-primary', 'text-on-primary');
      btn.classList.remove('text-on-surface');
    } else {
      btn.classList.remove('bg-primary', 'text-on-primary');
      btn.classList.add('text-on-surface');
    }
  });

  // Update bottom nav active indicator
  updateBottomNavPill(screenNum);

  // Scroll phone viewport to top
  const phoneCont = document.getElementById('phone-screen-container');
  if (phoneCont) phoneCont.scrollTop = 0;
}

function updateBottomNavPill(screenNum) {
  const homeBtn = document.getElementById('bnav-home');
  const scanBtn = document.getElementById('bnav-scan');
  const queueBtn = document.getElementById('bnav-queue');
  const profBtn = document.getElementById('bnav-profile');

  const resetColors = (el) => {
    if (!el) return;
    el.classList.remove('text-primary');
    el.classList.add('text-on-surface-variant');
  };
  const setActive = (el) => {
    if (!el) return;
    el.classList.add('text-primary');
    el.classList.remove('text-on-surface-variant');
  };

  [homeBtn, scanBtn, queueBtn, profBtn].forEach(resetColors);

  if (screenNum === 4 || screenNum === 6 || screenNum === 7 || screenNum === 11 || screenNum === 13) setActive(homeBtn);
  else if (screenNum === 5 || screenNum === 8 || screenNum === 9) setActive(scanBtn);
  else if (screenNum === 10) setActive(queueBtn);
  else if (screenNum === 2 || screenNum === 3 || screenNum === 12) setActive(profBtn);
}
