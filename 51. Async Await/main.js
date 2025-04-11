// Async Await

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

async function getInfo(product) {
    try {
        const response = await checkStock(product);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}