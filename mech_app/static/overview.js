const mechDetails = [
  '{{ mech.year }}',
  'Groundhog Day',
  'Carrot Cake Day',
  'Wear Red Day',
  "Weatherperson's Day",
  'Chopsticks Day',
  'Periodic Table Day',
  'Kite Flying Day',
  'Pizza Day',
  'Umbrella Day',
  "Inventor's Day",
  'Global Movie Day',
  'Tortellini Day',
  "Valentine's Day",
];

const ulEl = document.querySelector('ul');
let infoNumber = 0;
let activeIndex = 14;
const rotate = -360 / 14;
init();

function init() {
  mechDetails.forEach((detail, idx) => {
    const liEl = document.createElement('li');
    liEl.style.setProperty('--detail_idx', idx);
    liEl.innerHTML = `<mechRow>${idx + 1}<span>${detail}</span></mechRow>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty('--rotateDegrees', rotate);
  infoItem(0);
}

function infoItem(nr) {
  infoNumber += nr;
  ulEl.style.setProperty('--currentDetail', infoNumber);

  const activeEl = document.querySelector('li.active');
  if (activeEl) activeEl.classList.remove('active');

  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  newActiveEl.classList.add('active');
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      infoItem(-1);
      break;
    case 'ArrowDown':
      infoItem(1);
      break;
    default:
      return;
  }
});
