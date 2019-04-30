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



//////////////////////////////////////////////////////////////////////////
//This attempt fails to give the right result on the following test: 			//
// console.log(deepEqual({value: 1},{key: 1})); //--> should be false 	//
// because of that, stopped thinking on this matter and tried 			//
// using recursion : see `that` solution right below this function, 	//
// which works just fine!												//
//////////////////////////////////////////////////////////////////////////

/*function deepEqual (v1, v2) {
	if (typeof v1 === typeof v2) { 
		if (v1 === null || v2 === null) { return false}
		if (typeof v1 === 'object') { 
			if (Object.keys(v1).length === Object.keys(v2).length){
				let keys_comparator;
				for (var i = 0; i < Object.keys(v1).length; i++) {
					keys_comparator = v1[Object.keys(v1)[i]] === v2[Object.keys(v2)[i]] ? true : false;
				}
				return keys_comparator;
			}	
			return 'Object';
		}
		return v1 === v2 ? true : false;
	}
	else
	{
		return false;
	}
}
*/

/////////////////////////////////////
// My way of Recursive function // //
/////////////////////////////////////

/*function deepEqual (v1, v2) {
	////////////////////////
	// Terminal condition //
	////////////////////////

	// console.log(`v1: ${v1}  v2: ${v2}`);
	// console.log("may not be same type");
	if (typeof v1 !== typeof v2) return false;

	/////////////////////////
	// Main Task condition //
	/////////////////////////

	// console.log("we may have any null value around here pretending to be a object");
	if ((v1 === null && v2 === null) || typeof v1 !== 'object'){
		// console.log('simple data is comparable. None are objects but we can compare null values here too!');
		return v1 === v2;
	} else 
	{
		// console.log('well, maybe one of them is null, or both are only objects. Let\'s see!');
		if ( v1 === null || v2 === null ) { return false; }
	}
	let keysV1 = Object.keys(v1), keysV2 = Object.keys(v2); 
	// console.log("objects may have not same lenght");
	if (keysV1.length !== keysV2.length) return false;
	// console.log("may have not same properties");
	for (let i = 0; i < keysV1.length; i++) {
		if ( keysV1[i] !== keysV2[i] ) return false;
	}
	// console.log("let's check deeper!!");

	///////////////////
	//Recursive loop //
	///////////////////
	for (let prop in v1) {
		if ( deepEqual(v1[prop],v2[prop]) ){ continue } else { return false }
	}

	// console.log(`last true - ${v1} ${v2} are fully equals!`);
	return true;
}
*/



//////////////////////////////////////
// Their way to solve this problem. //
//////////////////////////////////////

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;
	// I liked this loop!! They made my two for loops in just one!
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


// console.log(arrayToList([10,20]));
// console.log(listToArray( arrayToList([10,20,30]) ));
console.log( prepend(40, arrayToList([10,20])) );
// console.log( nth(arrayToList([10,20,30]), 1) );
// console.log( nth(arrayToList([10,20,30]), 10) );
// console.log( nth_r(arrayToList([10,20,30,40,50]), 50) );

// console.log(deepEqual(1,2)); //--> false
// console.log(deepEqual(1,1)); //--> true
// console.log(deepEqual("abc","string")); //--> false
// console.log(deepEqual("abc","abc")); //--> true
// console.log(deepEqual(false,false)); //--> true
// console.log(deepEqual(false,true)); //--> false
// console.log(deepEqual({value: 1, rest: null},{value: 1, rest: {value: 2, rest: null} })); //--> false
// console.log(deepEqual({value: 1},{value: 2})); //--> false
// console.log(deepEqual({value: 1},{value: 1})); //--> true
// console.log(deepEqual({value: 1},{key: 1})); //--> false
// console.log(deepEqual({value: 1},1)); //--> false
// console.log(deepEqual(null,{value: 1})); //--> false
// console.log(deepEqual("string",{value: 1})); //--> false
// console.log(deepEqual({value: 1, key: 2},{value: 1, key: "string"})); //--> false
// console.log(deepEqual({value: null, key: null},{value: null, key: 1})); //--> false
// console.log(deepEqual({value: null, key: null},{value: null, key: null})); //--> true


