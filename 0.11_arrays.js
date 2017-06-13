/*
no keywords, but uses []
*/

//                  0       1       2       3       4
var students = ["Harrison","Rose","ben","Caitlyn","Kay"];
console.log(students);  //shows all conetent inside array
console.log(students.length); //shows how many pieces are inside array
console.log(students[0]); //to pick which specific piece you want. start with 0
console.log(students[-1]); //undefined because nothing is at that position
students.push("Aaron"); //adds Aaron to the end
console.log(students);
students.pop(); //takes off what is at the end
console.log(students);
// students[-1] = "Steve";
// console.log(students[-1]); --> this will print Steve
// if put students[5] = "Nick" below the steve, it will put each on their own 
// line and put the '-1': Steve' at the end

console.log("-----FOR EACH loop-----");
// FOR EACH loop
//     index   our array
for (var s in students){    //students is from the array from above; tells it to only go the length of the array
	// console.log(students[s]);  // s is the index or number and students is aray
	console.log(students[s],"is in the position of:",s);
	// var uppercase = students[s].toUpperCase();
	// console.log(uppercase,"is in the position of:",s);   makes all the names capitalized
}
// //the for each loop does what is below but much simpler
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// console.log(students[5]);

// create an array of numbers 1-10 then use a for in/each loop to print to consoel
var counting = [1,2,3,4,5,6,7,8,9,10];
for (var c in counting){
	console.log(counting[c]);
}
// ?????
// var counting = [1];
// for (var c in counting){
// 	return c += 1;
// 	console.log(counting[c]++);
// }

console.log("-----FOR loop with empty array-----");
//creating a for loop that pushes numbers into an empty array
// uses push method
//sometimes array is a keyword,s oyou can use arry
var numArray = []; //nothing inside but can push values into it
// var name = ""  //creates empty variable that you can add onto later in the code
for(var num = 1; num < 11; num++){
	console.log(num);
	numArray.push(num);
	console.log(numArray) // makes it a treelike structure
};
console.log(numArray); //looks like the last line of the same thing above

console.log("-----MIXED array-----");

var ranThings = ["Bryce",45,"Summer",true,[]];
console.log(ranThings);   //the array runs 