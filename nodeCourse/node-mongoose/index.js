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
			console.log(dish);

			return Dishes.findByIdAndUpdate(
				dish._id,
				{
					$set: { description: 'Updated test' }
				},
				{
					new: true
				}
			).exec();
		})
		.then(dish => {
			console.log(dish);

			dish.comments.push({
				rating: 5,
				comment: "I'm getting a sinking feeling!",
				author: 'Leonardo di Carpaccio'
			});

			return dish.save();
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
