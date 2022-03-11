const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), './templates/views'));

hbs.registerPartials(path.join(process.cwd(), './templates/partials'));

app.use(express.static(path.join(process.cwd(), './puplic')));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather app',
		name: 'Muhammad Salah',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About me',
		name: 'Muhammad Salah',
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help Page',
		name: 'Muhammad Salah',
		message: 'This is the help page',
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address',
		});
	}

	res.send({
		location: 'Cairo',
		forcast: "It's sunny",
		address: req.query.address,
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Muhammad Salah',
		errorMessage: 'Help article not found',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Muhammad Salah',
		errorMessage: 'This page is not available',
	});
});

app.listen(3000, () => {
	console.log('app is running at port 3000');
});
