// sessionStorage
// Menyimpan data sementara, seperti data form yang diisi user saat berpindah halaman, atau status sementara dalam satu sesi browsing.

// Menyimpan data ke sessionStorage
sessionStorage.setItem("nama", "John Doe");
sessionStorage.setItem("usia", "25");

// Mengambil data dari sessionStorage
console.log("Nama:", sessionStorage.getItem("nama"));
console.log("Usia:", sessionStorage.getItem("usia"));

// Menghapus item tertentu dari sessionStorage
sessionStorage.removeItem("nama");

// Menghapus semua data di sessionStorage
sessionStorage.clear();

// Mengecek apakah sessionStorage tersedia di browser
if (typeof Storage !== "undefined") {
    console.log("sessionStorage didukung");
} else {
    console.log("sessionStorage tidak didukung");
}