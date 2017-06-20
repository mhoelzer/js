/*
Closures are essentially functions
	variables inside of fucntions cannot be used outside 
*/

var init = function(){
	// this creates a colsure
	var name = "Summer";

	function displayName(){
		console.log(name);
	}
	displayName();
}
init();
// if console.log(name) isnt a omment, it doesnt work
// console.log(name);

// 
var friend = {}
var setAge = function(myAge){
	// here is our closure
	var birthday = '4/20';
	// function reutrns object and just returns myage
	return{
		getAge: function(){
			console.log(myAge);
			return myAge;
		}
	}
}
// assigning a value
/* var friend = {
	age = function(){
		setting the age
		getAge()
		reutnr hte age
		}
	}
}
*/
// made funtion in obejct then put obejct inside function
friend.age = setAge(55);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);
// this shows that birthdya is protected in this fnction