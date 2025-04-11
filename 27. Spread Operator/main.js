// Spread operator
// Menyalin atau menggabungkan beberapa array menjadi 1 bagian.

let buah_buahan = ["Apel", "Jeruk", "Mangga", "Anggur", "Lengkeng", "Pisang"];
let sayuran = ["Wortel", "Kol", "Cabe", "Tomat", "Bawang", "Lengkuas", "Mentimun", "Kunyit"];

let bahan_makanan = [...buah_buahan, ...sayuran, "Susu", "Telur", "Tepung", "Mentega"];

for (let bahan of bahan_makanan) {
    console.log(bahan);
}