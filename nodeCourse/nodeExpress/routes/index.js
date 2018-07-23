const dishRouter = require('./dishRouter');
const leaderRouter = require('./leadersRouter');
const promoRouter = require('./promoRouter');

module.exports = app => {
	app.use('/dishes', dishRouter);
	app.use('/promotions', promoRouter);
	app.use('/leaders', leaderRouter);
};
