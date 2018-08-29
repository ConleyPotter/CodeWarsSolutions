function deepEqual(value1, value2) {
	if(value1 === value2)  {
		return true;
	} if (value1 == null || typeof value1 != 'object' || 
		value2 == null || typeof value2 != 'object') {
		return false;
	}

	var propsInA = 0, propsInB = 0;

	for (var prop in value1) {
		propsInA += 1;
	} for (var prop in value2) {
		propsInB += 1;
		if (!(prop in value1) || !deepEqual(value1[prop], value2[prop])) {
			return false;
		}
	}

	return propsInA == propsInB;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true