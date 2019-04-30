//////////////////////////////////////////
// My way of doing without recursion // //
//////////////////////////////////////////
/*
function isEven (number) {
	if (number < 0) number=-number;
	if (number % 2 === 0) return false;
	else if (number % 2 === 1) return true;
}
*/

// Book's solution using recursion
function isEven (n) {
	if (n === 0) {return true}
	else if (n === 1) {return false}
	else if (n < 0) { return isEven(-n)}
	else { return isEven(n - 2)}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
console.log(isEven(-13));
console.log(isEven(-67));