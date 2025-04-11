// Operator Penugasan

// Operator penugasan menetapkan nilai ke variabel JavaScript.
// Operator    Contoh      Sama seperti
// =           x = y       x = y
// +=          x += y      x = x +y
// -=          x -= y      x = x -y
// *=          x *= y      x = x *y
// /=          x /= y      x = x /y
// %=          x %= y      x = x %y
// ** =        x **= y     x = x ** y

// Operator penugasan shift
// Operator    Contoh      Sama seperti
// <<=         x <<= y     x = x << y
// >>=         x >>= y     x = x >> y
// >>>=        x >>>= y    x = x >>> y

// Operator penugasan bitwise
// Operator    Contoh      Sama seperti
// &= 	       x &= y 	   x = x & y
// ^= 	       x ^= y 	   x = x ^ y
// |= 	       x |= y 	   x = x | y

// Operator penugasan logika
// Operator    Contoh      Sama seperti
// &&= 	       x &&= y 	   x = x && (x = y)
// ||= 	       x ||= y 	   x = x || (x = y)
// ??= 	       x ??= y 	   x = x ?? (x = y)

// 1. Operator Penugasan Sederhana menetapkan nilai ke variabel.
var x = 10;
var x = 10 + y;

// 2. Operator Penugasan Penjumlahan menambahkan nilai ke variabel.
var x = 10;
x += 5;

// 3. Operator Penugasan Pengurangan mengurangi nilai dari variabel.
var x = 10;
x -= 5;

// 4. Operator Penugasan Perkalian mengalikan variabel.
var x = 10;
x *= 5;

// 5. Operator Penugasan Eksponen menaikkan variabel ke pangkat operan.
var x = 10;
x **= 5;

// 6. Operator Penugasan Pembagian membagi variabel.
var x = 10;
x /= 5;

// 7. Operator Penetapan Sisa menetapkan sisa ke variabel.
var x = 10;
x %= 5;

// 8. Operator Penetapan Geser Kiri menggeser variabel ke kiri.
var x = -100;
x <<= 5;

// 9. Operator Penetapan Geser Kanan menggeser variabel ke kanan (bertanda).
var x = -100;
x >>= 5;

// 10. Operator Penetapan Geser Kanan Tak Bertanda menggeser variabel ke kanan (tak bertanda).
var x = -100;
x >>>= 5;

// 11. Operator Penetapan Bitwise AND melakukan operasi bitwise AND pada dua operan dan menetapkan hasilnya ke variabel.
var x = 10;
x &= 5;

// 12. Operator Penugasan Bitwise OR melakukan operasi bitwise OR pada dua operan dan menugaskan hasilnya ke variabel.
var x = 10;
x |= 5;

// 13. Operator Penugasan Bitwise XOR melakukan operasi bitwise XOR pada dua operan dan menugaskan hasilnya ke variabel.
var x = 10;
x ^= 5;

// 14. Operator penugasan Logika AND digunakan antara dua nilai.
//     Jika nilai pertama benar, nilai kedua ditetapkan.
var x = 10;
x &&= 5;

// 15. Operator penugasan Logika OR digunakan antara dua nilai.
//     Jika nilai pertama salah, nilai kedua ditetapkan.
var x = 10;
x ||= 5;

// 16. Operator penugasan penggabungan Nullish digunakan antara dua nilai. 
//     Jika nilai pertama tidak terdefinisi atau null, nilai kedua ditetapkan.
var x;
x ??= 5