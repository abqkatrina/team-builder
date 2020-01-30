const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const members = {
		id: 0,
	    name: 'Katrina Hernandez',
		gitName: 'abqkatrina',
		email: 'abqkatrina@gmail.com',
		role: 'Web Dev',
	};

app.get('/api/members', (req, res) => {
	res.send(memberss);
});

app.get('/api/members/:id', (req, res) => {
	const members = memberss.filter(members => members.id.toString() === req.params.id)[0];
	res.status(200).json(members);
});

app.post('/api/members', (req, res) => {
	if (req.body.id !== undefined) members.push(req.body);
	res.status(201).json(members);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
