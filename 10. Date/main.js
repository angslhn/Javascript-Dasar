// Date

// new Date()
// new Date(string tanggal)

// new Date(tahun, bulan)
// new Date(tahun, bulan, tanggal)
// new Date(tahun, bulan, tanggal, jam)
// new Date(tahun, bulan, tanggal, jam, menit)
// new Date(tahun, bulan, tanggal, jam, menit, detik)
// new Date(tahun, bulan, tanggal, jam, menit, detik, milidetik)

// new Date(milidetik)

// 1. Membuat Objek Date 

// Membuat Objek Date
let currentDate = new Date();
console.log(currentDate);  // Contoh output: Wed Apr 02 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// Membuat Objek Date dengan Tanggal Tertentu
let specificDate = new Date(2025, 3, 2, 10, 30, 0);  // April 2, 2025, 10:30:00
console.log(specificDate);  // Output: Thu Apr 02 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// Membuat Objek Date dengan String
let dateFromString = new Date("2025-04-02T10:30:00");
console.log(dateFromString);  // Output: Thu Apr 02 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// 2. Menampilkan Objek Date
// JavaScript secara bawaan akan menampilkan tanggal menggunakan metode toString(). Ini adalah representasi string dari tanggal, termasuk zona waktu.

// Saat menampilkan objek tanggal dalam HTML, objek tersebut secara otomatis diubah menjadi string, dengan metode toString().
var date = new Date();
date.toString();

// Metode toTimeString() mengubah tanggal ke format standar waktu:
var date = new Date();
date.toTimeString();

// Metode toDateString() mengubah tanggal menjadi format yang lebih mudah dibaca:
var date = new Date();
date.toDateString();

// Metode toUTCString() mengubah tanggal menjadi string menggunakan standar UTC:
var date = new Date();
date.toUTCString();

// Metode toISOString() mengonversi tanggal menjadi string menggunakan standar ISO:
var date = new Date();
date.toISOString();

// 3. Input Tanggal JavaScript
// Umumnya ada 3 jenis format input tanggal JavaScript:

// Tanggal ISO          "2015-03-25" (Standar Internasional)
// Tanggal Pendek       "03/25/2015"
// Tanggal Panjang      "25 Mar 2015" atau "25 Mar 2015"

let dateInput = new Date("2015-03-25")
console.log(dateInput)

// 4. Mengakses Tanggal dan Waktu

// Anda bisa mengakses berbagai bagian dari objek Date menggunakan metode-metode yang tersedia:
// a. Mengambil Tahun, Bulan, Hari, dll.

//     getFullYear(): Mengambil tahun (4 digit).
//     getMonth(): Mengambil bulan (0–11).
//     getDate(): Mengambil hari bulan (1–31).
//     getDay(): Mengambil hari dalam minggu (0–6; 0 = Minggu, 6 = Sabtu).
//     getHours(): Mengambil jam (0–23).
//     getMinutes(): Mengambil menit (0–59).
//     getSeconds(): Mengambil detik (0–59).
//     getMilliseconds(): Mengambil milidetik (0–999).

let date = new Date();
console.log(date.getFullYear());  // Tahun (misalnya 2025)
console.log(date.getMonth());     // Bulan (0–11, misalnya 3 untuk April)
console.log(date.getDate());      // Hari dalam bulan (1–31)
console.log(date.getDay());       // Hari dalam minggu (0–6, misalnya 3 untuk Rabu)

// b. Mengambil Waktu dalam Format UTC

// Metode getUTC*() digunakan untuk mendapatkan tanggal dan waktu dalam UTC (Coordinated Universal Time):
//     getUTCFullYear()
//     getUTCMonth()
//     getUTCDate()
//     getUTCDay()
//     getUTCHours()
//     getUTCMinutes()
//     getUTCSeconds()
//     getUTCMilliseconds()

// 5. Mengubah Tanggal dan Waktu
// Untuk mengubah tanggal dan waktu, Anda dapat menggunakan metode setter seperti:

//     setFullYear(year)
//     setMonth(month)
//     setDate(day)
//     setHours(hours)
//     setMinutes(minutes)
//     setSeconds(seconds)
//     setMilliseconds(milliseconds)

let date = new Date();

date.setFullYear(2026);  // Mengubah tahun menjadi 2026
date.setMonth(5);        // Mengubah bulan menjadi Juni (bulan dimulai dari 0)
console.log(date);

// 6. Menghitung Selisih Waktu
// Untuk bisa menghitung selisih antara dua objek Date menggunakan operator pengurangan. Hasilnya adalah selisih dalam milidetik.

let date1 = new Date();
let date2 = new Date(2025, 3, 2);  // April 2, 2025
let timeDifference = date1 - date2;
console.log(timeDifference);  // Output dalam milidetik

// 7. Menentukan Locale
// Untuk bisa menentukan format tanggal sesuai dengan lokal tertentu.

let date = new Date();
console.log(date.toLocaleString("id-ID"));  // Output: "2/4/2025 10.30.00" (Format Indonesia)
console.log(date.toLocaleString("en-US"));  // Output: "4/2/2025, 10:30:00 AM" (Format Amerika Serikat)
console.log(date.toLocaleString("fr-FR"));  // Output: "2/4/2025, 10:30:00" (Format Prancis)

// 8. Menyesuaikan Zona Waktu
// Untuk juga bisa menentukan zona waktu menggunakan opsi timeZone.

let date = new Date();
console.log(date.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }));  // Output: "2/4/2025, 10:30:00"
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));  // Output: "4/1/2025, 10:30:00"

// 3. Menggunakan Opsi Format
// Untuk dapat mengontrol format tanggal dan waktu menggunakan parameter objek.

// weekday	        "long" (Rabu), "short" (Rab), "narrow" (R)
// year	            "numeric" (2025), "2-digit" (25)
// month	        "long" (April), "short" (Apr), "numeric" (4)
// day	            "numeric" (2), "2-digit" (02)
// hour	            "numeric" atau "2-digit"
// minute	        "numeric" atau "2-digit"
// second	        "numeric" atau "2-digit"
// timeZoneName	    "short" (GMT), "long" (Greenwich Mean Time)

let date = new Date();

console.log(date.toLocaleString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));  // Output: "Rabu, 2 April 2025"
console.log(date.toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));  // Output: "Wednesday, April 2, 2025"