var outerValue = 'ninjas';
var later;

function outerFunction(){
	var innerValue = 'samurai';
	function innerFunction(){
		console.log("I can see " + outerValue);
		console.log("I can see " + innerValue);
	}
	later = innerFunction;
}

outerFunction();

//It can call the innerFunction because later and innerFunction
//point to the same object in JavaScript.
//This reminds me of JavaScript object is just a reference of
//the unit of memory.
later();

