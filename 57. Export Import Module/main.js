// Named Import Module
import { tambah } from "./matematika/tambah.js";
console.log(tambah(10, 12));

// Default Import Module
import kurang from './matematika/kurang.js';
console.log(kurang(10, 5));

import kali from "./matematika/kali.js";
console.log(kali(10, 12));

// Mengganti nama module import dengan nama lain.
import { bagi as pembagian } from "./matematika/bagi.js";
console.log(pembagian(10, 12));

// Dynamic import module
document.getElementById('kali').addEventListener('click', async () => {
    const kali = await import('./matematika/kali.js');
    console.log(kali.default(9, 8));
});