function initMap() {
    var uluru = {lat: 40.766, lng: -73.946};
    var map = new google.maps.Map($('#map')[0], {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

