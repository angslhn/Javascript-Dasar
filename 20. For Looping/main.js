// For
for(let no = 1; no <= 10; no++) {
    console.log(`No. ${no}`);
};

// For In
// Disarankan hanya untuk object yang akan menghasilkan key.
const person = { name: "Budi", age: 30, city: "Surabaya" };

for (let key in person) {
    console.log(key + ":", person[key]);
}

// For Of
// untuk mengiterasi indeks dalam array atau mengiterasi properti dalam objek.
const fruits = ["apel", "pisang", "ceri"];

for (let fruit of fruits) {
    console.log(fruit);
}