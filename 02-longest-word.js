/* Write a method that takes in a string. Return the longest word in the string. You may assume that the string
contains only letters and spaces.

PSEUDO CODE
- split string on spaces into array
- use sort method to sort by word length in desc order
- return element at index 0, i.e. longest word */

function longestWord(str){
	var words = str.split(" ");
	words.sort(function(a,b){
		return b.length - a.length; // desc order
	})
	return words[0];
}

console.log(longestWord("short longest")); // longest
console.log(longestWord("one")); // one
console.log(longestWord("abc def abcde")); // abcde