const axios = require("axios").default;

require("dotenv").config();

const geoCode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

	axios
		.get(url)
		.then((res) => {
			if (res.data.features.length === 0) {
				callback("Cannot find location, try another seearch!", undefined);
			} else {
				callback(undefined, res.data);
			}
		})
		.catch(() =>
			callback("Unable to connect to location services!", undefined)
		);
};

module.exports = geoCode;
