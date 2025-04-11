let paragraf = document.getElementById("paragraf");
let hasil = document.getElementById("hasil");

// 1. Menambahkan atribut baru "data-info"
document.getElementById("tambahAtribut").addEventListener("click", function() {
    paragraf.setAttribute("data-info", "Paragraf ini memiliki atribut baru.");
    hasil.innerText = "Atribut baru 'data-info' telah ditambahkan!";
});

// 2. Mengubah isi value dari atribut "data-info"
document.getElementById("ubahAtribut").addEventListener("click", function() {
    if (paragraf.hasAttribute("data-info")) {
        paragraf.setAttribute("data-info", "Isi atribut telah diubah!");
        hasil.innerText = "Isi atribut 'data-info' telah diubah!";
    } else {
        hasil.innerText = "Atribut belum ada! Tambahkan dulu.";
    }
});

// 3. Mengecek apakah atribut "data-info" ada
document.getElementById("cekAtribut").addEventListener("click", function() {
    if (paragraf.hasAttribute("data-info")) {
        hasil.innerText = "Atribut 'data-info' ada dengan nilai: " + paragraf.getAttribute("data-info");
    } else {
        hasil.innerText = "Atribut 'data-info' belum ditambahkan.";
    }
});