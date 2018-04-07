export const initMap = function(google) {
    const mapCenter = {lat: 59.927270, lng: 30.336667};
    const mapStyle = [
        {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#444444',
                },
            ],
        },
        {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [
                {
                    'color': '#f2f2f2',
                },
            ],
        },
        {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [
                {
                    'visibility': 'off',
                },
            ],
        },
        {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [
                {
                    'saturation': -100,
                },
                {
                    'lightness': 45,
                },
            ],
        },
        {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [
                {
                    'visibility': 'simplified',
                },
            ],
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'visibility': 'off',
                },
            ],
        },
        {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [
                {
                    'visibility': 'off',
                },
            ],
        },
        {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
                {
                    'color': '#61dac9',
                },
                {
                    'visibility': 'on',
                },
            ],
        },
    ];
    new google.maps.Map(document.getElementById('gmap'), {
        zoom: 12,
        center: mapCenter,
        styles: mapStyle,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        scaleControl: false,
        fullscreenControl: false,
    });

};