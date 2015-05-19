/* PROBLEM
Write a method that takes in a string of lowercase letters and spaces, producing a new string that capitalizes the first
letter of each word.

PSEUDO CODE
problem summary: output string that capitalizes first letter of each word
ex: capitalize_words("this is a sentence") == "This Is A Sentence"

 */

function capitalize(str){
	return str.replace(/\b[a-z]/g, function(a){return a.toUpperCase()});
	// /\b[a-z]/g is a regex to globally (/g) replace the first (\b) letter ([a-z]) with uppercase
}

console.log(capitalize("this is a sentence"));
console.log(capitalize("gabi o'connor"));