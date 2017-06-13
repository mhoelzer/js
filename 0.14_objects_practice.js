// braanze and silva
function person(name,job,sleep) {
	this.name = name;
	this.job = job;
	this.sleep = sleep;
	this.combo = function(){
		return this.name + " " + this.job + " " + this.sleep;
	}
};
var bob = new person("george","the griller","doesnt sleep")
var child = new person("baby jojo","is unemployed","and sleeps all the time")
child.ending = "and does nothing much";
console.log(bob.combo());
console.log(child.combo() + " " + child.ending);

// from classnotesandcode
var stebe = {
	name: "Stebe",
	age: "20",
	birthday: function(){
		this.age++
	},
	favoriteShows: ["Grimm","Chicago PD","Chicago Fire","Chicago Law","ChicagoEMT"],
	compareShow: function(lofo){
		for (var i in this.favoriteShows){
			for (var j in lofo.favoriteShows){
				if(this.favoriteShows[i] == lofo.favoriteShows[j]){
					console.log(this.favoriteShows[i]);
				}
				if(this.favoriteShows[i] != lofo.favoriteShows[j]){
					console.log("No shows in common.");
				};
			};
		};
	// hello: function(){

	// }
	}
}
var lofo = {
	name: "Lofo",
	age: "43",
	birthday: function(){
		this.age++
	},
	favoriteShows: ["Grimm","bob the builder","jejeje","Cheers","Once Upon a Time"]
}
var peanot = {
	name: "Peanot",
	age: "333",
	birthday: function(){
		this.age++
	},
	favoriteShows: ["Grimm","POI","Chicago PD","Y&R","KUWTK"]
}