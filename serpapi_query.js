
     var apiKey = 'AIzaSyD4LJPVI3mK7kWobpbNcczAFedU2MEFy68';
    
    // Fonction d'initialisation de la carte


     function initMap() {
        // Coordonnées de l'emplacement
        var myLatLng = {lat: 43.16703414916992, lng: 5.597321033477783};

        // Récupérer l'élément contenant la carte
        var mapElement = document.getElementById('map');

        // Vérifier si l'élément est trouvé
        if (mapElement) {
          // Créer une nouvelle carte Google Maps avec des options de zoom et de centrage
          var map = new google.maps.Map(mapElement, {
            zoom: 14,
            center: myLatLng
          });

          // Créer un marqueur pour l'emplacement spécifié
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'My location'
          });
        } else {
          console.error("L'élément contenant la carte n'a pas été trouvé.");
        }
      }