const searchInput = document.querySelector('.search');
const resultList = document.querySelector('.result-list');
const mapContainer = document.querySelector('#map');
const currentMarkers = [];


document.querySelector('.search').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
	    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
	    	.then(result => result.json())
	    	.then(parsedResult => {
	    		setResultList(parsedResult);
	    	});
    }
	
});

function setResultList(parsedResult) {
	resultList.innerHTML = '';
	for (const marker of currentMarkers) {
		map.removeLayer(marker);
	}
	map.flyTo(new L.LatLng(51.937, 15.5044), 14);
	for (const result of parsedResult) {
		const li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-action');
        
		li.innerHTML = JSON.stringify(
			{
				displayName: result.display_name,
				lat: result.lat,
				lon: result.lon
			},
			undefined,
			2
        );
        
		li.addEventListener('click', event => {
			for (const child of resultList.children) {
				child.classList.remove('active');
			}
			event.target.classList.add('active');
			const clickedData = JSON.parse(event.target.innerHTML);
			const position = new L.LatLng(clickedData.lat, clickedData.lon);
            map.flyTo(position, 17);
            resultList.innerHTML = '';
		});
		const position = new L.LatLng(result.lat, result.lon);
		currentMarkers.push(new L.marker(position).addTo(map));
		resultList.appendChild(li);
	}
}
