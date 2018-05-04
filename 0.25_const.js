// const stands for constant. the const keyword is a container. However, const values must be initialized when they are declared. 

console.log("-----Initializing example-----");
// Object is declared and initialized with properties
let Aaron = {
    age: 30,
    height: '70in',
    hairColor: 'brown',
    eyeColor: 'black',
    glasses: true
};


console.log("-----const example-----");
/*
const constNumber;
constNumber = 10;
console.log(constNumber); //Error missing initializer in const declaration
*/ // example below is good
const constWithInitializer = 'Initializing as a string';
console.log(constWithInitializer);


console.log("-----const Immutability-----");
// for booleans, strings, and numbers, we will break the app if we try to change it by reassignment
const constWithInitializer2 = 'Initializing as a string'; // <-- you also can't use the same name without it throwing a fit
console.log(constWithInitializer2);
/* // Reassigning the value
// This will throw an error
constWithInitializer2 = "New value";
console.log(constWithInitializer2);
*/


console.log("-----const mutability/value is mutabile-----");
// we can manipulate the value of the string, meaning we can take the constWithInitializer variable and call methods on it
// using .concat()
// concat() --> Takes an unlimited number of strings, concatenates them to the original string, and returns the result
const constWithInitializer3 = 'Initializing as a string';
console.log(constWithInitializer3);
const ok = ", ok?";
console.log(constWithInitializer3.concat(ok));
// ^^^ this will add the ", ok?" to the end of the first const

// using .push()
// push() --> Adds the given value to the end of the array. Other values are not affected
const singers = ['Jagger', 'Plant', 'McCartney', 'Lennon']
console.log(singers);
singers.push('Cobain')
console.log(singers)
// ^^^ this will add Cobain to the array
/* singers = ['Clapton'];
console.log(singers); 
^^^ this would break because it's an entirely new reference to a whole different array (it uses the same variable when it shouldnt). however, this works with var: (see below)
*/
var guitarists = ['Page', 'Hendrix', 'Clapton'];
console.log(guitarists);
guitarists = ['King'];
console.log(guitarists);


console.log("-----practice-----");
//1
const favoriteFoods = ['apples', 'beets', 'cauliflower', 'dairy'];
//3
const diet = checkFoodList(favoriteFoods);
//4
const shortNames = diet.checkForShorterNames();
console.log("Short names:", shortNames)
//5
const longNames = diet.checkForLongerNames();
console.log("Long names:", longNames);
//2
function checkFoodList(items) {
  return {
    checkForShorterNames: () => items.filter(item => item.length <= 6),
    checkForLongerNames: () => items.filter(item => item.length > 6)
  }
}
/* ^^^
1. We created the favoriteFoods array as a const.
2. We created a method called checkFoodList. That method returns two different methods checkForShorterNames & checkForLongerNames. These methods do some basic filtering (Note: these methods are using arrow functions).
3. We create another const called diet. We store the result of passing in the favoriteFoods array into checkFoodList. This way we can call the methods on the diet constant.
4. The diet constant now has access to the two methods, and we create another const called shortNames to store the result of running checkForShorterNames().
5. We create another const called longNames to store the result of running checkForLongererNames() that will be used to store the result of calling the method on diet.
*/


console.log("-----more practice-----");
const singerNames = ['Ailee', 'BTS', 'Evanescence', 'TFK'];
const singersHey = filterSingerNames(singerNames);
const shortSingerNames = singersHey.checkForShorterSingerNames();
	console.log("Short Singer Names:", shortSingerNames);
const longSingerNames = singersHey.checkForLongerSingerNames(); 
	console.log("Long Singer Names:", longSingerNames);
function filterSingerNames(items) {
	return {
		checkForShorterSingerNames: () => items.filter(item => item.length <=4),
		checkForLongerSingerNames: () => items.filter(item => item.length >4)
	}
}
singerNames.push('Cobain')
console.log(singerNames) // <-- lists all names in array and the .push()
/* console.log("Short Singer Names:", shortSingerNames);
console.log("Long Singer Names:", longSingerNames);
^^^ THIS WILL NOT ADD THE .push() tO EITHER LIST 
*/


