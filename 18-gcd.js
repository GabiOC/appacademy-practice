/* PROBLEM
Write a method that takes in two numbers. Return the greatest integer that evenly divides both numbers. You may wish to use
the `%` modulo operation.

PSEUDO CODE
problem summary: find the greatest common denominator for both numbers
ex. greatest_common_factor(3, 9) == 3

- use modulo operator to check if num2 divides num1 with no remainder
- if it does, return num2 as gcd
- else, recursively repeat function, using (num2, (num1 % num2)) as the input
(once the remainder is 0, the remainder of the previous division will be the gcd) */

function gcd(num1, num2){
	if(num1 % num2 == 0){
		return num2;
	}
	else {
		return gcd(num2, (num1 % num2));
	}
}

console.log(gcd(3,9)); // 3
console.log(gcd(16,24)); // 8
console.log(gcd(3,5)); // 1
