// High Order Function

// 1. map()
// Mengubah setiap elemen array berdasarkan fungsi yang diberikan.
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log("map():", squared); // [1, 4, 9, 16]

// 2. filter()
// Memfilter elemen dalam array berdasarkan kondisi tertentu.
const evens = numbers.filter(num => num % 2 === 0);
console.log("filter():", evens); // [2, 4]

// 3. reduce()
// Mengakumulasi nilai array menjadi satu nilai.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce():", sum); // 10

// 4. forEach()
// Menjalankan fungsi pada setiap elemen array.
numbers.forEach(num => console.log("forEach():", num * 2));

// 5. sort()
// Mengurutkan array berdasarkan fungsi perbandingan.
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("sort():", sortedNumbers); // [4, 3, 2, 1]

// 6. find()
// Mencari elemen pertama yang memenuhi kondisi.
const found = numbers.find(num => num > 2);
console.log("find():", found); // 3

// 7. some()
// Mengecek apakah minimal satu elemen memenuhi kondisi.
const hasEven = numbers.some(num => num % 2 === 0);
console.log("some():", hasEven); // true

// 8. every()
// Mengecek apakah semua elemen memenuhi kondisi.
const allEven = numbers.every(num => num % 2 === 0);
console.log("every():", allEven); // false

// 9. bind()
// Mengikat nilai 'this' ke dalam fungsi.
function greet() {
    console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
const sayHello = greet.bind(person);
sayHello(); // Hello, John

// 10. setTimeout() & setInterval() 
// Menjalankan fungsi setelah waktu tertentu.
setTimeout(() => console.log("setTimeout(): Hello after 2 seconds"), 2000);
setInterval(() => console.log("setInterval(): Hello every 2 seconds"), 2000);