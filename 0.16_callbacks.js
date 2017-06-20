// require went out to find the modules and pull tehm out to use the application
// this modle is built inside node, so we dont have to inculde it or w/e
// fs = file system
var fs = require('fs');
/*
diagram of a clalback

request = prepare_the_request();
send_request_asynchronously (request, function(response)){
	display(response);
});

*/

// when call function, first get the file path then pass in the dictionary to have things to comapre against
// dict means dictionary but we caled the page a dictionary just so it means more to us
// the done is a callback. done in ajax mean shwen this process is done, it gives us a callback. when this i sdone, give all bulls names. clalback for parameter action
// getBulls([path], callback)
function getBulls(filepath, done){
	// telling file system to read a file that the user of the function passes into as an arguement. 
	// then we are creating a callback to handle that case. 
	// the err is for error if there is nothing in file or wrong file, etc
	// the callback is evertyhing with teh function
	fs.readFile(filepath, function(err, bulls){
		// error handling = trying ot catch error
		// if err is there/trye, then return this done function that prints out w/e the error is
		// done refers to the function you pass in
		if (err) return done(err);
		// make sure you read the file of ____, and after read ___, od another callback (inlcude err just in cases)
		// put the err first to stop if there is one. most unique case goes first
		fs.readFile('0.16_bulls.dictionary', function(err, dict){
			// error handling
			if (err) return done(err);
			// do some logic 
			compareBulls(bulls, dict);
		})
	})
	// variable way
	var compareBulls = function (bulls, dict){
		// turn the items from these files into arrays then split tehm 
		// below: if osmeone was going to pass in the bulls dict, have in array
		// split after every new line = \n
		dict = dict.toString().split('\n');
		// do same for bulls and put .filter()
		// we go to dictionary then split everything into an array of things then split by every new line then filter (pass in txt file 
		// and compare against each in dictionary file, like is james inside the dictionary? if no, no print. if yes, print)
		// want to return bulls inside dictionary
		bulls = bulls.toString().split('\n').filter(function(bulls){
			// this goes over the dictionary, then it's checking if the bulls are located inside of the dictioary
			// if it is located inside dictionary, then it's reutnring that value
			// not = to -1. doesnt go past where it shouldnt 
			// gives value that is the same
			return dict.indexOf(bulls) !== -1
		})
		done(bulls);
	}
}

// passing in a file and then a callback to create library or jquery if wanted with all the diff methdos inside 
getBulls('0.16_bulls.txt', function(bulls){
	// dont have an err message to put here
	// if (err) return done(err);
	// error handling
	// reutnrs bulls inside dictionary. prints out bulls anmes inside 
	console.log(bulls);
})
// run on terminal by going to folder and doing: node ./filename

// another example of callback
console.log("Hey! Tell me your name.");
var printNameInThreeSeconds = setTimeout(function(){
	// prints ou the bryce later
	console.log("Bryce");
// the 3000 is 3 seconds 
}, 3000);
console.log("Nice to meet you!");