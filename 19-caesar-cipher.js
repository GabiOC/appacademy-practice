/* PROBLEM

Write a method that takes in an integer `offset` and a string.

Produce a new string, where each letter is shifted by `offset`. You may assume that the string
contains only lowercase letters and spaces. When shifting "z" by three letters, wrap around to the front of the
alphabet to produce the letter "c".

You'll want to use String's `ord` method and Integer's `chr` method.
`ord` converts a letter to an ASCII number code. `chr` converts an ASCII number code to a letter.

You may look at the ASCII printable characters chart:

http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters

Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to 'z' having code 122.

You may also want to use the `%` modulo operation to handle wrapping of "z" to the front of the alphabet.


STEPS
problem summary: return new string where each letter is shifted by the 'offset' number
- use replace regex to find lowercase letters; return this string
- replace with function that finds the charCode of the letter, and returns the char with the letter at charcode
+ offset
- check if letter + offset > 122: if it is, return charcode + offset - 26 (-26 to get you to the correct ASCII
number in the alphabet, otherwise it'll be a non-alpha character)
- else charcode + offset */

function caesarCipher(offset, str){
	return str.replace(/[a-z]/g,
		function(char){
			var charASCII = char.charCodeAt(0);
			return String.fromCharCode((charASCII + offset > 122) ? (charASCII + offset - 26) : (charASCII + offset));
		});
}

console.log(caesarCipher(3, "abczy")); // defcb
console.log(caesarCipher(4, "abc xyz")); // efg bcd
console.log(caesarCipher(5, "hello my name is")); // mjqqt rd sfrj nx
