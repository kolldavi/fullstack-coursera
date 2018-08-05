const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dishes = require('../models/dishes');
const dishRouter = express.Router();

dishRouter.use(express.json());
//request for all get post put delete
//set initial endpoint for /dishes
dishRouter
	.route('/')
	.get((req, res, next) => {
		Dishes.find({})
			.then(
				dishes => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(dishes);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /dishes');
	})
	.post((req, res, next) => {
		Dishes.create(req.body)
			.then(
				dish => {
					console.log('Dish Created:', dish);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(dish);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		Dishes.remove({})
			.then(
				resp => {
					console.log('Dish Deleted:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});
//set endpoint for /dishes:dishId
dishRouter
	.route('/:dishId')
	.get((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(dish);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.end('Post operation not supported for' + req.params.dishId);
	})
	.put((req, res, next) => {
		Dishes.findByIdAndUpdate(req.params.dishId, { $set: req.body }, { new: true })
			.then(
				dish => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(dish);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		Dishes.findByIdAndRemove(req.params.dishId)
			.then(
				resp => {
					console.log('Dish Deleted:', resp);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				err => next(err)
			)
			.catch(err => next(err));
	});

dishRouter
	.route('/:dishId/comments')
	.get((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					//dish exsists
					if (dish != null) {
						res.statusCode = 200;
						res.setHeader('Content-Type', 'application/json');
						res.json(dish.comments);
					} else {
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.end(`PUT operation not supported on /dishes/${req.params.dishId}/comments`);
	})
	.post((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					//dish exsists
					if (dish != null) {
						dish.comments.push(req.body);
						dish.save().then(
							dish => {
								res.statusCode = 200;
								res.setHeader('Content-Type', 'application/json');
								res.json(dish.comments);
							},
							err => next(err)
						);
					} else {
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					if (dish != null) {
						for (let i = dish.comments.length - 1; i >= 0; i--) {
							dish.comments.id(dish.comments[i]._id).remove();
						}
						dish.save().then(
							dish => {
								res.statusCode = 200;
								res.setHeader('Content-Type', 'application/json');
								res.json(dish.comments);
							},
							err => next(err)
						);
					} else {
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	});
//set endpoint for /dishes:dishId/comments:commentId

dishRouter
	.route('/:dishId/comments/:commentId')
	.get((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					//check if dish and comment exist then return comment
					if (dish != null && dish.comments.id(req.params.commentId) != null) {
						res.statusCode = 200;
						res.setHeader('Content-Type', 'application/json');
						res.json(dish.comments.id(req.params.commentId));
					} else if (dish == null) {
						//dish does not exists
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					} else {
						//comment does not exists
						err = new Error(`Comment ${dish.params.commentId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on /dishes/${req.params.dishId}/comments/${req.params.commentId}`);
	})
	.put((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					//check if dish and comment exist then return comment
					if (dish != null && dish.comments.id(req.params.commentId) != null) {
						if (req.body.rating) {
							dish.comments.id(req.params.commentId).rating = req.body.rating;
						}
						if (req.body.comment) {
							dish.comments.id(req.params.commentId).comment = req.body.comment;
						}
						dish.save().then(d => {
							res.statusCode = 200;
							res.setHeader('Content-Type', 'application/json');
							res.json(d.comments.id(req.params.commentId));
						});
					} else if (dish == null) {
						//dish does not exists
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					} else {
						//comment does not exists
						err = new Error(`Comment ${dish.params.commentId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	})
	.delete((req, res, next) => {
		Dishes.findById(req.params.dishId)
			.then(
				dish => {
					if (dish != null && dish.comments.id(req.params.commentId) != null) {
						dish.comments.id(req.params.commentId).remove();
						dish.save().then(
							dish => {
								res.statusCode = 200;
								res.setHeader('Content-Type', 'application/json');
								res.json(dish.comments);
							},
							err => next(err)
						);
					} else if (dish != null) {
						err = new Error(`Dish ${dish.params.dishId} not found`);
						res.statusCode = 404;
						return next(err);
					} else {
						err = new Error(`Comment ${dish.params.commentId} not found`);
						res.statusCode = 404;
						return next(err);
					}
				},
				err => next(err)
			)
			.catch(err => next(err));
	});
module.exports = dishRouter;
