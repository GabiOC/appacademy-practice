/* PROBLEM
Write a method that takes in a string and an array of indices in the string. Produce a new string,
which contains letters from the input string in the order specified by the indices of the array of indices.

PSEUDO CODE
problem summary: return string in order of indices
ex: scramble_string("abcd", [3, 1, 2, 0]) == "dbca"

- create empty array to store new scrambled string
- loop through indices
- push str at index i to array
- return joined array
*/

function scramble(str, index){
	var scramStr = [];

	for(i = 0; i < index.length; i++){
		scramStr.push(str[index[i]]); // loop through index, push str at index to array to scramble/re-order
	}
	return scramStr.join(""); // return array joined as string
}

console.log(scramble("abcd", [3, 1, 2, 0])); // dbca
console.log(scramble("gabriele", [5, 3, 1, 4, 2, 0, 6, 7])); // eraibgle