function initMap() {
  	var myLatLng = {lat: 38.926403, lng: -77.405725};
  	var styles = [ { "elementType": "geometry.stroke" },{ "stylers": [ { "saturation": -100 }, { "hue": "#cccccc" }, { "lightness": 10 }, { "gamma": 1.58 } ] } ];
   	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
  	var mapOptions = {
 	 	center: myLatLng,
    	scrollwheel: false,
    	zoom: 16,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
 	};
  	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
 		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	var image = 'images/marker.png';
	var marker = new google.maps.Marker({
 		map: map,
  		position: myLatLng,
  		icon: image,
    	title: 'www.brandi.com'
  });
}

