// Spread operator

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...number);
let min = Math.min(...number);

console.log(min);
console.log(max);

// Menggabungkan beberapa array menjadi 1 dengan spread operator.

let buah_buahan = ["Apel", "Jeruk", "Mangga", "Anggur", "Lengkeng", "Pisang"];
let sayuran = ["Wortel", "Kol", "Cabe", "Tomat", "Bawang", "Lengkuas", "Mentimun", "Kunyit"];

let bahan_makanan = [...buah_buahan, ...sayuran, "Susu", "Telur", "Tepung", "Mentega"];

for (let bahan of bahan_makanan) {
    console.log(bahan);
}