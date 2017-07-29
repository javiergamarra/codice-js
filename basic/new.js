function Car(model) {
  this.model = model;
  this.drive = function () {
    console.log('driving a ' + this.model);
  }
}

let car = new Car('Seat Ibiza');
car.drive();

let audi = Object.create(car);
audi.drive();

audi.drive = function () {
  console.log('audi driving')
};
//overriding a method
audi.drive();

let audiA2 = new Car('A2');
let audiA4 = new Car('A4');

//adding a method to all instances
Car.prototype.stop = function () {
  console.log('stoppping a ' + this.model);
};

audiA2.stop();
audiA4.stop();

console.log(audiA2.__proto__, Car.prototype, audiA2.__proto__.__proto__);
