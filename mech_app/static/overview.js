const navigation = document.querySelectorAll('.wrapper button');
const currentUrl = window.location.href;
let mechId = parseInt(currentUrl.split('/').pop());
let cardsLength = 83;

navigation.forEach((btn) => {
  btn.addEventListener('click', () => {
    fetchNew(mechId);

    function fetchNew(mechId) {
      let direction = 1;
      if (btn.id === 'right') {
        mechId = (mechId + direction) % cardsLength;
      } else {
        mechId = (mechId - direction + cardsLength) % cardsLength;
      }
      fetch(`${mechId}`).then((response) => {
        if (response.ok) {
          window.location = `${mechId}`;
        } else {
          fetchNew(mechId);
        }
      });
    }
  });
});
