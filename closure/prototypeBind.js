Function.prototype.bind = function(){
	var fn = this, args = Array.prototype.slice.call(arguments),
		object = args.shift();
	return function(){
		//Concating the two sets of arguments can override the function!!
		return fn.apply(object, 
				args.concat(Array.prototype.slice.call(arguments))
			);
	};
};

var myObject = {};

function myFunction(){
	console.log(arguments); //arguments is an object.
	return this == myObject;
}

//This is Window.
console.log(myFunction());

var newFunction = myFunction.bind(myObject,1);

//This is myObject after binding.
console.log(newFunction());
