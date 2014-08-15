//Partial Function: return a new function
//
//Arguments is an important abstraction of JavaScript.
Function.prototype.partial = function(){
    var fn = this, // who calls partial
        args = Array.prototype.slice.call(arguments);
    return function(){
        //this: who calls the function that calls(fn) the partial
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
};

String.prototype.csv = String.prototype.split.partial(/,\s*/);
var results = ("Mugan, Jin, Fuu").csv();
console.log(results);