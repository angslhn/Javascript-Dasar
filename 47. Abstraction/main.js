// Abstraction
// JavaScript tidak memiliki konsep abstract class atau interface secara bawaan, tapi bisa disimulasikan.

class Shape {
    constructor (name) {
        if (this.constructor === Shape) {
            throw new Error ("Failed!");
        }
        this.name = name;
    }
    
    calculateArea () {
        throw new Error ("Not Implement!");
    };
}

class Rectangle extends Shape {
    constructor (width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea () {
        return this.width * this.height;
    }
}

let rectangleArea = new Rectangle(30, 40);

console.log(rectangleArea.calculateArea());