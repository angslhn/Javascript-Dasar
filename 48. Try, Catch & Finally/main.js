// Try, Catch, & Finally

function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan");
        }
        console.log("Hasil:", a / b);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    } finally {
        console.log("Operasi selesai.");
    }
}

bagi(10, 2); // Output: Hasil: 5  → Operasi selesai.
bagi(10, 0); // Output: Terjadi kesalahan: Pembagian dengan nol tidak diperbolehkan  → Operasi selesai.