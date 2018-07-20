var colors = require('colors');
var rect = require('./rectangle');

function solveRect(l, b) {
	console.log(`Solving for rectangle with l=${l} and b=${b}`.blue);
	rect(l, b, (err, rectangle) => {
		if (err) {
			console.log(`Error ${err.message}`.red);
		} else {
			console.log(`The area of the rectangle with l=${l} and b=${b} is ${rectangle.area()}`);
			console.log(`The perimeter of the rectangle with l=${l} and b=${b} is ${rectangle.perimeter()}`);
		}
	});
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
