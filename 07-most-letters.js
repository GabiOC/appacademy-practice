/* PROBLEM
Write a method that takes a string in and returns true if the letter "z" appears within three
letters **after** an "a". You may assume that the string contains only lowercase letters.

STEPS
problem: if str contains letter 'z' within 3 letters after an 'a', return true. str contains only lowercase letters
- loop through string
- if str at index i == 'a', check if letters at indices 1-3 after str[i] are equal to 'z'
- if so, return true
- out of loop, return false */

function mostLetters(str){
	for(i = 0; i <= str.length; i++){
		if(str[i] == "a"){
			if(str[i+1] == "z" || str[i+2] == "z" || str[i+3] == "z"){
				return true;
			}
		}
	}
	return false;
}

console.log(mostLetters("dsaz")); // true
console.log(mostLetters("abcz")); // true
console.log(mostLetters("abczda")); // true
console.log(mostLetters("a")); // false
console.log(mostLetters("abc")); // false
console.log(mostLetters("az")); // true