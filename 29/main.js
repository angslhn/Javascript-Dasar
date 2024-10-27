// Recursive function
// Function yang dapat memanggil dirinya sendiri.

function recursive(nilai) {
    if (nilai === 0) {
        return 1
    }

    return nilai * recursive(nilai - 1);
}

hasil = recursive(5);
console.log(hasil);