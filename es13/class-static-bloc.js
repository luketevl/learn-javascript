class Vehicle {
  static defaultColor = "blue";
}

class Car extends Vehicle {
  static colors = [];

  static {
    this.colors.push(super.defaultColor, "red");
  }

  static {
    this.colors.push("green");
  }
}

console.log(Car.colors); // [ 'blue', 'red', 'green' ]

/* 
A class can have any number of static {} initialization blocks in its class body. They will be executed, along with any interleaved static field initializers, in the order they are declared. We can use the super property in a static block to access properties of the super class.

*/
