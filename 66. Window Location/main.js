// Mengakses objek window.location
console.log("URL Saat Ini:", window.location.href);
console.log("Hostname:", window.location.hostname);
console.log("Pathname:", window.location.pathname);
console.log("Query String:", window.location.search);
console.log("Protocol:", window.location.protocol);
console.log("Port:", window.location.port);

// Redirect ke halaman lain
window.location.href = "https://google.com";

// Memuat ulang halaman
window.location.reload();

// Mengganti URL tanpa memuat ulang
window.location.replace("https://example.com");