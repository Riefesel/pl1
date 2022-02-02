function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 49.635278, lng: -57.956811},
 
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
const locations = [{ lat: 49.5661, lng: -57.832231},
    { lat: 49.492747, lng: -57.927566},
    { lat: 49.478171, lng: -57.973777},
    { lat: 49.490441, lng: -58.077168},
    { lat: 49.483501, lng: -58.121668},
    { lat: 49.478115, lng: -58.131408},
    { lat: 49.51797, lng: -57.874722},
    { lat: 49.635278, lng: -57.956811},
    { lat: 49.624326, lng: -57.930105},
    { lat: 49.623947, lng: -57.930161},
    { lat: 49.656548, lng: -57.955756},
    { lat: 49.78736, lng: -57.874409},
    { lat: 49.781881, lng: -57.842815},
    { lat: 49.835582, lng: -57.86306},
    { lat: 49.919906, lng: -57.81352},
    { lat: 49.368158, lng: -57.966368},
    { lat: 49.461155, lng: -58.117346},
    { lat: 49.438605, lng: -58.131419},
    { lat: 49.478135, lng: -57.974012},
    { lat: 49.42682, lng: -57.739073},
    { lat: 49.426602, lng: -57.73874},
    { lat: 49.46321, lng: -57.659363},
    { lat: 49.600442, lng: -57.936282},
    { lat: 49.60764, lng: -57.939934},
    { lat: 49.602946, lng: -57.955303}
];