let arrayOfArrays = [
	[1,2,3,4,5], ['a','b','c'], ['test','word', 'hello']
];

function flatten (array) {
	return array.reduce( (flatted,current) => flatted.concat(current));
}

console.log(flatten(arrayOfArrays));