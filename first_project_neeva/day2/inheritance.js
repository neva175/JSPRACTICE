// 1. Create class Vehicle
class Vehicle {
  // 2. Add constructor
  constructor(brand) {
    this.brand = brand;
  }

  // 3. Add method drive()
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

// 4. Extend class Bike
class Bike extends Vehicle {
  // 5. Override drive()
  drive() {
    console.log(`${this.brand} bike is riding`);
  }
}

const bike1 = new Bike("Yamaha");
bike1.drive();


// 6. Create class Student
class Student {
  constructor(name, marks) {
    this.name = name;

    // 7. Add marks property
    this.marks = marks;
  }

  showInfo() {
    console.log(`${this.name} scored ${this.marks}`);
  }
}

// 8. Inherit class Programmer
class Programmer extends Student {
  constructor(name, marks, language) {

    // 9. Call parent method using super()
    super(name, marks);

    this.language = language;
  }

  showInfo() {
    super.showInfo();
    console.log(`Programming Language: ${this.language}`);
  }
}

const p1 = new Programmer("Rahul", 90, "JavaScript");
p1.showInfo();


// 10. Create multiple child classes
class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is moving`);
  }
}

class Truck extends Vehicle {
  drive() {
    console.log(`${this.brand} truck is transporting goods`);
  }
}

const car1 = new Car("Toyota");
const truck1 = new Truck("Volvo");

car1.drive();
truck1.drive();