// hoisting up to global
// declarations are hoisted, and initialization is not
// foo calls function before invoked
// declaration is can o fsoda; this is monstre is intiialization

// fooTwo();
// var fooTwo = function(){
// 	console.log("hello");
// }
// this equals sign means initialization, so no hoisting, so declare before use

// look up hoisting again b/c theirs sucked
// pushing things up locally

var num = 10;//declaration AND initialization 
function x() {
   console.log(num);
}
x();
// this will log 10


var numTwo = 1;
function y() {
	numTwo = 10;
}
y(); // this would print 10 when in, and witohu it, it ould print 1 
console.log(numTwo);


// this wouldnt work because the declatarion of Hobbit (no = sign) and arent hoisted, and neither are initializations, so nothign would work if the var is put before the class; class declarations are tsome of the only ones to not get hoisted
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
 constructor(height, weight) {
   this.height = height;
   this.weight = weight;
 }
}

// no value assignment works; reads all code then build top to bottom
foo();
function foo() {
	console.log("hello")
}

// each time change scopo ein code, put at top and make model or throw at start scope

// gave can is dec; here is can of monster is initialization

// dec vs initializtion; ties in with scop



