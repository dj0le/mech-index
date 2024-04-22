// js for front carousel

const cards = document.querySelectorAll('.card');
const navigation = document.querySelectorAll('.wrapper button');

let currentCard = 0;

navigation.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.id === 'right') {
      currentCard = (currentCard + 1) % cards.length;
    }
    if (btn.id === 'left') {
      currentCard = (currentCard - 1 + cards.length) % cards.length;
    }
    loadCards();
  });
});

function loadCards() {
  let stt = 0;
  cards[currentCard].style.transform = `none`;
  cards[currentCard].style.zIndex = 1;
  cards[currentCard].style.filter = 'none';
  cards[currentCard].style.opacity = 1;
  for (var i = currentCard + 1; i != cards.length; i++) {
    stt++;
    cards[i].style.transform = `translateX(${120 * stt}px) translateY(${
      40 * stt
    }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    cards[i].style.zIndex = -stt;
    cards[i].style.filter = 'blur(1px)';
    cards[i].style.opacity = stt > 3 ? 0 : 0.4;
  }
  stt = 0;
  for (var i = currentCard - 1; i >= 0; i--) {
    stt++;
    cards[i].style.transform = `translateX(${-120 * stt}px) translateY(${
      40 * stt
    }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    cards[i].style.zIndex = -stt;
    cards[i].style.filter = 'blur(1px)';
    cards[i].style.opacity = stt > 3 ? 0 : 0.4;
  }
}
loadCards();
