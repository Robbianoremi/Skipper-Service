// excursion
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner toutes les cartes d'excursion
    var excursionCards = document.querySelectorAll('.excursion-card');
  
    // Ajouter un écouteur d'événement à chaque carte
    excursionCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        // Ajouter la classe 'hover' au survol de la carte
        this.classList.add('hover');
      });
  
      card.addEventListener('mouseleave', function() {
        // Retirer la classe 'hover' lorsque la souris quitte la carte
        this.classList.remove('hover');
      });
    });
  });
// end excursion

// reservation
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le formulaire
    var form = document.querySelector('form');
  
    // Ajouter un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function(event) {
      // Empêcher la soumission par défaut du formulaire
      event.preventDefault();
  
      // Valider les champs du formulaire
      var nom = document.getElementById('nom').value;
      var prenom = document.getElementById('prenom').value;
      var ville = document.getElementById('ville').value;
      var codePostal = document.getElementById('code-postal').value;
      var email = document.getElementById('email').value;
      var dateExcursion = document.getElementById('date-excursion').value;
      var departDe = document.getElementById('depart-de').value;
      var nombrePersonnes = document.getElementById('nombre-personnes').value;
      var excursionChoisie = document.getElementById('excursion-choisie').value;
  
      // Exemple de validation: Vérifier si les champs obligatoires sont vides
      if (nom === '' || prenom === '' || ville === '' || codePostal === '' || email === '' || dateExcursion === '' || departDe === '' || nombrePersonnes === '' || excursionChoisie === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
  
      // Envoyer le formulaire si la validation est réussie
      // form.submit();
      alert('Formulaire soumis avec succès!');
    });
  });
  
// end reservation