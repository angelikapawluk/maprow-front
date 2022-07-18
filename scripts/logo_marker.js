L.Control.Watermark = L.Control.extend({
	onAdd: function (map) {
		var img = L.DomUtil.create('img');

		img.src = './img/logo_2.png';
		img.style.width = '150px';
		return img;
	},
});

L.control.watermark = function (opts) {
	return new L.Control.Watermark(opts);
};

L.control.watermark({ position: 'topright' }).addTo(map);
