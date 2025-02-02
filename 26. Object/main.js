// Object

// Object literals
let mahasiswa = {
    nama: "Aang Solihin",
    umur: 19,
    jurusan: "Teknik Informatika"
};

console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.jurusan);

console.log(" ");

// Object constructor new Object()
mahasiswa = new Object();
mahasiswa.nama = "Wawan Setiawan";
mahasiswa.umur = 22;
mahasiswa.jurusan = "PGSD";

console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.jurusan);

console.log(" ");

// Mengubah atau menambah
mahasiswa.nama = "Doni Hidayat";
mahasiswa.umur = 20;
mahasiswa.jurusan = "Sastra Inggris";
console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
console.log(mahasiswa.jurusan)

mahasiswa.kota = "Garut";
console.log(mahasiswa.kota);

// Menghapus
delete mahasiswa.kota;

console.log(" ");

// Nested object
let universitas = {
    nama: "UNIVERSITAS SEBELAS APRIL",
    fakultas: {
        nama: "Fakultas Teknologi Informasi",
        jurusan: "Teknik Informatika"
    }
}

let kampus = universitas.nama;
let fakultas = universitas.fakultas.nama;
let jurusan = universitas.fakultas.jurusan;

console.log(kampus.toUpperCase());
console.log(fakultas.toUpperCase());
console.log(jurusan.toUpperCase());

console.log(" ");

// Destructor
let {nama, umur} = mahasiswa;
console.log(nama);
console.log(umur);