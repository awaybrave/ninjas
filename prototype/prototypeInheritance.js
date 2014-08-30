var People = function(){};
People.prototype.dance = function(){};

function Ninja(){}
// this means that only single inheritance is available
// by using prototype.
Ninja.prototype = new People();

var ninjia = new Ninja();

// instanceof is an operator
console.log(ninjia instanceof Ninja);
console.log(ninjia instanceof People);
ninjia.dance()
