const express = require('express');
const bodyParser = require('body-parser');
const port = 80;
const request = require('request');

const dirname = "C:\\Users\\Milo Cason-Snow\\Programming\\personal_site";
const app = express();
app.use(bodyParser.json());
app.use(express.static(dirname));

app.get('/', (req, res) => res.sendFile(dirname + "\\" + index.html));

app.get('/projects', (req, res) => {
	request.get('https://api.github.com/users/MiloCS/repos', {json: true}).then(response_list=> {
    for (let i=0; i<response_list.length; i++) {
    	console.log(response_list[i]);
    }
    res.json(response_list);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
