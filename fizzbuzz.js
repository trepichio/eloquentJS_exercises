for (var i = 0; i <= 100; i++) {
	let str = '';
	if (i % 3 === 0 && i % 5 === 0) {
		str = 'FizzBuzz'
	}
	else if (i % 3 === 0) {
		str = 'Fizz'
	}
	else if (i % 5 === 0) {
		str = 'Buzz'
	}

	console.log(`${i} ${str}`)
}