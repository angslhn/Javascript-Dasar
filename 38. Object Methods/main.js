// Object Methods

const person = {
    nama: "Alice",
    umur: 25,
    kota: "New York",
    greet: function () {
        console.log("Hallo, nama saya adalah " + this.nama);
    }
};

// 1. Mengakses Properti Object
console.log(person.name);  // Alice
console.log(person["age"]); // 25

// 2. Menambah dan Menghapus Properti
person.job = "Engineer";
delete person.city;

console.log(person);

// 3. Iterasi Properti dalam Object
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 4. Object.assign() untuk Menggabungkan Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);

// 5. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // ["name", "age", "job", "greet"]
console.log(Object.values(person)); // ["Alice", 25, "Engineer", function]
console.log(Object.entries(person)); // Array pasangan key-value

// 6. Destructuring Object
const { name, age } = person;

console.log(name, age);

// 7. Spread Operator untuk Object
const newPerson = { ...person, country: "USA" };

console.log(newPerson);

// 8. Menggunakan Method dalam Object
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return b !== 0 ? a / b : "Cannot divide by zero";
    }
};

console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 2)); // 5

// 9. Menggunakan this dalam Object
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    showInfo: function () {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
};

car.showInfo();

// 10. Object.freeze() untuk Membekukan Object
const user = {
    username: "alice123",
    password: "secret"
};

Object.freeze(user);
user.password = "newpassword"; // Tidak akan berubah
console.log(user);

// 11. Object.seal() untuk Mengunci Struktur Object
const config = {
    theme: "dark",
    language: "English"
};

Object.seal(config);
config.theme = "light"; // Bisa diubah
config.newProperty = "test"; // Tidak bisa ditambahkan
console.log(config);

// 12. Object.hasOwnProperty() untuk Mengecek Properti
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("country")); // false

// 13. Object.fromEntries() untuk Membuat Object dari Array
const entries = [["name", "Bob"], ["age", 30]];
const objFromEntries = Object.fromEntries(entries);

console.log(objFromEntries);