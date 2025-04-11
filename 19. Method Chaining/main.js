// Method chaining

let namaLengkap = prompt("Masukan Nama");

let namaDepan = namaLengkap.slice(0, namaLengkap.indexOf(" "))
                .charAt(0).toUpperCase()
                .concat(namaLengkap.slice(1, namaLengkap.indexOf(" ")).toLowerCase()); 
let namaBelakang = namaLengkap.slice(namaLengkap.indexOf(" ") + 1)
                .charAt(0).toUpperCase()
                .concat(namaLengkap.slice(namaLengkap.indexOf(" ") + 2).toLowerCase());

namaLengkap = namaDepan + " " + namaBelakang;

console.log(namaLengkap);
