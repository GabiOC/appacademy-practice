/* Write a method that takes an integer `n` in; it should return n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
As a special case, `factorial(0) == 1`.

PSEUDO CODE
problem: return factorial of a number; ex. factorial(3) should return 6, factorial(4) should return 24, etc.
- loop through n
- return sum that equals previous sum * new i; */

function factorial(num){
	var sum = 1;
	
	if(num == 0){ // special case
		return 1;
	}
	for(i = 1; i <= num; i++){
		sum *= i; // use multiplication assigner to create 
	}
	return sum;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1