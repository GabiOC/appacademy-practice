/* PROBLEM
Write a method that will take in a number of minutes, and returns a string that formats the number into `hours:minutes`.

PSEUDO CODE
problem: convert num of mins into string that's formatted hours: minutes
- divide minutes by 60, round down to get hours, save as 'hours'
- use modulus operator to get number of minutes left over from total mins/60, save as 'minutes'
- return hours + ":" + minutes */

function timeConvert(num){
	var hours = Math.floor(num/60);
	var minutes = num % 60;
	if(minutes == 0){
		return (hours + ":" + "00").toString();
	}
	return (hours + ":" + minutes).toString();
}

console.log(timeConvert(15));
console.log(timeConvert(150));
console.log(timeConvert(360));