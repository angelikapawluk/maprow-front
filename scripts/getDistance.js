function createMarker()
{
    var markerFrom = L.circleMarker([51.6100,77.2300], { color: "#F00", radius: 10 });
    var markerTo =  L.circleMarker([18.9750,72.8258], { color: "#4AFF00", radius: 10 });
    var from = markerFrom.getLatLng();
    var to = markerTo.getLatLng();
    markerFrom.bindPopup('Astec' + (from).toString());
    markerTo.bindPopup('Uczelnia' + (to).toString());
    map.addLayer(markerTo);
    map.addLayer(markerFrom);
    getDistance(from, to);
}

function getDistance(from, to)
{
    var container = document.getElementById('distance');
    container.innerHTML = ("New Delhi to Mumbai - " + (from.distanceTo(to)).toFixed(0)/1000) + ' km';
}