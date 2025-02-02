let daftar = document.getElementById("daftar");

// 1. Menambahkan elemen baru ke daftar
document.getElementById("tambahItem").addEventListener("click", function() {
    let itemBaru = document.createElement("li"); // Buat elemen <li>
    itemBaru.innerText = "Item Baru"; // Isi teks elemen
    daftar.appendChild(itemBaru); // Tambahkan ke dalam <ul>
});

// 2. Menghapus elemen terakhir dari daftar
document.getElementById("hapusItem").addEventListener("click", function() {
    if (daftar.children.length > 0) {
        daftar.removeChild(daftar.lastElementChild); // Hapus elemen terakhir
    } else {
        alert("Tidak ada item yang bisa dihapus!");
    }
});