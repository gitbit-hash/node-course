const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(process.cwd(), './puplic')));

app.get('/weather', (req, res) => {
	res.send({
		location: 'Cairo',
		forcast: "It's sunny",
	});
});

app.listen(3000, () => {
	console.log('app is running at port 3000');
});
