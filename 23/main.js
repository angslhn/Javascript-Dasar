// forEach
// Menjalankan fungsi untuk setiap elemen tetapi tidak mengembalikan nilai.
// element, index, array 

let nama = ["aang solihin", "asep supratman", "ujang supardi", "dadan hidayat"];

nama.forEach(hurufBesar);
nama.forEach(tampilkanNama);

function hurufBesar(element, index, array){
    array[index] = element.toUpperCase();
}

function tampilkanNama(element){
    console.log(element);
}