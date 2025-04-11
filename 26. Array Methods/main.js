// Array Methods

// 1. Metode Bawaan Array:

//  push() 
//  Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.
  var arr = [1, 2, 3];
  arr.push(4);  // arr = [1, 2, 3, 4]

//  pop() 
//  Menghapus elemen terakhir dari array dan mengembalikannya.
  var arr = [1, 2, 3];
  var last = arr.pop();  // last = 3, arr = [1, 2]

//  shift() 
//  Menghapus elemen pertama dari array dan mengembalikannya.
  var arr = [1, 2, 3];
  var first = arr.shift();  // first = 1, arr = [2, 3]

//  unshift() 
//  Menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang array yang baru.
  var arr = [1, 2, 3];
  arr.unshift(0);  // arr = [0, 1, 2, 3]

//  concat() 
//  Menggabungkan dua atau lebih array dan mengembalikan array baru.
  var arr1 = [1, 2];
  var arr2 = [3, 4];
  var newArr = arr1.concat(arr2);  // newArr = [1, 2, 3, 4]

//  join() 
//  Menggabungkan semua elemen array menjadi satu string.
  var arr = [1, 2, 3];
  var result = arr.join('-');  // result = '1-2-3'

//  slice() 
//  Mengambil potongan dari array dan mengembalikannya sebagai array baru.
  var arr = [1, 2, 3, 4];
  var sliced = arr.slice(1, 3);  // sliced = [2, 3]

//  splice() 
//  Menambahkan atau menghapus elemen array pada posisi tertentu.
  var arr = [1, 2, 3, 4];
  arr.splice(1, 2, 'a', 'b');  // arr = [1, 'a', 'b', 4]

//  fill() 
//  Mengisi array dengan nilai yang diberikan dari indeks tertentu.
  var arr = [1, 2, 3];
  arr.fill(0, 1, 2);  // arr = [1, 0, 3]

// 2. Metode Sort:

//  sort() 
//  Mengurutkan elemen array. Secara default, metode ini mengurutkan berdasarkan urutan string.
  var arr = [3, 1, 2];
  arr.sort((a, b) => a - b);  // arr = [1, 2, 3]

//  reverse() 
//  Membalikkan urutan elemen array.
var arr = [1, 2, 3];
arr.reverse();  // arr = [3, 2, 1]

// 3. Metode Find:

//  find() 
//  Mencari dan mengembalikan elemen pertama yang memenuhi kondisi.
  var arr = [1, 2, 3, 4];
  var result = arr.find(x => x > 2);  // result = 3

//  findIndex() 
//  Mencari dan mengembalikan indeks elemen pertama yang memenuhi kondisi.
  var arr = [1, 2, 3, 4];
  var index = arr.findIndex(x => x > 2);  // index = 2

//  includes() 
//  Memeriksa apakah array mengandung elemen tertentu.
var arr = [1, 2, 3];
var result = arr.includes(2);  // result = true

//  indexOf() 
//  Mencari indeks pertama dari elemen yang diberikan.
var arr = [1, 2, 3];
var index = arr.indexOf(2);  // index = 1

//  lastIndexOf() 
//  Mencari indeks terakhir dari elemen yang diberikan.
var arr = [1, 2, 3, 2];
var index = arr.lastIndexOf(2);  // index = 3

// 4. Metode Iterasi:

//  forEach() 
//  Iterasi setiap elemen dalam array tanpa mengembalikan nilai.
  var arr = [1, 2, 3];
  arr.forEach(x => console.log(x));  // Output: 1, 2, 3

//  map() 
//  Iterasi dengan memodifikasi setiap elemen dan mengembalikannya sebagai array baru.
  var arr = [1, 2, 3];
  var doubled = arr.map(x => x * 2);  // doubled = [2, 4, 6]

//  filter() 
//  Mengambil elemen-elemen yang memenuhi kondisi dan mengembalikannya dalam array baru.
  var arr = [1, 2, 3, 4];
  var evenNumbers = arr.filter(x => x % 2 === 0);  // evenNumbers = [2, 4]

//  reduce() 
//  Mengurangi array menjadi satu nilai dengan fungsi agregat.
  var arr = [1, 2, 3];
  var sum = arr.reduce((acc, x) => acc + x, 0);  // sum = 6

//  some() 
//  Memeriksa apakah ada elemen yang memenuhi kondisi.
  var arr = [1, 2, 3];
  var hasEven = arr.some(x => x % 2 === 0);  // hasEven = true

//  every() 
//  Memeriksa apakah semua elemen memenuhi kondisi.
  var arr = [2, 4, 6];
  var allEven = arr.every(x => x % 2 === 0);  // allEven = true