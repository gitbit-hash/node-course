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
	res.send({
		location: 'Cairo',
		forcast: "It's sunny",
	});
});

app.listen(3000, () => {
	console.log('app is running at port 3000');
});
