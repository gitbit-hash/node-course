const axios = require("axios").default;

require("dotenv").config();

const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Cairo&aqi=no`;

axios.get(url).then((res) => console.log(res));
