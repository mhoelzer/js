// let ~ var
// let block scopes: 'Var' will be visible and will print to the console whether or not the console.log or whatever is in curly brackets. 'Let' will be visible and will print to the console ONLY IF the console.log or whatever is inside the curly brackets/inside the same level of curly bracket as the 'let.'

var someNum = 10;
let someOtherNum = 5;



console.log("-----blockscoping-----");
// blockscoping
{
    var demo = 1;
}
console.log("Var demo:", demo);
// 2

{
	let demoTwo = 5; 
	console.log("deknf",demoTwo) // <-- this will print: deknf 5
}
// console.log("Let demo:", demoTwo); <-- this would break
{
	{ 
		let twoLevelsInWithLet = 'Two levels in'; 
		console.log(twoLevelsInWithLet) // <-- this will print: Two levels in
	}
	// console.log(twoLevelsInWithLet) <-- this would break
}
// console.log(twoLevelsInWithLet) <-- this would break



console.log("-----conditionals-----");
// conditionals
// var
var x = 8;
if(x === 8){
    var y = 7;
}
console.log("Var:", y);

let xyz = 8;
if(xyz === 8){
    let yy = 7;
    console.log("Let:", yy)
}
// console.log("Let:", yy); <-- this would break



console.log("-----for loops-----");
// for loops: To keep the value of i protected and within the bounds of each specific for loop is handy
for (var ii = 0; ii < 2; ii++) {
console.log(ii)
// <- 0
// <- 1
}
console.log("Outside with var:", ii) // <-- This will work.

for (let i = 0; i < 2; i++) {
    console.log(i) 
    // <- 0
    // <- 1
  }
  // This won't work:
//  console.log("Outside with let:", i)



console.log("-----functions-----");
// functions
function isLoggedIn(password) {
    if (password === '123abc') {
      var login = "You are logged in!";
    }
    return login;
}
// console.log(login); <-- this would break
var x = isLoggedIn('123abc')
console.log(x); // <-- true
var y = isLoggedIn('two')
console.log(y); // <-- undefined because it doesn't meet the `var login` requirements fro the `password` variable. if have version 2 here, it will say: "Please log in with a correct password"

// version 1
function isLoggedIn(password) {
    if (password === '123abc') {
      let login = "You are logged in!";
      return login // <-- this would work
    }
    // return login; <-- this would break; We get an error because the login variable is no longer available outside the scope of the if statement inside the function because let can not be seen by outer blocks. Hence, it can't be returned by the function because it isn't available.
  }
var x = isLoggedIn('123abc')
console.log(x);

// version 2
function isLoggedIn(password) {
    let login = "Please log in with a correct password";
    if (password === '123abc') {
      login = "You are logged in!";
    }
    return login;
  }
var x = isLoggedIn('d')
console.log(x);



console.log("-----practice-----");
function checkCreditCard(cardNumber) {
	let cardy = "Please enter a valid card";
	let right = "Card passed"
	if (cardNumber === '4242424242424242') {
		return right
	} else {
		return cardy
	}
}
var x = checkCreditCard('4242424242424242')
console.log(x); // <-- will pass
var x = checkCreditCard('ysfdho')
console.log(x); // <-- this will fail