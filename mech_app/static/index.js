// js for front carousel

const cards = document.querySelectorAll('.card');
const navigation = document.querySelectorAll('.wrapper button');
const extraCards = [];
let currentCard = 0;

for (let i = 0; i < cards.length; i++) {
  const offsets = [1, 2, 3, 4].map((offset) => ({
    plus: offset,
    minus: -offset,
  }));
  const card = {};
  for (const o of offsets) {
    card[`plus${o.plus}`] =
      o.plus === 1 ? (i + 1) % cards.length : (i + o.plus) % cards.length;
    card[`minus${Math.abs(o.minus)}`] =
      o.minus === 1 ? i : (i + o.minus + cards.length) % cards.length;
  }
  extraCards.push(card);
}

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
  for (var i = currentCard + 1; i != cards.length; i++) {
    cards[i].style.opacity = 0;
  }

  cards[currentCard].style.transform = `none`;
  cards[currentCard].style.zIndex = 1;
  cards[currentCard].style.filter = 'none';
  cards[currentCard].style.opacity = 1;

  cards[
    extraCards[currentCard].minus4
  ].style.transform = `translateX(-480px) translateY(160px) scale(0.2) perspective(16px) rotateY(1deg)`;
  cards[extraCards[currentCard].minus4].style.zIndex = -4;
  cards[extraCards[currentCard].minus4].style.opacity = 0;

  cards[
    extraCards[currentCard].minus3
  ].style.transform = `translateX(-360px) translateY(120px) scale(0.4) perspective(16px) rotateY(1deg)`;
  cards[extraCards[currentCard].minus3].style.zIndex = -3;
  cards[extraCards[currentCard].minus3].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].minus3].style.opacity = 0.4;

  cards[
    extraCards[currentCard].minus2
  ].style.transform = `translateX(-240px) translateY(80px) scale(0.6) perspective(16px) rotateY(1deg)`;
  cards[extraCards[currentCard].minus2].style.zIndex = -2;
  cards[extraCards[currentCard].minus2].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].minus2].style.opacity = 0.4;

  cards[
    extraCards[currentCard].minus1
  ].style.transform = `translateX(-120px) translateY(40px) scale(0.8) perspective(16px) rotateY(1deg)`;
  cards[extraCards[currentCard].minus1].style.zIndex = -1;
  cards[extraCards[currentCard].minus1].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].minus1].style.opacity = 0.4;

  cards[
    extraCards[currentCard].plus1
  ].style.transform = `translateX(120px) translateY(40px) scale(0.8) perspective(16px) rotateY(-1deg)`;
  cards[extraCards[currentCard].plus1].style.zIndex = -1;
  cards[extraCards[currentCard].plus1].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].plus1].style.opacity = 0.4;

  cards[
    extraCards[currentCard].plus2
  ].style.transform = `translateX(240px) translateY(80px) scale(0.6) perspective(16px) rotateY(-1deg)`;
  cards[extraCards[currentCard].plus2].style.zIndex = -2;
  cards[extraCards[currentCard].plus2].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].plus2].style.opacity = 0.4;

  cards[
    extraCards[currentCard].plus3
  ].style.transform = `translateX(360px) translateY(120px) scale(0.4) perspective(16px) rotateY(-1deg)`;
  cards[extraCards[currentCard].plus3].style.zIndex = -3;
  cards[extraCards[currentCard].plus3].style.filter = 'blur(1px)';
  cards[extraCards[currentCard].plus3].style.opacity = 0.4;

  cards[
    extraCards[currentCard].plus4
  ].style.transform = `translateX(480px) translateY(160px) scale(0.2) perspective(16px) rotateY(-1deg)`;
  cards[extraCards[currentCard].plus4].style.zIndex = -4;
  cards[extraCards[currentCard].plus4].style.opacity = 0;
}
loadCards();
