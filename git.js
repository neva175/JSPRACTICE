class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    console.log(`${this.type} is moving`);
  }
}
// Child class (derived class)
class Car extends Vehicle {
  constructor(brand, color) {
    super("Car"); // calls parent constructor
    this.brand = brand;
    this.color = color;
  }
  horn() {
    console.log(`${this.brand} says Beep Beep!`);
  }
}
const myCar = new Car("Tesla", "Blue");
myCar.move();   // Car is moving
myCar.horn();   // Tesla says Beep Beep!