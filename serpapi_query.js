
// const apiKey = "12d0553907cfeb9f0312a000322e34a487a142660a6dac61feea1b39a6843820";
// const apiUrl = `https://serpapi.com/search.json?engine=google_maps&q=calanque+du+mugel&ll=%4040.7455096%2C-74.0083012%2C14z&google_domain=google.com&hl=fr&type=search&api_key=${apiKey}`;


// const { getJson } = require("serpapi");
// getJson({
//   apiKey: "12d0553907cfeb9f0312a000322e34a487a142660a6dac61feea1b39a6843820",
//   engine: "google_maps",
//   q: "calanque du mugel",
//   google_domain: "google.com",
//   ll: "@40.7455096,-74.0083012,14z",
//   type: "search",
//   hl: "fr"
// }, (json) => {
//   console.log(json);
// });

// getJson({
//   engine: "google_maps",
//   api_key: "12d0553907cfeb9f0312a000322e34a487a142660a6dac61feea1b39a6843820", 
//   q: "calanque du mugel",
//   location: "@40.7455096,-74.0083012,14z",
// }, (json) => {
//   console.log(json["organic_results"]);
// });


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
