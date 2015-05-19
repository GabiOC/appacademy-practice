/* PROBLEM
Write a method that takes in a string of lowercase letters (no uppercase letters, no repeats). Consider the *substrings* of the string:
consecutive sequences of letters contained inside the string. Find the longest such string of letters that is a palindrome.

PSEUDO CODE 
problem: return longest palindrome that can be formed from a string. string will be all lowercase.
ex: longest_palindrome("abcbd") == "bcb"
longest_palindrome("abcbdeffe") == "effe" 
 */

function palindrome(str){
	var palTest = str.split("").reverse().join("");
	if(palTest == str){
		return true;
	}
	return false;
}

function longestPal(str){
	var longestPalResult = null;
	var i = 0;

	while(i <= str.length){
		var length = 1;
		while(i + length <= str.length){
			var substring = str.slice(i, length);
			if(palindrome(substring) && (longestPalResult == null || substring.length > longestPalResult.length)){
					longestPalResult = substring;
			}
		length += 1;
		}
	i++;
	}
	return longestPalResult;
}


console.log(longestPal("abcbd")); // bcb
console.log(longestPal("abcbdeffe")); // effe