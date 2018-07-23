const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//request for all get post put delete
app.all('/dishes', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
});
//next callback after all for get request
app.get('/dishes', (req, res, next) => {
	res.end('Will send all dishes to user');
});
//next callback after all for post request for /dishes
app.post('/dishes', (req, res, next) => {
	res.end('Will add this dish: ' + req.body.name + ' with details:' + req.body.desciption);
});

app.put('/dishes', (req, res, next) => {
	//403 error is not supported
	res.statusCode = 403;
	res.end('PUT operation not supported on /dishes');
});
//Should make sure only certain users can do this request
app.delete('/dishes', (req, res, next) => {
	res.end('Deleting all this dishes');
});

//next callback after /dishes:dishId for get request
app.get('/dishes:dishId', (req, res, next) => {
	res.end(`Will send details for this dish${req.params.dishId}`);
});
//next callback after all for post request for /dishes:dishId
app.post('/dishes:dishId', (req, res, next) => {
	//403 error is not supported
	res.statusCode = 403;
	res.end('POST operation not supported on /dishes:dishId');
});

app.put('/dishes:dishId', (req, res, next) => {
	res.write(`Will UPDATE this dish for ${req.params.dishId} \n`);
	res.end(`Will UPDATE this dish:${req.body.name} with details: ${req.body.desciption}`);
});

//Should make sure only certain users can do this request
app.delete('/dishes:dishId', (req, res, next) => {
	res.end(`Deleting this dish ${req.params.dishId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
