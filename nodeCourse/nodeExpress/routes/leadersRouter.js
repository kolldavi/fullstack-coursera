const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res, next) => {
		res.end('Will send all the leaders to you!');
	})
	.put((req, res, next) => {
		//403 error is not supported
		res.statusCode = 403;
		res.end('PUT operation not supported on /leaders');
	})
	.post((req, res, next) => {
		res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
	})
	.delete(function(req, res, next) {
		res.end('Deleting all leaders');
	});

leaderRouter
	.route('/:leaderId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res, next) => {
		res.end('Will send details of the leaderId: ' + req.params.leaderId + ' to you!');
	})
	.put((req, res, next) => {
		res.write('Updating the leaderId: ' + req.params.leaderIdId + '\n');
		res.end('Will update the leaderId: ' + req.body.name + ' with details: ' + req.body.description);
	})
	.delete((req, res, next) => {
		res.end('Deleting leaderId: ' + req.params.leaderIdId);
	});

module.exports = leaderRouter;
