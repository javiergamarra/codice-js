class Car {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  method() {
    console.log(this.x);

  }

}

class Audi extends Car {

  constructor(x, y) {
    super(x, y)
  }

  method() {
    super.method()
  }

}
