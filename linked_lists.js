//come back to this assignment, on page 97 of the pdf

function arrayToList(array) {
	var list = null;
	for(var i = array.length - 1; i >= 0; i--) {
		list = {
			value: array[i],
			rest: list
		}
	}
	return list;
};

function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) { //a new variable node is equal to the list passed to the funciton in arguments, while node is still defined, set node equal to the rest of the node
		array.push(node.value);
	}
	return array;
}

console.log(listToArray(arrayToList([1,2,3])));

function prepend(node, list) {
	return {value: node, rest: list};
}

function nth(list, n) {
	if (!list) {
		return undefined;
	} else if (n == 0) {
		return list.value;
	} else {
		return nth(list.rest, n-1);
	}
}

console.log(nth(arrayToList([10,20,30]), 1));



