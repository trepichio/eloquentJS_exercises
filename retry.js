'use strict'
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (a, b) {
	if (Math.random() < 0.2) {
		return a * b;
	}
	else {
		throw new MultiplicatorUnitFailure("Crash!");
	}
}

// console.log(primitiveMultiply(8,8));

function retryMultiplication (a,b) {
	for (;;) {
		try {
			return primitiveMultiply(a,b);
		}
		catch(e)
		{
			if (!(e instanceof MultiplicatorUnitFailure)) {
				console.log("An error occured! Try again.");
				throw e;
			}
		}
	}
}

console.log(retryMultiplication(8, 8));