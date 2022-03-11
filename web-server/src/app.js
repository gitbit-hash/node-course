const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('Hello from Express');
});

app.get('/help', (req, res) => {
	res.send('Help page');
});

app.get('/weather', (req, res) => {
	res.send('Weather page');
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.listen(3000, () => {
	console.log('app is running at port 3000');
});
