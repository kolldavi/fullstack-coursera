const express = require('express');
const Leaders = require('../models/leaders');
const leaderRouter = express.Router();

leaderRouter.use(express.json());

leaderRouter
	.route('/')
	.get((req, res, next) => {
		Leaders.find({})
			.then(
				leaders => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leaders);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.put((req, res, next) => {
		//403 error is not supported
		res.statusCode = 403;
		res.end('PUT operation not supported on /leaders');
	})
	.post((req, res, next) => {
		Leaders.create(req.body)
			.then(
				leader => {
					console.log('Leader Created:', leader);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete(function(req, res, next) {
		Leaders.remove({})
			.then(
				resp => {
					console.log('Deleted all Leaders:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});

leaderRouter
	.route('/:leaderId')
	.get((req, res, next) => {
		Leaders.findById(req.params.leaderId)
			.then(
				leader => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.end('Post operation not supported for' + req.params.leaderId);
	})
	.put((req, res, next) => {
		// res.write('Updating the leaderId: ' + req.params.leaderId + '\n');
		// res.end('Will update the leaderId: ' + req.body.name + ' with details: ' + req.body.description);

		Leaders.findByIdAndUpdate(req.params.leaderId, { $set: req.body }, { new: true })
			.then(
				leader => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		//res.end('Deleting leaderId: ' + req.params.leaderId);
		Leaders.findByIdAndRemove(req.params.leaderId)
			.then(
				resp => {
					console.log('Leader Deleted:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});

module.exports = leaderRouter;
