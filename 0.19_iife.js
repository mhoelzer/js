/*
iffe = imetidatly-invoked fucntion expression
creating and running it in same block ggun
*/
// this declares an dclals it at the same time
// created then called function as same time
// define then run immediately
// the var inside only runs here 
(function printNum(){
	var a = 5;
	console.log(a)
})();
// regular function 
// ; means call function apart
function printName(){
	var name = "John";
	console.log(name)
}
printName();

// create an iffee that counts frm 1-10
(function printNums(){
	for (i = 1; i<=10; i++)
	console.log(i);
})();

// find errors
var smartCar = {}
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg: function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(30,15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());