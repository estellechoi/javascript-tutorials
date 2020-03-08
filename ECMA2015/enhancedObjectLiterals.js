// Object Literals
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
