// Composition (Alternatif Pewarisan)
// Alih-alih menggunakan pewarisan, kita bisa menggunakan komposisi.

const canFly = {
  fly() {
    console.log("I can fly!");
  }
};

const canSwim = {
  swim() {
    console.log("I can swim!");
  }
};

class Bird {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Bird.prototype, canFly);

const duck = new Bird("Duck");
duck.fly(); // Output: I can fly!