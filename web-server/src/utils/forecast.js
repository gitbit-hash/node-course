const axios = require('axios').default;

require('dotenv').config();

const forecast = (lat, lon, callback) => {
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${
		process.env.WEATHER_API_KEY
	}&q=${encodeURIComponent(lat)},${encodeURIComponent(lon)}`;

	axios
		.get(url)
		.then(({ data }) => {
			callback(
				undefined,
				`Today's Weather in ${data.location.name}, It's currently ${data.current.temp_c}\xB0C, It's ${data.forecast.forecastday[0].day.condition.text}, And there is ${data.forecast.forecastday[0].day.daily_will_it_rain}% chance of rain`
			);
		})
		.catch((error) => callback(error.message, undefined));
};

module.exports = forecast;
