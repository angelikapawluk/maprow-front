	var map = L.map('map').setView([51.937, 15.5044], 14); // location of Zielona Góra City

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '© OpenStreetMap',
	}).addTo(map);

