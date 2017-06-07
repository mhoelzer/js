// Conditionals

/*
operators
	> greater than
	< less than
	>= greater than or equal
	<= less than or equal
	== equal to
	=== strictly equal to
	! not 
	!= not equal to
*/

console.log(1>3); // false
console.log(10!=10); // false

var name = "Michelle";
console.log(name == "michelle"); // false bcause name isnt capital
console.log(name == "Michelle"); // true because capitalized

console.log(6 == "6"); // true because the number 6 is equal to
// the string of 6; it is only checking if the value is the same
// on each side while ommittingt he data type. 6 is on both sides
// butttt 
console.log(6 === "6"); // false because it is comparing value
// and type with the ===



// If statements
/* 
if(boolean expression){
	whtever is in here will get the thing to run; new executable
	context; new scope for code; nsome code goes here
}
*/

if(242 % 2 === 0){
	console.log("This number is even.")
};
// if(4563 % 2 === 0){
// 	console.log("This number is even.")
// };  wont create anything

var userName = "admin"; 
var password = "test123";
if(userName == "admin" && password == "test123"){
	console.log("You have been granted access!");
}

var userName = "admin"; 
var password = "admin";
if(userName == "admin" && password == "admin"){
	console.log("You have been granted access!");
}
/*
chaining boolean expressions
	&& and
	|| or
*/


/*if and else*/ 
// var userName = "admin"; 
// var password = "admin3";
// if(userName == "admin" && password == "admin"){
// 	console.log("You have been granted access!");
// } else {
// 	if(userName != "admin"){
// 		console.log("Incorrect userName")
// 	} else if (password != "admin3") {
// 		console.log("Incorrect password")
// 	}
// }
var userName = "admin"; 
var password = "admin3";
if(userName == "admin" && password == "admin"){
	console.log("You have been granted access!");
} else {
	if(userName == "admin"){
		console.log("Incorrect password");
	} else {
		console.log("Incorrect username");
	}
}
var userName = "admin3r"; 
var password = "admin";
if(userName == "admin" && password == "admin"){
	console.log("You have been granted access!");
} else {
	if(userName == "admin"){
		console.log("Incorrect password");
	} else {
		console.log("Incorrect username");
	}
}

var userName = "admin3"; 
var password = "admin3";
if(userName == "admin" && password == "admin"){
	console.log("You have been granted access!");
} else {
	if(userName != "admin" && password != "admin"){
		console.log("Incorrect everything, idiot");
	} else if(userName != "admin") {
		console.log("Incorrect username");
	} else if(password != "admin") {
		console.log("Incorrect password")
	} else {
		console.log("IDK how you got here, man")
	}
}


/* if, else if, and else */
/* 
if(boolean expression){
	//some code goes hre
} else if(boolean expression){
	//some code goes here
} else {
	//catch all 
}
*/

var age = 20;
if (age >= 35) {
	console.log("You can vote and hold any place in government. Congratulations. All is right in the world or something idk.")
} else if(age >= 25){
	console.log("You can vote and run for senate. Yay....");
} else if (age >= 18) {
	console.log("You can vote. Actually do it, or don't complain about the results");
} else {
	console.log("You're outta luck! Sorry if the system screws you over, whcih it most likely will cause this is how politics works");
};