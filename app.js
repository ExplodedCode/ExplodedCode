require('dotenv').config();

const path = require('path');
var express = require('express');
const http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

var app = express();
app.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	})
);

app.use(express.static(path.join(__dirname, '/build')));

// Body Parser Middleware
app.use(bodyParser.json());

//Setting up server and SQL Connection
(async function () {
	const server = http.createServer(app);
	start(server);
})();

async function start(server) {
	try {
		// start servernp
		server.listen(port, () => console.log(`Listening on port ${port}`));

		// Invite email
		var Emailer = require('./controllers/Email')(null, null);
		app.get('/api/sendContact', Emailer.sendContact);
		
		// Handles any requests that don't match the ones above 
		app.get('*', async (req, res) => {
			try {
				res.sendFile(path.join(__dirname + '/build/index.html'));
			} catch (error) {
				console.error(error);
				res.status(500).send(error);
			}
		});
	} catch (error) {
		console.log(error);
	}
}