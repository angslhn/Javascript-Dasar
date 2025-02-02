// Array
// .unshift()  ->   Menambahkan array baru di awal
// .push()     ->   Menambahkan array baru di akhir
// .shift()    ->   Menghapus array di awal
// .pop()      ->   Menghapus array di akhir
// .length     ->   Mengecek panjang dari array

const angka = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const buah = ["Apel", "Jeruk", "Mangga", "Pepaya", "Pisang", "Anggur"];

for ( let semuaAngka of angka) {
  console.log(semuaAngka);
}

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
};