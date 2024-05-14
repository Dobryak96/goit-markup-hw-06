const cards = document.querySelectorAll('.nav-list');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('back');
  });
});