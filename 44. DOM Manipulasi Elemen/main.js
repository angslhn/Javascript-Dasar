// 1. Mengubah teks elemen
document.getElementById("ubahTeks").addEventListener("click", function() {
    let paragraf = document.getElementById("paragraf");
    paragraf.innerText = "Teks sudah diubah!";
});

// 2. Mengubah warna teks
document.getElementById("ubahWarna").addEventListener("click", function() {
    let paragraf = document.getElementById("paragraf");
    paragraf.style.color = "red";
});

// 3. Menambah dan menghapus class pada elemen
document.getElementById("tambahHapusClass").addEventListener("click", function() {
    let paragraf = document.getElementById("paragraf");
    paragraf.classList.toggle("highlight");
});

// 4. Menambah class pada elemen
document.getElementById("tambahClass").addEventListener("click", function() {
    let paragraf = document.getElementById("paragraf");
    paragraf.classList.add("highlight");
});

// 5. Menghapus class dari elemen
document.getElementById("hapusClass").addEventListener("click", function() {
    let paragraf = document.getElementById("paragraf");
    paragraf.classList.remove("highlight");
});