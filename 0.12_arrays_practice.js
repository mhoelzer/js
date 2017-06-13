console.log("-----BRONZE-----");
//bronze
var hobbies = ["writing","music","badminton","reading"];
console.log(hobbies);

console.log("-----SIVLER-----");
//sivler
var cars = ["lamborghini diablo","chrysler","fiat","not toyota"];
for (var c in cars){
	console.log("Here is a list of some awesome cars:",cars[c])
}

console.log("-----GOLD-----");
//gold
// 2d array
var authors = ["Mark Lawrence","Tamora Pierce","Dean Koontz"];
var colors = ["orange","teal","lime green"];
var numbers = [6,7,13];
var combination = [authors, colors, numbers]
console.log(combination)

var combo = [[1,1,1],[3,3,3],[2,2,2]]
console.log(combo)
// stupid way???
// var a = new Array("Mark Lawrence","Tamora Pierce","Dean Koontz");
// (this var might not be needed)var b = new Array ("orange","teal","lime green");
// c = new Array (6,7,13);
// var combination = [a,b,c]
// console.log(combination)
var arrayidk = [["Mark Lawrence","Tamora Pierce","Dean Koontz"],["orange","teal","lime green"],[6,7,13]];
// var arrayidk = [i][n]  //in here you can insert a specific thingy. th i is column and the n is row
for(var i in arrayidk){
	for(var n in arrayidk[i]){
		console.log(arrayidk[i][n])
	}
}

console.log("-----Q!1-----");
// random number
var maths = Math.floor(Math.random() * 50) + 1;  //means 50 is the max and 1 is the min
console.log(maths);

console.log("-----Q!2-----");
// var loopy = Math.random();
// do {
// 	loopy = loopy
// } while (loopy*15)
// console.log(loopy)
// for(loopy = 1; loopy<=15; loopy++){ 
// 	console.log(loopy);
// }
var fifteenRandoms = [];
for(var i = 0; i < 15; i++){
    fifteenRandoms.push(Math.floor(Math.random() * 50));
}
console.log(fifteenRandoms);
function isPrime(value){
    for(var i = 2; i < value; i++){
        if(value % i === 0){
            return false;
        }
        else{
            return true;
        }
    }
}
var primes = [];
for(var y = 0; y < fifteenRandoms.length; y++){
    if (isPrime(y) === true) {
        primes.push(y);
    }
}
console.log(primes);

// console.log("-----Q!3-----");
// //empty array
// var numbydo = [];
// for(var numby = 5; numby <= 45; numby++){
// 	numbydo.push(numby);
// 	if(numby % 3){
// 		$("grid" + numby).hide();
// 	}
// };
// console.log(numbydo)

console.log("-----Q!5-----");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rand = [];
var word = "";
for(bet = 0; bet <5; bet++){
    for(lett = 0; lett <5; lett++){
        word = word.concat(alph[(getRandomInt(1,27) - 1)]);
    }
    rand.push(word);
    word = "";
}
console.log(rand);