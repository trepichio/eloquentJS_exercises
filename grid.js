"use strict";
var chessboard = "";
var grid = 10;
for (var r = 0; r <= grid; r++) {
	for (let c = 1; c <= grid; c++) {
	 	if ( (c % 2 === 0 && r % 2 !== 0) || (c % 2 !== 0 && r % 2 === 0) ) {
		 	chessboard += "#"; 
	 	} 
		else { 
		 	chessboard += " "; 
		}
	 }
	 chessboard += "\n";
}
console.log(chessboard);