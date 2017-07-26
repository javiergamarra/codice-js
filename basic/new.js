function Car(model) {
  this.model = model;
  this.drive = function () {
    console.log('driving');
  }
}

var car = {
  drive: function () {

  }
};

var audi = Object.create(car);

audi.drive = function () {
  
}



var audi = new Car('A2');
var oldAudi = new Car('A2');

Car.prototype.stop = function () {
  console.log('stop');
};

audi.stop();
oldAudi.stop();
//
// // console.log(oldAudi.model, audi.__proto__, audi.__proto__.__proto__);
// audi.drive();
// audi.drive = function () {
//   console.log('audi driving');
// };
//
// audi.drive();
// oldAudi.drive();
//
// var seat = Object.create(oldAudi);
// console.log(seat.model);
// seat.drive();
