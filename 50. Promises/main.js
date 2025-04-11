// Promises

function checkStock(product) {
    return new Promise((resolve, reject) => {
        console.log(`Cek produk ${product}...`)

        setTimeout(() => {
            const stockAvailable =  true;

            if(stockAvailable) {
                resolve(`Stok dari produk ${product} masih tersedia!`);
            } else {
                reject(`Maaf stok dari produk ${product} sudah habis!`);
            }
        }, 2000);
    });
}

checkStock("Tas")
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.error(message);
});