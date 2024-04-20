// js for front carousel

const carousel = Array.prototype.slice.call(document.querySelectorAll('.card'));
const arrowBtns = document.querySelectorAll('.wrapper button');

let active = carousel.length / 2;

arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    active = btn.id === 'left' ? active - 1 : active + 1;
    loadShow();
  });
});

let carouselInView = 3;

// carouselSlice
//   .slice(-carouselInView)
//   .reverse()
//   .forEach((card) => {
//     carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
//   });

// carouselSlice.slice(0, carouselInView).forEach((card) => {
//   carousel.insertAdjacentHTML('beforeend', card.outerHTML);
// });

function loadShow() {
  let stt = 0;
  carousel[active].style.transform = `none`;
  carousel[active].style.zIndex = 1;
  carousel[active].style.filter = 'none';
  carousel[active].style.opacity = 1;
  for (var i = active + 1; i < carousel.length; i++) {
    stt++;
    carousel[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    carousel[i].style.zIndex = -stt;
    carousel[i].style.filter = 'blur(1px)';
    carousel[i].style.opacity = stt > 3 ? 0 : 0.4;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    carousel[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    carousel[i].style.zIndex = -stt;
    carousel[i].style.filter = 'blur(1px)';
    carousel[i].style.opacity = stt > 3 ? 0 : 0.4;
  }
}
loadShow();
