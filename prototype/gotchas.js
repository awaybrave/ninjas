Object.prototype.keys = function(){
	var keys = [];
	for(var p in this)
		keys.push(p);
	return keys;
};

var obj = {
	'a':1,
	'b':2,
	'c':3
};

console.log(obj.keys());
