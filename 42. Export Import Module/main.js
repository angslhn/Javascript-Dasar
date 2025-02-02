// Named import module
import { tambah } from "bagi.js";
console.log(tambah(10, 12));

// Default import module
import kurang from 'kali.js';
console.log(kurang(10, 5));

// Mengganti nama module hasil import dengan nama lain.
import { bagi as pembagian } from "./bagi.js";
console.log(pembagian(10, 12));

// Dynamic import module
document.getElementById('kali').addEventListener('click', async () => {
    const kali = await import ('./kali.js');
    console.log(kali.kali(10, 4));
});