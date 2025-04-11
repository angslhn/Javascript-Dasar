// localStorage
// Menyimpan data jangka panjang, seperti tema pengguna, token autentikasi (dengan pertimbangan keamanan), atau preferensi pengguna.

// Menyimpan data ke localStorage
localStorage.setItem("nama", "John Doe");
localStorage.setItem("usia", "25");

// Mengambil data dari localStorage
console.log("Nama:", localStorage.getItem("nama"));
console.log("Usia:", localStorage.getItem("usia"));

// Menghapus item tertentu dari localStorage
localStorage.removeItem("nama");

// Menghapus semua data di localStorage
localStorage.clear();

// Mengecek apakah localStorage tersedia di browser
if (typeof Storage !== "undefined") {
    console.log("localStorage didukung");
} else {
    console.log("localStorage tidak didukung");
}