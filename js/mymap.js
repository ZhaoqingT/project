var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyDHNnsp8pXJTrCtHF1sizDksBFAyRq_hVo';
var DEFAULT_RADIUS = 1500;
var DEFAULT_LAT = 40.766082;
var DEFAULT_LNG = -73.946066;

$(function(){
    function initMap() {
	var map = new google.maps.Map($('#map')[0], {
	    zoom:DEFAULT_ZOOM,
	    center:{
		lat:DEFAULT_LAT,
		lng: DEFAULT_LNG
	    }
	});
	var params = {
	    'location':new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
	    'radius':DEFAULT_RADIUS,
	    'type':'restaurant'
	};
	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(params, function(results, status) {
	    if(status == google.maps.places.PlacesServiceStatus.OK){
		_.each(results, function(place){
		    var marker = new google.maps.Marker({
			position: {
			    'lat': place.geometry.location.lat(),
			    'lng': place.geometry.location.lng()
			},
			map: map
		    });
		});
	    }
	});
    }
    initMap();
});

