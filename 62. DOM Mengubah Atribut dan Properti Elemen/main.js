// 1. Mengubah atribut src pada elemen <img>
document.getElementById("ubahSrc").addEventListener("click", function() {
    let gambar = document.getElementById("gambar");
    gambar.src = "https://via.placeholder.com/200"; // Mengubah URL gambar
});

// 2. Mengubah atribut alt pada elemen <img>
document.getElementById("ubahAlt").addEventListener("click", function() {
    let gambar = document.getElementById("gambar");
    gambar.alt = "Gambar telah diubah!";
    alert("Atribut 'alt' telah diubah menjadi: " + gambar.alt);
});

// 3. Mengubah properti 'disabled' pada input
document.getElementById("toggleDisabled").addEventListener("click", function() {
    let inputField = document.getElementById("inputField");
    inputField.disabled = !inputField.disabled; // Toggle antara enable/disable
});