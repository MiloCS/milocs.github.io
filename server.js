const express = require('express');
const bodyParser = require('body-parser');
const port = 80;
const request = require('request');

let customRequest = request.defaults({
	headers: {'User-Agent': 'MiloCS'}
});

const dirname = "C:\\Users\\Milo Cason-Snow\\Programming\\personal_site";
const app = express();
app.use(bodyParser.json());
app.use(express.static(dirname));

app.get('/', (req, res) => res.sendFile(dirname + "\\" + "index.html"));
app.get('/projects', (req, res) => res.sendFile(dirname + "\\" + "projects.html"));
app.get('/home', (req, res) => res.sendFile(dirname + "\\" + "index.html"));

// function requestGithub() {
// 	let result;
// 	customRequest('https://api.github.com/users/MiloCS/repos', {json: true}, (err, res, body) => {
// 		result = body;
// 	});
// 	return result;
// }

// app.get('/projects', (req, res) => {
// 	customRequest('https://api.github.com/users/MiloCS/repos', {json: true}, (err, res, body) => {
//     	res.json(JSON.parse(body));
//     });
// });

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
