// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
class BankAccount {
    constructor(accountNumber, accountHolderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log('Invalid withdraw amount.');
        }
    }

    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            targetAccount.balance += amount;
            console.log(`Transferred ${amount} to account ${targetAccount.accountNumber}. New balance is ${this.balance}.`);
        } else {
            console.log('Invalid transfer amount.');
        }
    }
}

const account1 = new BankAccount(101, 'Alice', 500);
const account2 = new BankAccount(102, 'Bob', 300);

account1.deposit(200);
account1.withdraw(100);
account1.transfer(150, account2);
account2.deposit(50);
account2.withdraw(400);