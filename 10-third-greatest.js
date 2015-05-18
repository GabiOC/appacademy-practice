/* PROBLEM
Write a method that takes an array of numbers in. Your method should return the third greatest number in the array.
You may assume that the array has at least three numbers in it.

STEPS
problem summary: return 3rd greatest number in array. array has at least 3 numbers in it
ex. third_greatest([5, 3, 7, 4]) == 4

- sort array in desc order
- return arr[2], third element in array */

function thirdGreatest(arr){
	arr.sort(function(a,b){
		return b - a;
	})
	return arr[2];
}

console.log(thirdGreatest([5, 3, 7])); // 3
console.log(thirdGreatest([5, 3, 7, 4])); // 4
console.log(thirdGreatest([2, 3, 7, 4])); // 3