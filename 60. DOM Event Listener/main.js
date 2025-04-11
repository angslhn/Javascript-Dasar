// Event Listener

// Mouse Events
//  click → Dipicu saat elemen diklik.
//  dblclick → Dipicu saat elemen diklik dua kali.
//  mousedown → Dipicu saat tombol mouse ditekan.
//  mouseup → Dipicu saat tombol mouse dilepas.
//  mousemove → Dipicu saat kursor mouse bergerak di atas elemen.
//  mouseenter / mouseleave → Dipicu saat mouse masuk atau keluar dari elemen tanpa mempengaruhi elemen anak (child elements).
//  mouseover / mouseout → Sama seperti mouseenter dan mouseleave, tetapi juga berlaku jika berpindah ke elemen anak.

// Keyboard Events
//  keydown → Dipicu saat tombol ditekan.
//  keypress → Mirip dengan keydown, tetapi keypress sudah deprecated.
//  keyup → Dipicu saat tombol dilepas.

// Form Events
//  submit → Dipicu saat form dikirim.
//  input → Dipicu saat ada perubahan pada input (misalnya saat mengetik di input atau textarea).
//  change → Dipicu saat nilai input berubah (terutama untuk select, checkbox, atau radio).
//  focus / blur → Dipicu saat elemen mendapatkan atau kehilangan fokus.

// Window Events
//  load → Dipicu saat halaman selesai dimuat.
//  resize → Dipicu saat ukuran jendela browser berubah.
//  scroll → Dipicu saat halaman digulir (scroll).
//  beforeunload → Dipicu sebelum pengguna meninggalkan halaman.

// Clipboard Events
//  copy → Dipicu saat teks disalin.
//  cut → Dipicu saat teks dipotong.
//  paste → Dipicu saat teks ditempel.

// Media Events (Event Media)
//  play → Dipicu saat video/audio mulai diputar.
//  pause → Dipicu saat video/audio dijeda.
//  ended → Dipicu saat video/audio selesai diputar.

// Drag and Drop Events (Event Seret dan Lepas)
//  dragstart → Dipicu saat elemen mulai diseret.
//  dragover → Dipicu saat elemen diseret di atas area yang bisa menerima elemen tersebut.
//  drop → Dipicu saat elemen dilepaskan ke area yang bisa menerima elemen.

// 1. Event klik (click)
document.getElementById("klikSaya").addEventListener("click", function() {
    document.getElementById("pesan").innerText = "Tombol Klik Saya ditekan!";
});

// 2. Event double klik (dblclick)
document.getElementById("doubleKlik").addEventListener("dblclick", function() {
    document.getElementById("pesan").innerText = "Tombol Double Klik ditekan!";
});

// 3. Event hover (mouseover & mouseout)
let hoverBtn = document.getElementById("hoverSaya");
hoverBtn.addEventListener("mouseover", function() {
    hoverBtn.classList.add("highlight");
    document.getElementById("pesan").innerText = "Mouse sedang di atas tombol!";
});
hoverBtn.addEventListener("mouseout", function() {
    hoverBtn.classList.remove("highlight");
    document.getElementById("pesan").innerText = "Mouse keluar dari tombol!";
});

// 4. Event input (input & change)
let inputField = document.getElementById("inputText");
let hasilInput = document.getElementById("hasilInput");

inputField.addEventListener("input", function() {
    hasilInput.innerText = "Kamu mengetik: " + inputField.value;
});