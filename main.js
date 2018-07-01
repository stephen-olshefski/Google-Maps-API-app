function initMap() {
    //Map options
    let options = {
        zoom: 9,
        center: { lat: 40.580382, lng: -74.285147 }
    }
    //Map output
    let map = new google.maps.Map(document.getElementById('map'), options);
    //Event listener for map click then place marker
    google.maps.event.addListener(map, 'click', function (event) {
        addMarker({ coords: event.latLng });
    });

    /*
    //Add marker
    let marker = new google.maps.Marker({
        position: { lat: 40.580382, lng: -74.285147 },
        map: map
    });
    */

    //Marker Array
    let markers = [
        {
            coords: { lat: 40.580382, lng: -74.285147 },
            iconImage: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            content: '<h1>Avenel, NJ</h1>'
        },
        {
            coords: { lat: 40.735657, lng: -74.172367 },
            content: '<h1>Newark, NJ</h1>'
        },
        {
            coords: { lat: 40.357298, lng: -74.667223 },
            content: '<h1>Princeton, NJ</h1>'
        }
    ];
    //Loop through markers
    for (let i in markers) {
        //Call addMarker function
        addMarker(markers[i]);
    }
    //Add marker function
    function addMarker(properties) {
        let marker = new google.maps.Marker({
            position: properties.coords,
            map: map,
            //icon: properties.iconImage
        });
        //Check for custom icon
        if (properties.iconImage) {
            //Set icon image
            marker.setIcon(properties.iconImage);
        }
        //Check for content
        if (properties.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}