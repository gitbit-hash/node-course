const axios = require("axios").default;
const geoCode = require("./utils/geocode");

require("dotenv").config();

const urlWeatherapi = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=48.8567,2.3508`;
const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

geoCode("ct", (error, data) => {
	if (error) {
		console.log(error);
	} else {
		console.log({
			latitude: data.features[0].center[0],
			longitude: data.features[0].center[1],
			location: data.features[0].place_name,
		});
	}
});
