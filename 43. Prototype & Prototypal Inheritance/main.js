// Prototype & Prototypal Inheritance
// JavaScript menggunakan sistem pewarisan berbasis prototype.

function Mobil(brand) {
    this.brand = brand;
}
  
Mobil.prototype.drive = function() {
    console.log(`${this.brand} sedang berjalan`);
};
  
const mobil = new Mobil("Toyota");

mobil.drive(); // Output: Toyota sedang berjalan 