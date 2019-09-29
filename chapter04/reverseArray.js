'use strict';
function reverseArray (array) {
	let newArray = [];

	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace (array) {
	let counter = array.length - 1;
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let aux = array[i];
		array[i] = array[counter];
		array[counter] = aux;
		counter--;
	}

	return array;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5]));
