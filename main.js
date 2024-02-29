// Sélectionnez le bouton de retour en haut de la page
var backToTopButton = document.querySelector('.back-to-top');

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
// excursion
// document.addEventListener("DOMContentLoaded", function() {
//     // Sélectionner toutes les cartes d'excursion
//     var excursionCards = document.querySelectorAll('.excursion-card');
  
//     // Ajouter un écouteur d'événement à chaque carte
//     excursionCards.forEach(function(card) {
//       card.addEventListener('mouseenter', function() {
//         // Ajouter la classe 'hover' au survol de la carte
//         this.classList.add('hover');
//       });
  
//       card.addEventListener('mouseleave', function() {
//         // Retirer la classe 'hover' lorsque la souris quitte la carte
//         this.classList.remove('hover');
//       });
//     });
//   });
// // end excursion

// // reservation
// document.addEventListener("DOMContentLoaded", function() {
//     // Sélectionner le formulaire
//     var form = document.querySelector('form');
  
//     // Ajouter un écouteur d'événement pour la soumission du formulaire
//     form.addEventListener('submit', function(event) {
//       // Empêcher la soumission par défaut du formulaire
//       event.preventDefault();
  
//       // Valider les champs du formulaire
//       var nom = document.getElementById('nom').value;
//       var prenom = document.getElementById('prenom').value;
//       var ville = document.getElementById('ville').value;
//       var codePostal = document.getElementById('code-postal').value;
//       var email = document.getElementById('email').value;
//       var dateExcursion = document.getElementById('date-excursion').value;
//       var departDe = document.getElementById('depart-de').value;
//       var nombrePersonnes = document.getElementById('nombre-personnes').value;
//       var excursionChoisie = document.getElementById('excursion-choisie').value;
  
//       // Exemple de validation: Vérifier si les champs obligatoires sont vides
//       if (nom === '' || prenom === '' || ville === '' || codePostal === '' || email === '' || dateExcursion === '' || departDe === '' || nombrePersonnes === '' || excursionChoisie === '') {
//         alert('Veuillez remplir tous les champs obligatoires.');
//         return;
//       }
  
//       // Envoyer le formulaire si la validation est réussie
//       // form.submit();
//       alert('Formulaire soumis avec succès!');
//     });
//   });
  
// // end reservation

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



// api map


// const apiKey = "12d0553907cfeb9f0312a000322e34a487a142660a6dac61feea1b39a6843820";
// const apiUrl = `https://serpapi.com/search.json?engine=google_maps&q=calanque+du+mugel&ll=%4040.7455096%2C-74.0083012%2C14z&google_domain=google.com&hl=fr&type=search&api_key=${apiKey}`;




// // Effectuer la requête à l'API SerpApi
// fetch(apiUrl)
//     .then(response => response.json()) // Convertir la réponse en JSON
//     .then(data => {
//         // Traitement des données de réponse
//         const searchResults = data.organic_results.map(result => {
//             return `<div>
//                         <h2>${result.title}</h2>
//                         <p>${result.snippet}</p>
//                         <p><a href="${result.link}" target="_blank">Lien vers la page</a></p>
//                     </div>`;
//         }).join('');

//         // Afficher les résultats sur la page
//         document.getElementById('searchResults').innerHTML = searchResults;
//     })
//     .catch(error => {
//         console.error('Erreur lors de la requête:', error);
//     });
// import { getJson } from "serpapi";



    // function initMap() {
    //     // Déclaration de votre clé API SerpApi
    //     const apiKey = "12d0553907cfeb9f0312a000322e34a487a142660a6dac61feea1b39a6843820";

    //     // Construction de l'URL de requête à l'API SerpApi
    //     const apiUrl = `https://serpapi.com/search.json?engine=google&q=calanque+du+mugel+la+ciotat&location=Austin%2C+Texas%2C+United+States&google_domain=google.com&gl=us&hl=en&api_key=${apiKey}`;

    //     // Effectuer la requête à l'API SerpApi
    //     fetch(apiUrl)
    //         .then(response => response.json()) // Convertir la réponse en JSON
    //         .then(data => {
    //             // Extraire les données de localisation
    //             const location = data.local_results[0].position;

    //             // Créer une nouvelle carte Google Maps centrée sur la position obtenue
    //             const map = new google.maps.Map(document.getElementById('map'), {
    //                 center: location,
    //                 zoom: 12 // Niveau de zoom par défaut
    //             });

    //             // Ajouter un marqueur sur la carte pour marquer l'emplacement
    //             new google.maps.Marker({
    //                 position: location,
    //                 map: map,
    //                 title: "Calanque du Mugel, La Ciotat"
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Erreur lors de la requête à l\'API SerpApi:', error);
    //         });
    //         window.onload = function() {
    //           initMap();
    //       };

    // }

   



// end api

// sign in up
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('switchToSignIn').addEventListener('click', function () {
//     document.getElementById('signInForm').style.display = 'block';
//     document.getElementById('signUpForm').style.display = 'none';
//   });

//   document.getElementById('switchToSignUp').addEventListener('click', function () {
//     document.getElementById('signInForm').style.display = 'none';
//     document.getElementById('signUpForm').style.display = 'block';
//   });
// });
// end sign in up