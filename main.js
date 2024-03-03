


// button back up

// Sélectionnez le bouton de retour en haut de la page
var backToTopButton = document.querySelector('.back-to-top ');

// Ajoutez un événement de défilement pour surveiller le défilement de la page
window.addEventListener('scroll', function() {
  // Si le défilement de la page dépasse 400 pixels, affichez le bouton de retour en haut, sinon masquez-le
  if (window.scrollY > 400) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton de retour en haut
backToTopButton.addEventListener('click', function() {
  // Faites défiler la page vers le haut en douceur en utilisant l'API ScrollTo
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// end button back up


// // galerie

function adjustImageHeight() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    img.style.height = `${img.offsetWidth}px`; // Ajuste la hauteur en fonction de la largeur pour maintenir le ratio
  });
}

// Appeler la fonction lors du chargement initial et lors du redimensionnement de la fenêtre
window.addEventListener('load', adjustImageHeight);
window.addEventListener('resize', adjustImageHeight);


  

// end galerie



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('switchToSignIn').addEventListener('click', function () {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
  });

  document.getElementById('switchToSignUp').addEventListener('click', function () {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
  });
});