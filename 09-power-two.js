/*  PROBLEM

Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2;
therefore, `5 % 2 == 1`. In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.

STEPS
problem summary: if number is a power of two, return true. else, false.
example:'is_power_of_two?(1) == true
- loop through num
- use pow method to determine if i^2 == num
- if so, return true
- out of loop, return false */

function powTwo(num){
	if(num == 0){ // special case
		return false;
	}

	for(i = 0; i <= num; i++){
		if(Math.pow(i, 2) == num){
			return true;
		}
	}
	return false;
}

console.log(powTwo(1)); // true
console.log(powTwo(16)); // true
console.log(powTwo(64)); // true
console.log(powTwo(78)); // false
console.log(powTwo(0)); // false