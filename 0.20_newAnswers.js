// Bronze
function Car(make, model) {
  this.make = make;
  this.model = model;
}
var mycar = new Car('Eagle', 'Talon TSi');
var sportsCar = new Car('Nissan', '300ZX');
console.log(kennscar)

// Silver
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Kenn Pascascio', 39, 'M');
console.log(rand.name)

// Gold
function Carsss(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var car1 = new Carsss('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Carsss('Nissan', '300ZX', 1992, kenn);

var allCars = [car1, car2];
console.log(allCars);
console.log(car2.owner);