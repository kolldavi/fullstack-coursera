const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
//request for all get post put delete
//set initial endpoint for /dishes
dishRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res, next) => {
		res.end('Will send all dishes to user');
	})
	.post((req, res, next) => {
		res.end('Will add this dish: ' + req.body.name + ' with details:' + req.body.desciption);
	})
	.put((req, res, next) => {
		//403 error is not supported
		res.statusCode = 403;
		res.end('PUT operation not supported on /dishes');
	})
	.delete((req, res, next) => {
		res.end('Deleting all this dishes');
	});
//set endpoint for /dishes:dishId
dishRouter
	.route('/:dishId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res, next) => {
		res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
	})
	.put((req, res, next) => {
		res.write('Updating the dish: ' + req.params.dishId + '\n');
		res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
	})
	.delete((req, res, next) => {
		res.end('Deleting dish: ' + req.params.dishId);
	});

module.exports = dishRouter;
