// Math random

const min = 30;
const max = 50;
let result = Math.floor(Math.random() * (max - min + 1)) + min; // Mendapatkan nilai antara 30 sampai 50 dan tidak mendapatkan nilai di bawah 30.

console.log(result);