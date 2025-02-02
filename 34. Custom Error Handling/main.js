// Custom error handling

class ErrorPerkalian extends Error {
    constructor(message) {
        super(message);
        this.name = "Error Pertambahan";
    }
}

function perkalian(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new ErrorPerkalian("Masukan angka yang valid!");
    } else {
        return a * b;
    }
}

try {
    let a = "Aku";
    let b = "Kamu";
    let hasil = perkalian(a, b);
    console.log(hasil);
} catch (error) {
    console.error(`${error.name} : ${error.message}`);  
}