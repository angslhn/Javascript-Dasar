// Maps
// Map adalah struktur data dalam JavaScript yang digunakan untuk menyimpan pasangan key-value, key dapat berupa tipe data apapun.

// Membuat Map
const userPeople = new Map([
    ["name", "John"],
    ["age", 30],
    ["job", "Developer"]
]);

// Menambahkan elemen ke dalam Map
userPeople.set("city", "New York");
console.log(userPeople);

// Mengambil nilai berdasarkan key
console.log(userPeople.get("name"));

// Mengecek apakah key ada dalam Map
console.log(userPeople.has("age"));

// Menghapus elemen berdasarkan key
userPeople.delete("job");
console.log(userPeople);

// Mendapatkan jumlah elemen dalam Map
console.log(userPeople.size);

// Iterasi menggunakan forEach
userPeople.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Iterasi menggunakan for...of
for (let [key, value] of userPeople) {
    console.log(`${key}: ${value}`);
}

// Konversi Map ke Array
const arrayFromMap = [...myMap];
console.log(arrayFromMap);

// Konversi Map ke Object
const mapToObject = Object.fromEntries(myMap);
console.log(mapToObject);