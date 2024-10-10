// Filter 
// Membuat array baru yang berisi elemen-elemen dari array asli yang memenuhi kondisi tertentu

const umur = [16, 23, 12, 32, 14, 17, 18, 19, 40, 43, 76, 34, 53];

let umurBoleh = umur.filter(boleh);
let umurTidakBoleh = umur.filter(tidakBoleh);

function boleh(umur) {
    return umur >= 18;
};

function tidakBoleh(umur) {
    return umur <= 18;
};

console.log(umurBoleh);
console.log(umurTidakBoleh);