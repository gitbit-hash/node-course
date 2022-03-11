const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('boston', (error, geocodeData) => {
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
