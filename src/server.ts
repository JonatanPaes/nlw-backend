import express, { response } from 'express';

const app = express();

app.use(express.json());

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
	const data = request.body;

	const user = {
		name: data.name,
		email: data.email
	};

	return response.json(user);
});

app.listen(3333);
