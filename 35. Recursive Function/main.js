// Recursive function
// Function yang dapat memanggil dirinya sendiri.

function recursive(n) {
    if (n === 0) return 1

    return n * recursive(n - 1)
}

console.log(recursive(5));