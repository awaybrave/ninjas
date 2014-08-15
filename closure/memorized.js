Function.prototype.memorized = function(key) {
	if(this._values == undefined)
		this._values = {};
	return this._values[key] ? this._values[key] : (this._values[key] = this.apply(this, arguments));
};

Function.prototype.memoize = function(){
	var fn = this;
	return function(){
		return fn.memorized.apply(fn, arguments);
	}
};

var isPrime = (function(num){
	var isprime = num == 1 ? false : true;
	for(var i = 2; i < num; i++){
		if(num % i == 0){
			isprime = false;
			break;
		}
	}
	return isprime;
}).memoize();

//console.log(isPrime(5));
console.log(isPrime._values);
console.log(isPrime(5));
//console.log(isPrime.memorized_values[5]);
