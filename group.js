class Group {
	constructor(){
		this.values = [];
	}

	add(value){
		if (!this.has(value)) this.values.push(value);
	}

	delete(value) {
		if (this.has(value)) {
			this.values = this.values.filter(v => v !== value);
		}
	}

	has(value) {
		return this.values.some(v => v === value);
		// could have be used 'includes' method too, like so:
		// return this.values.includes(value);
	}

	[Symbol.iterator]() {
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// DON'JUST RETURN THE ITERATOR CREATD BY CALLING THE SYMBOL.ITERATOR METHOD ON ARRAY! THAT WORKS BUT IT DEFEATS THE PURPOSE OF THIS EXERCISE!! //
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// return this.values[Symbol.iterator]();
		return new GroupIterator(this);
	}

	static from(iterable) {
		let newGroup = new Group();
		for (let item of iterable) {
			newGroup.add(item)
		} 
		return newGroup;
	}
}

let group = Group.from([10, 20,11,22]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


class GroupIterator {
	constructor(g) {
		this.i = 0;
		this.group = g;
	}

	next() {
		if (this.i >= this.group.values.length) return {done: true};

		let value = {i: this.i, value: this.group.values[this.i]};
		this.i++;

		return {value, done: false};
	}
}

////////////////////////////////////////////////////////////////////////////////
// This is one way to add Symbol.iterator, but you can define inside of class //
////////////////////////////////////////////////////////////////////////////////
/*
Group.prototype[Symbol.iterator] = function () {
	return new GroupIterator(this);
}
*/

// let groupi = Group.from([10,20,30.40,1,2,3,4,5,6,7,8,9]);
// let groupi = new Group();
// console.log(groupi.has(10));
// console.log(groupi.add(12));
// console.log(groupi.delete(12));
// console.log(groupi.has(12));
// console.log("groupi", groupi);


for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}

let map = {one: true, two: true, hasOwnProperty: true};

// Exercise: Fix this call
console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true