// js for front carousel

const cards = document.querySelectorAll('.card');
const navigation = document.querySelectorAll('.wrapper button');
const visibleCards = [];
let currentCard = 0;

for (let i = 0; i < cards.length; i++) {
  const offsets = [-4, -3, -2, -1, 1, 2, 3, 4].map((offset) => ({
    value: offset,
  }));
  const card = [];
  for (const o of offsets) {
    card.push((i + o.value + cards.length) % cards.length);
  }
  visibleCards.push(card);
}

navigation.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.id === 'right'
      ? (currentCard = visibleCards[currentCard][4])
      : (currentCard = visibleCards[currentCard][3]);
    loadCards();
  });
});

function loadCards() {
  const card = cards[currentCard];
  let visibleCard = visibleCards[currentCard];

  card.style.transform = 'none';
  card.style.zIndex = 5;
  card.style.filter = 'none';
  card.style.opacity = 1;

  for (var i = currentCard + 1; i != cards.length; i++) {
    cards[i].style.opacity = 0;
  }

  for (let i = 0; i < visibleCard.length; i++) {
    const card = cards[visibleCard[i]];
    card.style.filter = 'blur(1px)';
    card.style.zIndex = i <= 3 ? i + 1 : -(i - 3);
    card.style.opacity = i <= 0 || i >= 7 ? '0' : '.4';
    card.style.transform =
      i <= 3
        ? `translateX(${-((4 - i) * 120)}px) translateY(${
            (4 - i) * 40
          }px) scale(${(i + 1) * 0.2}) perspective(16px) rotateY(1deg)`
        : `translateX(${(i - 3) * 120}px) translateY(${(i - 3) * 40}px) scale(${
            (8 - i) * 0.2
          }) perspective(16px) rotateY(-1deg)`;
    console.log(card);
  }
}
loadCards();
