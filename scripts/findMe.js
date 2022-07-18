function onLocationFound(e) {
	var radius = e.accuracy;
	L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
	alert(e.message);
}

map.on('locationerror', onLocationError);

document.getElementById("btn-findMe").addEventListener("click", map.locate({ setView: true, maxZoom: 16 }));

function onSpeedFound(e) {
    var speedTest = e.speed;

    
}

