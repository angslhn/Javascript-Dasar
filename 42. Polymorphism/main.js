// Polymorphism
// Polimorfisme memungkinkan metode yang sama memiliki perilaku yang berbeda.

class Hewan {
    suara() {
        return "Hewan Bersuara";
    }
}

class Kucing extends Hewan {
    suara() {
        return "Meow meowww!"
    }
}

class Anjing extends Hewan {
    suara() {
        return "Guuk guuk!"
    }
}

let hewan = new Hewan();
let kucing = new Kucing();
let anjing = new Anjing();

console.log(hewan.suara());
console.log(kucing.suara());
console.log(anjing.suara());