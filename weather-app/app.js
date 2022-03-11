const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) {
	console.log('Please provide a serach term');
} else {
	geoCode(location, (error, geocodeData) => {
		if (error) {
			return console.log(error);
		}

		forecast(
			geocodeData.latitude,
			geocodeData.longitude,
			(error, forecastData) => {
				if (error) {
					return console.log(error);
				}

				console.log(geocodeData.location);
				console.log(forecastData);
			}
		);
	});
}
