let josh = {
	field: "web",
	lang: "js"
};

let developer = {
	nation: "korea",
	// ... spreads properties of an object or array
	...josh
};

console.log(developer);
