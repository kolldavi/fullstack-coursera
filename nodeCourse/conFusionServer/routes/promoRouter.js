const express = require('express');
const promoRouter = express.Router();
const Promotions = require('../models/promotions');
promoRouter.use(express.json());

promoRouter
	.route('/')
	.get((req, res, next) => {
		//res.end('Will send all the promotions to you!');
		Promotions.find({})
			.then(
				promotions => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotions);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.put((req, res, next) => {
		//403 error is not supported
		res.statusCode = 403;
		res.end('PUT operation not supported on /promotions');
	})
	.post((req, res, next) => {
		//res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
		Promotions.create(req.body)
			.then(
				promotion => {
					console.log('Promotion Created:', promotion);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete(function(req, res, next) {
		//res.end('Deleting all promotions');
		Promotions.remove({})
			.then(
				resp => {
					console.log('Deleted all Promotions:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});

promoRouter
	.route('/:promoId')
	.get((req, res, next) => {
		//res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');

		Promotions.findById(req.params.promoId)
			.then(
				promotion => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.end('Post operation not supported for /promos/' + req.params.promoId);
	})
	.put((req, res, next) => {
		// res.write('Updating the promotion: ' + req.params.promoId + '\n');
		// res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
		Promotions.findByIdAndUpdate(req.params.promoId, { $set: req.body }, { new: true })
			.then(
				promotion => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		//	res.end('Deleting promotion: ' + req.params.promoId);
		Promotions.findByIdAndRemove(req.params.promoId)
			.then(
				resp => {
					console.log('Promotion Deleted:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});

module.exports = promoRouter;
