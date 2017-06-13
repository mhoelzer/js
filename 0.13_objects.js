var emptyObject = {}  //this is an empty object

var johnQualls = {
//  Key       : Value 
	name      : "John Qualls",
	age       : "39",
	hairColor : "Brown Hair"
}
console.log(johnQualls);  // this will say this is an object and has 3 properties
console.log(johnQualls.name) // will return the value for teh key name
                             // .operator grabs whatever is in fron of that and goes and opens up that object
console.log(johnQualls.name,"is of the age",johnQualls.age+".");
console.log(johnQualls.height); // this will print out undefined because tehre is no key-vlaue for height yet
johnQualls.height = "6ft"; // objecy literal. now this will add it on to the johnQualls. we can call the key whenever now
console.log(johnQualls.height);
console.log(johnQualls);

//create an animal obejct with the properties of type, weight, commonInIndiaana, and habitat
var tiger = {
	type: "big cat",
	weight: "1200lbs",
	commonInIndiana: "not too often",
	habitat: "Antarctica"
}
console.log("A tiger is a",tiger.type,"that can weigh as little as",tiger.weight+". They live in",tiger.habitat+", so it is",tiger.commonInIndiana,"that you would see one here in Indiana.")

// square bracket notation
console.log(tiger["habitat"]);  // this prints out the propery only
tiger["nickName"] = "Toiga";
console.log(tiger["nickName"],"lives in",tiger.habitat+".");

// reassigning values
tiger.type = "small dog";
console.log(tiger.type);

// change weight of the animal using square vracket otation
tiger["weight"] = "9000oz";
// and add new array property of moviesAboutME
tiger.moviesAboutME = ["Life of Pi","The Jungle Book","Aladdin"];
console.log(tiger);
console.log(Object.keys(tiger));  // calling root object class and thing on top and returning keys
// this is a function bebcause of the parentehis

console.log("-----OwM/F-----");
// Objects with Methods/Functions
var theBryceIsRight = {
	name      : "Bryce Greene",
	age       : 55,
	vocation  : "Teacher's Assistant",
	email     : "thebryceisright@gmail.com",
	greeting  : function() {
					return "Greetings, Earthlings! I am "+this.name+", and I am here to learn you.";
					// the this.name references the object itself, so it pulls the theBryceIsRight to use the property inseide the funcrion inside the method
					},
	contactMe : function() {
					return "If you need to get in touch with me, feel free to reach me at: "+this.email+".";
					},
	greetContact: function(){
					return this.greeting() + " " + this.contactMe()
					// NEED THE +++!!! 
					// can also do below, but it puts it on separate lines:
					// console.log(this.greeting());
					// console.log(this.contactMe());
					}
}
console.log(theBryceIsRight.greeting());  // this prints the function's return
console.log(theBryceIsRight.greetContact());

console.log("-----Obj Constrcuters-----");
// Objects contructors
var paul = new Object;
//same as var paul = {}
console.log(paul);
paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code","listening to good music","baking banana muffins"];
// build properties then assign them

console.log("-----Obj Constrcuters Template-----");
// Objects contructors template
// will do same syntax bt can build hotels off it
function Hotel(name,rooms,booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvaliability = function(){
		return "There are " + (this.rooms - this.booked) + " rooms left."
	}
};
var jw = new Hotel("JW Marriot",300,250);
console.log(jw);
var jwExp = new Hotel("Mii J'Dubs",100,50); // will put an \ because of the single qutoe within single quote
// the new keyword helps initiate a new object
console.log(jwExp);
console.log(jwExp.checkAvaliability());
var hotels = [jw, jwExp]; // lists all hotels
console.log(hotels[1].name) // this accesses the nameof the 2nd obj in the array
console.log(hotels);
for (var h in hotels){
	console.log(hotels[h].name);
}   // gives names of all hotels