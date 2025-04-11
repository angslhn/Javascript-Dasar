// Fetch

// fetch() adalah API JavaScript untuk mengambil sumber daya dari jaringan (misalnya, mengambil data dari API). API ini menggantikan XMLHttpRequest karena lebih sederhana dan berbasis Promise.

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// url       Alamat dari sumber daya (API, file JSON, dll.).
// options   Objek opsional untuk konfigurasi request (method, headers, body, dll.).

// Properti fetch()

// 1. Headers
// Digunakan untuk menentukan header HTTP, seperti Content-Type, Authorization, dll.

fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN",
  }
});

// Beberapa Header Umum:
// Header	        Keterangan
// Content-Type	    Menentukan tipe data dalam body
// Authorization	Digunakan untuk autentikasi API
// Accept	        Menentukan format data yang diinginkan (application/json, text/html)
// User-Agent	    Identifikasi browser / aplikasi pengirim
// Cache-Control	Mengontrol caching (misalnya: no-cache, max-age=3600)

// 2. Method
// Menentukan jenis permintaan HTTP (GET, POST, PUT, DELETE, dll.).

fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "John", age: 30 })
});

// Method	Keterangan
// GET	    Mengambil data (tanpa body)
// POST	    Mengirim data baru
// PUT	    Memperbarui data yang ada
// DELETE	Menghapus data

// 3. Body
// Digunakan untuk mengirim data dalam permintaan seperti POST atau PUT. Harus dikonversi ke string jika menggunakan JSON.

fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "user123", password: "pass123" })
});

// Format body yang bisa digunakan:
// Format	            Keterangan
// JSON	                Menggunakan JSON.stringify(obj)
// FormData	            Untuk mengirimkan form (multipart/form-data)
// URLSearchParams	    Data dalam format application/x-www-form-urlencoded
// Blob / ArrayBuffer	Untuk mengirimkan file atau binary data

// 4. Mode, Credentials, dan Redirect

// Properti	    Keterangan
// mode	        Mengontrol mode permintaan (cors, no-cors, same-origin)
// credentials	Mengontrol kredensial (misalnya, cookies) (omit, same-origin, include)
// redirect	    Menentukan tindakan saat ada redirect (follow, error, manual)

// Contoh dengan credentials:

fetch("https://api.example.com/data", {
  credentials: "include" // Mengirimkan cookies
});

// 5. Handling Response
// Setelah fetch(), bisa mengelola response dengan .then().

fetch("https://api.example.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));

// Properti dari Response:
// Properti	    Keterangan
// ok	          true jika status HTTP 200-299
// status	      Kode status HTTP (misalnya 404, 500)
// statusText	  Deskripsi status HTTP
// json()	      Mengonversi response ke JSON
// text()	      Mengonversi response ke teks
// blob()	      Mengonversi response ke file blob