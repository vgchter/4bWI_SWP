interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car");
  }

  getMake() {
    return "Toyota";
  }
}

class RaceCar extends Car {
  setPowerMode() {
    console.log("Power mode activated!");
  }

  drive() {
    console.log("Driving a race car fast!");
  }
}

class Aaroplane extends RaceCar {
  fly() {
    console.log("Flying an aeroplane");
  }
}
const myAaroplane = new Aaroplane();
myAaroplane.fly();
