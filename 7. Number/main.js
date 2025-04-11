// Number

// 1. Tipe Data Number
// JavaScript hanya memiliki satu tipe data Number untuk bilangan bulat dan desimal.
// Bisa ditulis dalam bentuk bilangan bulat (integer), desimal (floating-point), atau notasi ilmiah (exponential notation).

var x = 42; // Bulat (Integer)
var y = 3.14; // Decimal (Floating-point)
var z = 1.5e3; // 1500 (Scientific Notation)

// 2. Bilangan Bulat Presisi
// Jumlah desimal maksimum adalah 17.
// Bilangan bulat (angka tanpa tanda titik atau eksponen) akurat hingga 15 digit.
var x = 999999999999999; // x akan menjadi 999999999999999
var y = 9999999999999999; // y akan menjadi 10000000000000000

// 3. Bilangan Float Presisi
// Aritmatika floating point tidak selalu 100% akurat
var x = 0.2 + 0.1;

// Untuk menyelesaikan soal di atas, ada baiknya untuk mengalikan dan membagi
var x = (0.2 * 10 + 0.1 * 10) / 10;

// 4. Number Properties
// Number.MAX_VALUE             Nilai terbesar yang bisa disimpan.
// Number.MIN_VALUE             Nilai terkecil yang bisa disimpan.
// Number.POSITIVE_INFINITY     Nilai tak terhingga positif.
// Number.NEGATIVE_INFINITY     Nilai tak terhingga negatif.

console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
console.log(Number.POSITIVE_INFINITY); // Infinity

// 5. Konversi Number
// toString()       Mengubah angka menjadi string
// toFixed(n)       Mengatur jumlah angka di belakang koma
// toPrecision(n)   Mengatur jumlah digit angka keseluruhan
// valueOf()        Mengembalikan nilai primitif dari Number

let numberInteger = 255;
let numberDecimal = 123.456;
console.log(numberInteger.toString());     // "123.456"   (String)
console.log(numberInteger.toString(2));    // "11111111"  (Biner)
console.log(numberInteger.toString(8));    // "377"       (Oktal)
console.log(numberInteger.toString(16));   // "ff"        (Heksadesimal)
console.log(numberInteger.toString(32));   // "7v"        (Base 32)
console.log(numberInteger.toString(36));   // "73"        (Base 36)
console.log(numberDecimal.toFixed(2));     // "123.46"    2 angka dibelakang koma
console.log(numberDecimal.toPrecision(4)); // "123.5"     Menampilkan 4 angka saja

// 6. Validasi dan Konversi
// Number.isInteger(x)	Mengecek apakah x bilangan bulat
// Number.isNaN(x)	    Mengecek apakah x adalah NaN
// Number.isFinite(x)	Mengecek apakah x angka terbatas
// parseInt(x)	        Mengonversi string ke bilangan integer (bulat)
// parseFloat(x)	    Mengonversi string ke bilangan float (desimal)

console.log(Number.isInteger(10));   // true
console.log(parseInt("100"));        // 100
console.log(parseFloat("3.14"));     // 3.14

// 7. Format Currency
const balance = 10000000000
const formatCurrency = balance.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })

console.log(formatCurrency)