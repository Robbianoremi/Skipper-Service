

document.addEventListener('DOMContentLoaded', function () {
    const lieuSelect = document.getElementById('lieu');
    const dureeSelect = document.getElementById('duree');
    const prixInput = document.getElementById('prix');
    const personnesInput = document.getElementById('personnes');
    const departSelect = document.getElementById('depart');
    const excursionsContainer = document.getElementById('excursions');

    // Données d'excursions (vous pouvez les remplacer par vos propres données)
    const excursionsData = [
        { lieu: 'Bandol', duree: 'Demi-journée / Matinée', prix: 650 },
        { lieu: 'Bandol', duree: 'Demi-journée / Après-midi', prix: 650 },
        { lieu: 'Bandol', duree: 'Journée', prix: 800 },
        { lieu: 'Bandol', duree: 'Sunset', prix: 650 },
        { lieu: 'St Cyr Sur Mer', duree: 'Demi-journée / Matinée', prix: 650 },
        { lieu: 'St Cyr Sur Mer', duree: 'Demi-journée / Après-midi', prix: 650 },
        { lieu: 'St Cyr Sur Mer', duree: 'Journée', prix: 800 },
        { lieu: 'St Cyr Sur Mer', duree: 'Sunset', prix: 650 },
        { lieu: 'La Ciotat', duree: 'Demi-journée / Matinée', prix: 650 },
        { lieu: 'La Ciotat', duree: 'Demi-journée / Après-midi', prix: 650 },
        { lieu: 'La Ciotat', duree: 'Journée', prix: 800 },
        { lieu: 'La Ciotat', duree: 'Sunset', prix: 650 },
        { lieu: 'Cassis', duree: 'Demi-journée / Matinée', prix: 650 },
        { lieu: 'Cassis', duree: 'Demi-journée / Après-midi', prix: 650 },
        { lieu: 'Cassis', duree: 'Journée', prix: 800 },
        { lieu: 'Cassis', duree: 'Sunset', prix: 650 },
        { lieu: 'Marseille', duree: 'Journée', prix: 800 },



        
    ];

    // Fonction pour afficher les excursions
    function afficherExcursions(excursions) {
        excursionsContainer.innerHTML = '';
        excursions.forEach(excursion => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${excursion.lieu}</h2>
                <p>Durée: ${excursion.duree}</p>
                <p>Prix: ${excursion.prix}€</p>
            `;
            excursionsContainer.appendChild(card);
        });
    }

    // Fonction pour filtrer les excursions
    function filtrerExcursions() {
        const lieu = lieuSelect.value;
        const duree = dureeSelect.value;
        const prix = prixInput.value;

        let excursionsFiltrees = excursionsData.filter(excursion => {
            return (lieu === 'Tous' || excursion.lieu === lieu) &&
                (duree === 'Tous' || excursion.duree === duree) &&
                (!prix || excursion.prix <= prix);
        });

        afficherExcursions(excursionsFiltrees);
    }

    // Afficher les excursions au chargement de la page
    afficherExcursions(excursionsData);

    // Écouter les changements dans les filtres et filtrer les excursions en conséquence
    lieuSelect.addEventListener('change', filtrerExcursions);
    dureeSelect.addEventListener('change', filtrerExcursions);
    prixInput.addEventListener('input', filtrerExcursions);
});

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.createElement('button');
    searchBtn.textContent = 'Rechercher';
    searchBtn.id = 'searchBtn';
    
    document.querySelector('.filters').appendChild(searchBtn);
    
    searchBtn.addEventListener('click', function() {
        filtrerExcursions();
    });
    
    
});