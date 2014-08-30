function Test(){
	this.sayHello = function(){
		console.log(arguments[0]);
	};
}

Test.prototype.die = function(){
	console.log('die');
};

var t = new Test();
t.die()
