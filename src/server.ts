import express, { response } from 'express';

const app = express();

const users = [ 'Juninho', 'Fredão', 'Fred', 'Jonatan' ];

app.get('/users', (request, response) => {
	const search = String(request.query.search);

	const filtereUsers = search ? users.filter((user) => user.includes(search)) : users;

	response.json(filtereUsers);
});

app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id);

	const user = users[id];

	return response.json(user);
});

app.post('/users', (request, response) => {
	const user = {
		name: 'Juninho',
		email: 'juninho.paes.182@gmail.com'
	};

	return response.json(user);
});

app.listen(3333);
