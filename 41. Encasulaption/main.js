// Encasulaption
// Menyembunyikan detail implementasi dengan membuat properti atau metode bersifat private.

class BankAccount {
    #balance; // Private property
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      this.#balance += amount;
      const newBalance = this.#balance
      console.log(`Deposit berhasil. Saldo sekarang adalah: ${newBalance.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })}`);
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount(125950000);
  account.deposit(45250000);

  console.log(account.getBalance());
  // console.log(account.#balance); // Error: Private field '#balance' must be declared  