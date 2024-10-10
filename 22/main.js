// Callback
// Memanggil fungsi lain ketika tugas telah selesai.

tambah(hasilTambah, 30, 10);

function tambah(tampilkan, a, b) {
    let hasil = a + b
    tampilkan(hasil);
}

function hasilTambah(hasil) {
    console.log(hasil);
}