// Map
// Menjalankan fungsi untuk setiap elemen dan mengembalikan array baru berdasarkan hasil transformasi.

const nama = ["aang solihin", "asep drajat", "ujang supardi", "dadan hidayat"];
let semuaNama = nama.map(uppercase);

function uppercase(nama) {
    return nama.toUpperCase();
};

for (let nama of semuaNama) {
    console.log(nama);
}