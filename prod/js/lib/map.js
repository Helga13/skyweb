if (document.getElementById('map')) {
	//console.log('Map exist');
	$(function () {})
	var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#96b1c3"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#20294e"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#363d5c"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#3a436b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#525a7f"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#192141"
            }
        ]
    }
];
	var markers = [];

	function initMap() {
		var myOptions = {
			zoom: 14
			, center: new google.maps.LatLng(53.8934059, 27.5088711)
//			, disableDefaultUI: true
			, scrollwheel: false
			, mapTypeControl: false
			, streetViewControl: false
//			, navigationControl: true
			, zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				, position: google.maps.ControlPosition.LEFT_TOP
			}
			, mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
			}
            , fullscreenControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
            }
		};
		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		var mapType = new google.maps.StyledMapType(styles, {
			name: "Grayscale"
		});
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
		setMarkers(map);
	}
	var beaches = [];
	$('.maps').each(function (index) {
		var cur_coords = [];
		cur_coords[0] = $(this).data('longitude');
		cur_coords[1] = $(this).data('latitude');
		beaches[index] = cur_coords;
	});
	var contentString = beaches[1];

	function setMarkers(map) {
		var image = {
			url: 'img/icons/icon_location.png'
			, size: new google.maps.Size(24, 35)
			, origin: new google.maps.Point(0, 0)
			, anchor: new google.maps.Point(12, 35)
		};
		var markersBounds = new google.maps.LatLngBounds();
		for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
			var marker = new google.maps.Marker({
				position: markerPosition
				, map: map
				, icon: image
			});
		}
	};
	initMap();
}