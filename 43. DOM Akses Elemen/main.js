// 1. Mengakses elemen berdasarkan ID
let judul = document.getElementById("judul");
console.log("Elemen dengan ID 'judul':", judul.innerText);

// 2. Mengakses elemen berdasarkan class (HTMLCollection)
let deskripsi = document.getElementsByClassName("deskripsi");
console.log("Elemen dengan class 'deskripsi':", deskripsi[0].innerText, deskripsi[1].innerText);

// 3. Mengakses elemen berdasarkan tag name (HTMLCollection)
let paragraf = document.getElementsByTagName("p");
console.log("Semua paragraf:", paragraf);

// 4. Menggunakan querySelector (mengambil elemen pertama yang cocok)
let pertama = document.querySelector(".deskripsi");
console.log("querySelector pertama:", pertama.innerText);

// 5. Menggunakan querySelectorAll (mengambil semua elemen yang cocok, NodeList)
let semuaItem = document.querySelectorAll(".item");
semuaItem.forEach((item, index) => {
    console.log(`Item ${index + 1}:`, item.innerText);
});

// 6. Event untuk mengubah warna teks saat tombol diklik
document.getElementById("ubahWarna").addEventListener("click", function() {
    judul.classList.toggle("highlight"); // Menambah/menghapus class CSS
});