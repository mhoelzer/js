// EXAMPLE
function Car() {}
// child of Car(); it builds off the Car function and adds an object to it
car1 = new Car();
// since there is no defined color for car1, it will come up undefined
console.log(car1.color);    // undefined
// this is saying whenever you run the function Car, it will print null
Car.prototype.color = null;
console.log(car1.color);    // null
// this prints whatever is identified as the color; if put a number, a number would print out
car1.color = 'black';
console.log(car1.color);   // black

// parent and child --> have defaults but want diff types that tie in w/ parent; gives a new child inheritace and dont have to retype things

// Bronze: Make a function that gives a car's make and model, and have it print to the console.

// Silver: Make a function that gives a person's name, age, and gender, and have the name print to the console.

// Gold: Make a function that gives a car's make and model and year and ties in person you made in the silver challenge. Print multiple cars with all their information to the console.