/* Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is
the same whether written backward or forward. Assume that there are no spaces; only lowercase letters will be given.

STEPS
problem: determine if a string is a palindrome. return true if it is, else false. no spaces, only lowercase
- split string on "", reverse and join to form reversed string, store as 'palTest'
- if palTest == str, return true, else false */

function palindrome(str){
	var palTest = str.split("").reverse().join("");
	if(palTest == str){
		return true;
	}
	return false;
}

console.log(palindrome("abc")); // false
console.log(palindrome("abcba")); // true
console.log(palindrome("z")); // true