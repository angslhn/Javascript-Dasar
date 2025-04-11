// Object
// Objek adalah kumpulan properti dan metode yang menggambarkan suatu entitas.

// Membuat Object
const person = {
    nama: "Alice",
    umur: 25,
    kota: "New York",
    greet: function () {
        console.log("Hallo, nama saya adalah " + this.nama);
    }
};

console.log(person);
person.greet(); // Hallo, nama saya adalah Alice