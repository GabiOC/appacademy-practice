/* PROBLEM
Write a method that takes in a number and returns a string, placing a single dash before and after each odd digit.
There is one exception: don't start or end the string with a dash.

PSEUDO CODE
problem summary: return string from input with a dash before and after each odd digit
ex: dasherize_number(203) == "20-3"

- convert num to string
- split string on "" to create array
- create empty dashStr array to store new string that'll be created with dashes
- for loop through array
- if element is odd (arr[i] % 2 == 1), push "-"+arr[i]+"-" to dashString, unless element is at start or end of string, 
in which case, add appropriate dashes
- outside of loop, return joined array, replacing double dashes with single ones */

function dasherizeNum(num){
	var numToString = num.toString(); // convert num to string to be able to convert to array
	var arr = numToString.split(""); // make into array
	var dashStr = []; // empty array to store new string with dashes

	for(i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 1){ // if num is odd, add dashes
			if(i == 0){ // if num is at the beginning of string, add dash after it
				dashStr.push(arr[i] + "-");
			}
			else if(i == arr.length-1){ // if num is at end of string, add dash before it
				dashStr.push("-"+ arr[i]);
			}
			else {
				dashStr.push("-" + arr[i] + "-"); // otherwise, add dashes around it
			}
		}
		else {
			dashStr.push(arr[i]); // if not odd, add num to new array
		}
	}
	
	return dashStr.join("").replace(/--/g, "-"); // return array as string, globally replacing instances of double dashes with single dash
}

console.log(dasherizeNum(203)); // 20-3
console.log(dasherizeNum(3055)); // 3-0-5-5
console.log(dasherizeNum(333)); // 3-3-3
console.log(dasherizeNum(444)); // 444

