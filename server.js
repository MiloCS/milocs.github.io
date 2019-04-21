const express = require('express');
const bodyParser = require('body-parser');
const port = 80;

const dirname = "C:\\Users\\Milo Cason-Snow\\Programming\\Random Scripts\\personal_site";
const app = express();
app.use(bodyParser.json());
app.use(express.static(dirname));

app.get('/', (req, res) => res.sendFile(dirname + "\\" + index.html));

var x = app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
