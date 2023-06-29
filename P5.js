window.onload = function() {
    const cards = document.querySelectorAll('.box-layout div');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  };