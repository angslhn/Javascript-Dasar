// Desctructuring

// Destructuring Array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Destructuring Object
const person = { name: "Alice", age: 25, job: "Engineer" };
const { name, age, job } = person;
console.log(name); // Alice
console.log(age); // 25
console.log(job); // Engineer

// Destructuring dengan Default Value
const { gender = "Unknown" } = person;
console.log(gender); // Unknown

// Nested Object Destructuring
const user = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA"
    }
};
const { address: { city, country } } = user;
console.log(city); // New York
console.log(country); // USA

// Function Parameter Destructuring
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet(person);

// Studi Kasus: Mengambil Data dari API
const response = {
    status: 200,
    data: {
        user: {
            id: 101,
            name: "Alice",
            email: "alice@example.com"
        }
    }
};
const { status, data: { user: { id, name: userName, email } } } = response;
console.log(status); // 200
console.log(id); // 101
console.log(userName); // Alice
console.log(email); // alice@example.com