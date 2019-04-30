//////////////////////////////
// My loop version of every //
//////////////////////////////

/*
function every (array, f) {
	for (let item of array) {
		if (!f(item)) return false; 	
	} 
	return true;
}
*/

///////////////////////////////
// My some version for every //
///////////////////////////////
function every (array, f) {
	return !array.some( item => !f(item));
}


console.log(every([1,2,3,4,5], n => n > 0)); // --> true
console.log(every([1,2,3,-4,5], n => n > 0)); // --> false