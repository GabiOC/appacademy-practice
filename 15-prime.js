/* PROBLEM
Write a method that takes in an integer (greater than one) and returns true if it is prime; otherwise return false.
ex. is_prime?(3) == true */

function isPrime(num){
	if(num < 2){
		return false;
	}

	for(i = 2; i < num; i++){
		if(num % i == 0){ // if num is divisible with no remainder by 2 to <num, it's not prime
			return false;
		}
	}
	return true;
}

console.log(isPrime(3)); // true
console.log(isPrime(9)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false