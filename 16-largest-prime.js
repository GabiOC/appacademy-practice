/* PROBLEM
Write a method that returns the `n`th prime number. Recall that only numbers greater than 1 can be prime.
ex. nth_prime(1) == 2

problem summary: given an 'n' number, return the nth prime number. Ex. the second prime number is 3

METHOD A (if n's are known)
- loop through 2 to 1000 or some arbitrarily high number
- using the prime num function, check if i is prime, if it is, push to array
- return element at array index num - 1 (to compensate for array indices starting from 0 instead of 1)

METHOD B (better method to stop loop when condition met)
- create empty array to store prime nums
- while loop while # of primeNums in array is not equal to n
- check if j is prime, if it is, push to primeNums array
- stop loop when # of primenums is equal to n
- return element at array index num - 1
*/

function isPrime(num){
	for(i = 2; i < num; i++){
		if(num % i == 0){
			return false;
		}
	}
	return true;
}

function nthPrime(n){
	var primeNums = [];
	var j = 2;

	while(primeNums.length != n){
		if(isPrime(j)){
			primeNums.push(j);
		}
		j++;
	}
	// METHOD A
	// for(j = 2; j < 1000; j++){
	// 	if(isPrime(j)){
	// 		primeNums.push(j);
	// 	}
	// }
	return primeNums[n-1];
}

console.log(nthPrime(1)); // 2
console.log(nthPrime(2)); // 3
console.log(nthPrime(3)); // 5

