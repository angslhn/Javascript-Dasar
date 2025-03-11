// Mengakses objek window.history
console.log("Panjang Riwayat Browser:", window.history.length);

// Kembali ke halaman sebelumnya
window.history.back();

// Maju ke halaman berikutnya
window.history.forward();

// Melompat ke halaman tertentu dalam riwayat
window.history.go(-2); // Mundur 2 halaman
window.history.go(2);  // Maju 2 halaman

// Mengganti entri dalam riwayat tanpa memuat ulang
window.history.pushState(state, title, url);
window.history.replaceState(state, title, url);