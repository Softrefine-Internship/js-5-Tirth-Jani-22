class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = parseInt(balance);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance -= amount;
    }
}

const ba = new BankAccount("12123123", 123235);
ba.deposit(5000);
console.log(ba.balance);

ba.withdraw(1000);
console.log(ba.balance);