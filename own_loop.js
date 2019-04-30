////////////////////////////////////////
// My way of doing it using recursion //
////////////////////////////////////////
/*
function loop (value, test, update, body) {
	if(test(value)) {
		body(value);
		value = update(value);
		loop(value,test,update,body);
	}
}
*/


////////////////////
// Their solution //
////////////////////

function loop (value, test, update, body) {
	for (let start = value; test(value); value = update(value)) {
		body(value);
	}
}

loop(3, n => n > 0, n => n - 1, console.log);
