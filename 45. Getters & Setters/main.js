// Getters & Setters
// Getter dan setter digunakan untuk mengontrol akses ke properti.

class User {
  constructor(name) {
    this._nama = name;
  }

  get nama() {
    return this._nama;
  }

  set nama(namaBaru) {
    if (namaBaru.length > 0) {
      this._nama = namaBaru;
    } else {
      console.log("Nama tidak boleh kosong!");
    }
  }
}

const user1 = new User("Alice");
console.log(user1.name); // Output: Alice
user1.name = "Bob";
console.log(user1.name); // Output: Bob