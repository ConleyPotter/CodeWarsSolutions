function reverseArray(array) {
	reversedArray = [];
	reversedArrayIndex = 0;
	for(var i = array.length - 1; i >= 0; i--) {
		reversedArray[reversedArrayIndex] = array[i];
		reversedArrayIndex += 1;
	}
	return reversedArray;
}

console.log(reverseArray([1,2,3,4,5]));

function reverseInPlace(array) {
	var left = null;
	var right = null;
	var length = array.length;
	for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
		var temporary = array[left];
		array[left] = array[right];
		array[right] = temporary;
	}
	return array;
}

console.log(reverseInPlace([1,2,3,4,5]));