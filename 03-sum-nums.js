/* PROBLEM
Write a method that takes in an integer `num` and returns the sum of all integers between zero and num,
up to and including `num`.

PSEUDO CODE
- store sum in variable 'sum'
- for loop from 0 to num, adding i to sum using addition assigner
- return sum */

function sumNums(num){
	var sum = 0;
	for(i = 0; i <= num; i++){
		sum += i;
	}
	return sum;
}

console.log(sumNums(1)); // 1
console.log(sumNums(2)); // 3
console.log(sumNums(3)); // 6
console.log(sumNums(4)); // 10
console.log(sumNums(5)); // 15


