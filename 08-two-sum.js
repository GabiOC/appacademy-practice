/* PROBLEM
Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return
the positions of those two numbers. If no pair of numbers sums to zero, return `nil`.

STEPS
problem: return the positions of the two numbers in an array that sum to zero. If no pairs sum to zero, return 'nil'
example: two_sum([1, 3, 5, -3]) == [1, 3]
- loop through string
- second loop to sum arr[i] with following numbers
- if any two equal 0, return indices;
- out of loop, return "nil"
*/

function sumZero(arr){
	for(i = 0; i < arr.length; i++){
		for(j = 0; j < arr.length; j++){
			if(arr[i] + arr[j] == 0){
				return [i, j];
			}
		}
	}
	return "nil";
}

console.log(sumZero([1, 3, 5, -3])); // [1, 3]
console.log(sumZero([1, 3, 5])); // nil