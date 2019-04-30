'use strict'
function range (start, end, step = start < end ? 1 : -1) {
	let list = [];

	if (step < 0) {
		for (let i = start; i >= end; i+= step) list.push(i);
	}
	else
	{
		for (let i = start; i <= end; i+= step) list.push(i);
	}
	return list;
}

function sum (numbers) {
	let total = 0;
	for (let number of numbers) {
		total+= number;	
	}
	return total; 

return numbers;
}
console.log(range(1,10));
console.log(range(1,10,2));
console.log(sum(range(1,10,2)));
console.log(range(5,2));
console.log(range(5,2,-1));
console.log(range(5,2,-2));
console.log(range(10,1,-2));
console.log(sum(range(10,1,-2)));
console.log(range(1,10,-2));