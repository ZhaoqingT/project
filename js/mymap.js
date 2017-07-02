var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyDHNnsp8pXJTrCtHF1sizDksBFAyRq_hVo';


function initMap() {
    var position = {lat: 40.766, lng: -73.946};
    var map = new google.maps.Map($('#map')[0], {
        zoom: DEFAULT_ZOOM,
        center: position
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    $.ajax({
	url:'/nearby_search',
	data:{
	    'location':position.lag + ',' + position.lng,
	    'type':'restaurant',
	    'key':GOOGLE_API_KEY,
 	    'radius':500
	},
	success:function(data){
	    debugger;
  	},
	failure:function(data){
	    debugger;
	}
    });
}

