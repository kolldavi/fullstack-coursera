const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then(db => {
	console.log('Connected to Server');

	let newDish = Dishes({
		name: 'Pizza',
		description: 'Test Item'
	});

	newDish
		.save()
		.then(dish => {
			console.log('dish:', dish);
			return Dishes.find({});
		})
		.then(dishes => {
			console.log('dishes:', dishes);
			return Dishes.remove({});
		})
		.then(() => {
			return mongoose.connection.close();
		})
		.catch(err => {
			console.error(err);
		});
});
