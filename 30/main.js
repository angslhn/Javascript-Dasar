// OOP Javascript

// Object manual 
// let mobil = {
//     merek: "Honda",
//     tipe: "Brio",
//     tahun: 2022,

//     statusMobil: function () {
//         return "Mobil aktif"
//     },

//     info: function () {
//         return `${mobil.merek} ${mobil.tipe} ${mobil.tahun} -> ${mobil.statusMobil}`;
//     }
// }

// console.log(mobil.info());

// Constructor function
// function Mobil(merek, model, tahun) {
//     this.merek = merek;
//     this.model = model;
//     this.tahun = tahun;

//     this.status = function () {
//         return "mobil aktif"
//     }

//     this.info = function () {
//         return `${this.merek} ${this.model} ${this.tahun} -> ${this.status()}`;
//     }
// };

// let mobil = new Mobil("Toyota", "Supra", 2005);

// console.log(mobil.info());

// Prototype

function Hewan(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
}

Hewan.prototype.info = function () {
    return `Nama hewan itu adalah ${this.nama} dan jenisnya adalah ${this.jenis}`;
};

let kucing = new Hewan("Donit", "Kucing");

console.log(kucing.info());