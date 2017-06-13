// bronze
function manTrust(reason1,reason2){
	console.log("Never trust a man. For he will",reason1,"and",reason2);
}
manTrust("leave you heartbroken","stuck in the floor.");

// silver
function bills(heat,water,TV){
	return heat+water+TV;
}
console.log("$"+bills(1200,200,9000));

// gold
function soda(each,total,tax){
	return ((each*total)*tax);
}
var total = 100;
console.log("If you buy",total,"sodas,it will cost you $"+(soda(.99,100,1.07).toFixed(2)));


// create a calculator function that acepts 3 arguments 2 num and 1 operator.
// inside of the function, allow it to take addition, sub, mult, div, and modul
// ex: calculator(2,*,2) >> this should return 4
// hint you will need to use conditionals
function calculator(num1,operator,num2){
	if (operator == "+") {
		return num1 + num2
	} else if (operator == "-"){
		return num1 - num2
	} else if (operator == "*") {
		return num1*num2
	} else if (operator == "%") {
		return num1%num2
	} else if (operator == "/") {
		return num1/num2
	} else {
		return "Please enter a valid operator";
	}
}
console.log(calculator(12,"-",6))
// diff way???
function calculator(num1,operator,num2){
	if (operator == "+") {return num1+num2};
	if (operator == "-") {return num1-num2};
	if (operator == "*") {return num1*num2};
	if (operator == "%") {return num1%num2};
	if (operator == "/") {return num1/num2};
	return "Please enter a valid operator";
}
console.log(calculator(12,"p",6))