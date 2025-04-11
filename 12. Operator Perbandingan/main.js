// Operator Perbandingan

// 1. Operator Sama Dengan (==) dan Tidak Sama Dengan (!=)
console.log(5 == '5');  // true (karena hanya membandingkan nilai, bukan tipe)
console.log(5 != '5');  // false

// 2. Operator Identik (===) dan Tidak Identik (!==)
console.log(5 === '5'); // false (karena tipe berbeda)
console.log(5 !== '5'); // true

// 3. Operator Lebih Besar dan Lebih Kecil
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false

// 4. Membandingkan String (Berdasarkan Urutan Alfabet ASCII)
console.log('apple' > 'banana'); // false (karena 'a' memiliki kode ASCII lebih kecil dari 'b')
console.log('cat' < 'dog'); // true

// 5. Perbandingan dengan Null dan Undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null > 0);  // false
console.log(null >= 0); // true (karena konversi ke angka pada operator >=)
console.log(undefined > 0); // false
console.log(undefined < 0); // false