// 1. Function
var obj = {
	words: 100,
	// ES5
	lookup: function() {
		console.log("ES5");
	},
	// ES6
	lookup2() {
		console.log("ES6");
	}
};

obj.lookup2();

// 2. Value Props
var figures = 10;
var dictionary = {
	// ES5
	// figures: figures
	// ES6
	figures
};

console.log(dictionary.figures);
