// Sets Methods

const angka = new Set([1, 2, 3, 4, 5]);

// Menambahkan elemen ke dalam Set
angka.add(6);
angka.add(2); // Tidak akan ditambahkan karena sudah ada.
console.log(angka); // Set(6) {1, 2, 3, 4, 5, 6}

// Menghapus elemen dari Set
angka.delete(3);
console.log(angka); // Set(5) {1, 2, 4, 5, 6}

// Mengecek apakah Set mengandung elemen tertentu.
console.log(angka.has(4)); // true
console.log(angka.has(10)); // false

// Mendapatkan ukuran Set
console.log(angka.size); // 5

// Konversi Set ke Array
const arrayAngka = [...angka];
console.log(arrayAngka); // [1, 2, 4, 5, 6]

// Menghapus semua elemen dari Set
angka.clear();
console.log(angka); // Set(0) {}

// Menghapus duplikasi dalam Array
const angkaDuplikat = [1, 2, 2, 3, 4, 4, 5];
const angkaUnik = [...new Set(angkaDuplikat)];
console.log(angkaUnik); // [1, 2, 3, 4, 5]