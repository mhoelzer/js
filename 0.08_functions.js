/* Functions */
/*
function Name_of_Function(){
	
}
*/

// Declaring the function
function greeting(){
	var name = "Val Kilmer"  // putting name = "Val Kilmer" would work because it's acting like a little brother and is trying to help out again, so let me put it in the global conext
	console.log("The wise, old",name,"once asked Robert Downey, Jr., \"Who taught you math?\"");
}
// calling the function
greeting();
// console.log(name);  this wont work because the var is within the {} of the block of code above/the local scope of the function while this part is in the global
// however, if you do this while taking out the var from aboce, then it works because js made it global and it is accessible anywhere outisde the function cause duh global

function currentWeather(){
	var weather = "sunny"
	if(currentWeather = weather){
		console.log("It is sunny outside. I'd rather have rain.");
	} else {
		console.log("Is it raining? I hope it is.");
	};
}
currentWeather();
/*
var weather = "It's always sunny";
function currentWeather(){
	console.log(weather);
}
currentWeather();

function currentWeather(){
	console.log("it's always sunny");
}
currentWeather();
*/

/* Functions with Parameters */
// functions with single aprameter
function shoes(brand){
	console.log("Man, those",brand,"are poppin'!");
}
// keyword is a parameter is brand meaning calling the function must put in a parameter otheriwse it iwll be undefined
// it is something waitng to be pased in and whatever is added in as an argument is made into the parameter
shoes("horse shoes");

// functions with multiple parameters
function add(num1, num2){
	console.log(num1 + num2);
}
add(34, 66);

// functions that return data
function sum(num1, num2){
	return num1 + num2;
}
var answerToQuestion = sum(23, 17);
// 
// sum(23, 17);s
// this makes it a computaton and hav the numbers together
console.log(sum(23, 17));
console.log(answerToQuestion);
// this shows the data returned back

// functions for */%-
function subraction(a,b){
	return a - b;
}
console.log(subraction(5,3));

function multiplication(c,d) {
	return c*d;
}
console.log(multiplication(6,2));

function division(e,f) {
	return e/f;
}
console.log(division(10,2));

function module(g,h) {
	return g % h;
}
console.log(module(14,2));