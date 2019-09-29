'use strict'
////////////////////////
// My way of doing it //
////////////////////////

// function arrayToList (array) {
// 	return {
// 		value: array.shift(),
// 		rest: array.length > 0 ? arrayToList(array) : null
// 	}
// }


///////////////////////////
// Their way of doing it //
///////////////////////////

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray (list) {
	let array = [];

	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}

	return array;
}

/////////////////////
// My way of doing //
/////////////////////

function prepend (el, list) {
	let array = listToArray(list);
	array.unshift(el);
	return arrayToList(array);
}



//////////////////////////////////////////////////////////////
// Their way of doing                            			//
//////////////////////////////////////////////////////////////
/*
function prepend (el, list) {
	return { value: el, rest: list};
}
*/


function nth (list, number) {
	let array = listToArray(list);
	return array[number];
}

///////////////////////////
// Their way of doing it //
///////////////////////////

function nth_r(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}


////////////////////////
// My way of doing it //
////////////////////////

/*function nth_r (list, number) {
	if (number > 0 && list.rest) {
		return nth_r(list.rest,--number);
	}
	else if (number === 0) {
		return list.value;
	}
}
*/




// console.log(arrayToList([10,20]));
// console.log(listToArray( arrayToList([10,20,30]) ));
console.log( prepend(40, arrayToList([10,20])) );
// console.log( nth(arrayToList([10,20,30]), 1) );
// console.log( nth(arrayToList([10,20,30]), 10) );
// console.log( nth_r(arrayToList([10,20,30,40,50]), 50) );


