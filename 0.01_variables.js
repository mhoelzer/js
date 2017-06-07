var name = "michelle"

// declaration
var name1;   //if not declared, it leads to an error with 
// the console.log
console.log(name1);  // puts undefined because there is nothing
// inside of it or defined yet for the name1
//
// initialization
// data type = string
name1 = "michelle"   // if have by itself and no var name1, it
// declares itself (hoisting)
console.log(name1);   // will put the name1 because defined
console.log("name" + "naene");
console.log(true);
console.log(1+1);

var firstName = "Michelle";
var lastName = "Hoelzer";
console.log(firstName + lastName);
// concatenation
console.log(firstName + " " + lastName);

var firstName1 = "Michelle     ";
var lastName1 = "Hoelzer";
console.log(firstName1 + lastName1);

// write out your address in 3 varibales street, state, and zip 
// and add together and print to console
var street = "123 Fake Street";
var state = "South Georgia and the South Sandwich Islands";
var zip = "666";
console.log(street + ", " + state + " " + zip);
console.log(street + ", \n" + state + " " + zip);
console.log("Ben says, \"Good morrow to you, sir\" ");
console.log('Ben says, "Good morrow to you, sir" ');

var isAwake = true;
console.log("It is " + isAwake + " that I am not awake.");
// var true = "hey you guys";  wont work because making a var
// wiht a reserved keyword
var rainy = false;
console.log(rainy);

// operators
console.log("The answer to 10 % 3 is: " , 10 % 3);
console.log("The answer to 10 % 3 is: " + 10 % 3);
console.log(typeof(10 % 3));
console.log(typeof("The answer to 10 % 3 is: " + 10 % 3));
console.log(typeof("The answer to 10 % 3 is: " , 10 % 3));
// takes tthe last part and makes it the typeof, so numberabove