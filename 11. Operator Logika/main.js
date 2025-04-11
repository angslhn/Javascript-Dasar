// Operator Logika

// Operator AND (&&)
console.log(true && true);  // true
console.log(true && false); // false

let age = 25;
if (age > 18 && age < 30) {
    console.log("Anda masih muda!");
}

// Operator OR (||)
console.log(true || false); // true
console.log(false || false); // false

let userRole = "admin";
if (userRole === "admin" || userRole === "moderator") {
    console.log("Akses diberikan!");
}

// Operator NOT (!)
console.log(!true);  // false
console.log(!false); // true

let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Silakan login dulu!");
}

// Kombinasi Operator Logika
let hasLicense = true;
if (age > 18 && hasLicense) {
    console.log("Anda boleh mengemudi.");
}

// Nullish Coalescing Operator (??)
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest