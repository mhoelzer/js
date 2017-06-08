// http://drinkingage.procon.org/view.resource.php?resourceID=004294
var age = 11;
if(age >= 21){
	console.log("You can drink at age",age,"legally in places such as the US or Iraq.");
} else if(age >= 20) {
	console.log("You can drink at age",age,"legally in places such as Iceland or Japan.")
} else if(age >= 18) {
	console.log("You can drink at age",age,"legally in places such as South Korea or Sweden.")
} else if(age >= 16){
	console.log("You can drink at age",age,"legally in places such as Belgium or Morocco.")
} else if(age >= 10){
	console.log("You can drink at age",age,"legally in places such as Antigua and Barbuda or the Central African Republic.")
} else {
	console.log("It's either illegal, like in Afghanistan or there is no legal age, like Sierra Leone.")
};

var colts = 1;
if(colts == 4){
	console.log("How on Earth did this happen? Were the Colts mistaken for the Packers?");
} else if(colts == 3){
	console.log("Well, I'm still surprised uggh");
} else if(colts == 2){
	console.log("a tie huh. weird. both teams suck");
} else if(colts == 1){
	console.log("a loss huh no surprise");
} else {
	console.log("hahahaha");
}

/*FizzBuzz thing: for loop */
var x = 1;
for (x = 1; x<=100; x++) {
	if(x % 5 == 0 && x % 3 == 0){
		console.log( "FizzBuzz");
	} else if(x % 5 == 0){
		console.log("Buzz");
	} else if(x % 3 == 0){
		console.log("Fizz")
	} else {
		console.log(x);
	}
}

/* while loop
var num = 1;
while(num < 101){
	if(num % 15 === 0){
		console.log("FizzBuzz");
	} else if(num % 5 === 0){
		console.log("Buzz");
	} else if(num % 3 === 0){
		console.log("Fizz")
	} else {
		console.log(num);
	}
	num = num + 1;  // wonky expression
}
*/
