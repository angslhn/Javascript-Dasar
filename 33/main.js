// Encasulaption

class BankAccount {
    #balance
    constructor (user, balance) {
        this.user = user;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `Jumlah uang anda adalah ${this.#balance}`;
    }
}

let myAccount = new BankAccount("Aang Solihin", 1000000);

myAccount.deposit(300000)
console.log(myAccount.getBalance());