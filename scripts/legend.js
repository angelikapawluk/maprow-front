/*Legend specific*/
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
	var div = L.DomUtil.create('div', 'legend');
	div.innerHTML += '<span style="color: orangered; font-weight: bold">Długość trasy: 34 km</span>';
	div.innerHTML += '<h4>Legenda</h4>';
	div.innerHTML += '<i style="background: #477AC2"></i><span>Drogi miejskie</span><br>';
	div.innerHTML += '<i style="background: #448D40"></i><span>Drogi utwardzone</span><br>';
	div.innerHTML += '<i style="background: #E6E696"></i><span>Drogi nieutwardzone</span><br>';
	div.innerHTML += '<i style="background: #E8E6E0"></i><span>Szlaki rowerowe</span><br>';
	div.innerHTML += '<i style="background: #FFFFFF"></i><span>Stacja rowerów miejskich</span><br>';
	div.innerHTML +=
		'<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

	return div;
};

legend.addTo(map);
