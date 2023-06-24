const likeButtons = document.querySelectorAll('.like-icon');

likeButtons.forEach(button => {
  const productId = button.dataset.productId;
  button.addEventListener('click', () => updateLikes(productId));
});

function updateLikes(productId) {
  fetch(`http://localhost:5500/likes/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById(`like-count-${productId}`).innerText = data.count;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

window.addEventListener('load', function() {
  likeButtons.forEach(button => {
    const productId = button.dataset.productId;
    fetch(`http://127.0.0.1:5500/likes/${productId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById(`like-count-${productId}`).innerText = data.count;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});

// Când pagina se încarcă, cere numărul de like-uri de la server pentru fiecare produs
window.addEventListener('load', function() {
  var cards = document.querySelectorAll('.cardCP');
  cards.forEach(function(card) {
    var id = card.getAttribute('data-id');
    fetch('/likes/' + id)
      .then(response => response.json())
      .then(data => {
        document.getElementById('like-count-' + id).innerText = data.count;
      });
  });
});

// Funcția care va fi apelată când utilizatorul dă click pe un buton de like
function updateLikes(id) {
  fetch('/likes/' + id, {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('like-count-' + id).innerText = data.count;
      var likeIcon = document.querySelector('.cardCP[data-id="' + id + '"] .like-icon');
      likeIcon.classList.remove('empty');
      likeIcon.classList.add('filled');
    });
}

window.updateLikes = updateLikes;
