// Membuat objek URL baru
const myUrl = new URL("https://example.com/page?name=John&age=30");

console.log("Hostname:", myUrl.hostname);  // "example.com"
console.log("Pathname:", myUrl.pathname);  // "/page"
console.log("Search Query:", myUrl.search);  // "?name=John&age=30"
console.log("Nama:", myUrl.searchParams.get("name"));  // "John"
console.log("Usia:", myUrl.searchParams.get("age"));   // "30"

// Menambahkan dan menghapus parameter query
myUrl.searchParams.append("city", "New York");
console.log("Setelah Menambah City:", myUrl.toString());

myUrl.searchParams.delete("age");
console.log("Setelah Menghapus Age:", myUrl.toString());

// Menggunakan URLSearchParams untuk query string
const params = new URLSearchParams("?name=John&age=30");
console.log("Nama dari Query Params:", params.get("name"));
console.log("Usia dari Query Params:", params.get("age"));

// Menambah parameter query
params.append("city", "New York");
console.log("Query setelah ditambah city:", params.toString());

// Mengakses objek window.location
console.log("URL Saat Ini:", window.location.href);
console.log("Hostname:", window.location.hostname);
console.log("Pathname:", window.location.pathname);
console.log("Query String:", window.location.search);
console.log("Protocol:", window.location.protocol);
console.log("Port:", window.location.port);

// Redirect ke halaman lain
// window.location.href = "https://google.com";

// Memuat ulang halaman
// window.location.reload();

// Mengganti URL tanpa memuat ulang
// window.location.replace("https://example.com");