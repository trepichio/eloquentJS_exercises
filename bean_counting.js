'use strict'
function countBs (str) {
	return countChar(str,'B');
}

function countChar (str, ch) {
	// body...
	let counter = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === ch) { counter++;} 
	}
	return counter;
}

console.log(countBs('BBC'));
console.log(countChar('Gooooogle','o'));