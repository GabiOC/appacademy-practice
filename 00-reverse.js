// Write a method that will take a string as input, and return a new string with the same letters in reverse order.
// Don't use String's reverse method; that would be too simple.

/* PSEUDO CODE
return str.split("").reverse("").join("") would be easiest but it uses the reverse method

NON-REVERSE METHOD
- create reversedStr empty array to store new, reversed string
- for loop through string, use unshift to add element as first element in array
- return joined string */

function reverse(str){
	var reversedStr = []; // empty array to store new, reversed string
	for(i = 0; i < str.length; i++){
		reversedStr.unshift(str[i]); // add element at i index as first element in new array, effectively reversing string
	}
	return reversedStr.join(""); // join array to return reversed string as a string, not array
}

console.log(reverse("gabi")); // ibag
console.log(reverse("")); //   (blank)
console.log(reverse("abc")); // cba