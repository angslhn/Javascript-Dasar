// Break dan Continue

// Break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Berhenti jika iterasi sampai angka 3
    }
    console.log(i);
}

// Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Lewati angka 3, lanjut ke iterasi berikutnya
    }
    console.log(i);
}