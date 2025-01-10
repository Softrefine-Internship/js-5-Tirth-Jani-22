class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log("Make:", this.make);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    display() {
        super.display(); 
        console.log("Doors:", this.doors);
    }
}

const c1 = new Car("abc", "ccc", "666", 4);
c1.display();
