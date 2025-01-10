// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }

    addBranch(branch) {
        this.branches.push(branch);
    }

    removeBranch(branch) {
        const index = this.branches.indexOf(branch);
        if (index > -1) {
            this.branches.splice(index, 1);
        }
    }

    displayBranches() {
        console.log(`Branches of ${this.name}:`);
        this.branches.forEach(branch => console.log(branch));
    }
}

const myBank = new Bank('MyBank');

myBank.addBranch('Branch 1');
myBank.addBranch('Branch 2');
myBank.addBranch('Branch 3');

myBank.displayBranches();

myBank.removeBranch('Branch 2');

myBank.displayBranches();