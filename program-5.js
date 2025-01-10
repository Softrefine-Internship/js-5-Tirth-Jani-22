// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class Shape {
  area() {}
}
class Circle extends Shape {
  area(r) {
    console.log(r * r * 3.14);
  }
}
class Triangle extends Shape {
  area(height, base) {
    const a = 0.5 * base * height;
    console.log(a);
  }
}
const c = new Circle();
c.area(5);
const t = new Triangle();
t.area(5, 6);
