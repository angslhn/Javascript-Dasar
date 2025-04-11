// Immediately Invoked Function Expression (IIFE)

// 1. Contoh Dasar IIFE
(function () {
    console.log("Hello from IIFE!");
})();

// 2. IIFE dengan Parameter
(function (name) {
    console.log("Hello, " + name + "!");
})("Alice");

// 3. IIFE dengan Arrow Function
(() => {
    console.log("IIFE dengan arrow function!");
})();

// 4. IIFE yang Mengembalikan Nilai
const result = (function (a, b) {
    return a + b;
})(5, 10);
console.log(result); // 15

// 5. IIFE dengan Scope Lokal
(function () {
    let localVar = "Ini variabel lokal dalam IIFE";
    console.log(localVar);
})();
// console.log(localVar); // Error: localVar is not defined

// 6. Menggunakan IIFE untuk Module Pattern
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            return count;
        }
    };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1