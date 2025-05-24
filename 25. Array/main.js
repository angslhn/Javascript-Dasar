// Array

const users = ["Aang Solihin", "Maman Hidayat", "Deden Sukandi"]
const semuaAngka = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const semuaBuah = ["Apel", "Jeruk", "Mangga", "Pepaya", "Pisang", "Anggur"];

for (let angka of semuaAngka) {
  console.log(angka);
}

for (let buah of semuaBuah) {
  console.log(buah)
}

// Menyalin Array lain

const customers = Array.from(users)
console.log(customers)

// Array Destructuring

const Auth = ["customer", true]

const [role, isLogin] = Auth

const infoAuth = `Pengguna ${isLogin ? "telah login" : "belum login"}`
const infoRole = "Role pengguna adalah" + " " + role

console.log(infoAuth)
console.log(infoRole)