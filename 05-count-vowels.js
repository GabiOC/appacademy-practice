/* PROBLEM
Write a method that takes a string and returns the number of vowels in the string. You may assume that all
the letters are lower cased. You can treat "y" as a consonant.

PSEUDO CODE
problem: return number of vowels (aeiou) in string. all letters are lowercase
- use regex to globally match letters in string to aeiou, count length */

function countVowels(str){
	return str.match(/[aieou]/g).length;
}

console.log(countVowels("abcd")); // 1
console.log(countVowels("color")); // 2
console.log(countVowels("colour")); // 3
console.log(countVowels("gabriele")); // 4