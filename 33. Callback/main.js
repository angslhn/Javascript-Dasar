// Callback
// Memanggil fungsi lain setelah dibuat.

function double (array, operasi) {
    let result = [];
    for (let toResult of array) {
        result.push(operasi(toResult));
    }
    return result;
}

function kali(a) {
    return a * 2
} 

let array = new Array(1, 2, 3, 4, 5);
let result = double(array, kali);

for (value of result) {
    console.log(value);
}