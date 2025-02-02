// Error handling

function pertambahan(a, b) {
    if (isNaN(a && b)) {
        throw new Error("Tolong masukan angka yang valid!");
    }
    return a + b;
}

try {
    let hasil = pertambahan(10, b);
    console.log(hasil);
} catch(error) {
    console.error(`Error : ${error.message}`);  
}