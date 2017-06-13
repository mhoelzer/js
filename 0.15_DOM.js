// this is to check if the files are connected with html
alert("Happy Friday"); // alert is a method to pop up an alert box when they run the page
// confirm vs alert: confirm had the okay and cancel. alert had okay

function Hotel(name,rooms,booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var rri = new Hotel("Red Roof Inn",250,230);
var alex = new Hotel("The Alexander",500,150);

// build an array to hold the hotels
var hotels = [rri,alex];

// show all hotels function
function showAllHotelsInfo(){
	for (var h in hotels){  // h is local to the for loop and represents each hotel in the array, and hotels is the array
		var hotelName = hotels[h].name;  // grabbing name from array and putting into hemtl
		var hotelHtmlText = document.createTextNode(hotelName);   // talk to html to put hotel on the html; document refers to the html document
		// createTextNode makes a place to hold thing temporarily. it will hold the strings attached to the hotels array and the variable for the hotels array
		// create place on document/website to hold the value and retrun a dtring of the hotel name. gave it a backpack
		var listItem = document.createElement("li");   // have the uls ad need to put data into them so put into lis then make list items to put there and put totelhtmltext in there and then put them on hte wwepage
		//creating the element creates the lis
		listItem.appendChild(hotelHtmlText); // this says that the hotel should be put in here. put this html context inside of these two brackets
		document.getElementById("hotels").appendChild(listItem); // look at html and see if anything has id of hotels and grab whatever it is and place in all the lis wherever that element is
		// stick line 29 onto this (the listiem.appendchild)
	}
}
showAllHotelsInfo();