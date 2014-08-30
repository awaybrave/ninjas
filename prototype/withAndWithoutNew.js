function Ninja(){} 
Ninja.prototype.swingSword = function(){
	return true;
};

var ninja1 = Ninja();

console.log("Ninja1 is undefined? ");
console.log(ninja1 == undefined);

var ninja2 = new Ninja();
console.log("Instance exsists and method is callable?");
console.log(ninja2 && ninja2.swingSword && ninja2.swingSword());


//prototype is attached but not added to an object.
function Ninja(){
	this.swung = false;
	this.swingSword = function(){
		return !this.swung;
	}
}

Ninja.prototype.swingSword = function(){
	return this.swung;
}

var ninja3 = new Ninja();
console.log(ninja3.swingSword()); //-> True.

// live update
//
function Test(){}

var t = new Test();

try{
	t.sayHello();
}catch(e){
	console.log(e);
}

Test.prototype.sayHello = function(msg){
	console.log(msg);
};

t.sayHello("Hello, my love");
