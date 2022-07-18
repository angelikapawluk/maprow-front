var map = L.map('map').setView([51.937, 15.5044], 14); // location of Zielona Góra

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.937, 15.5044], {alt: 'Zielona Góra'}).addTo(map).bindPopup('Welcome in Zielona Góra').openPopup();