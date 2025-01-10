// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.bonus;
    }
}

const manager1 = new Manager('Alice', 5000, 'HR', 10000);
const manager2 = new Manager('Bob', 6000, 'IT', 15000);

console.log(manager1.calculateAnnualSalary()); 
console.log(manager2.calculateAnnualSalary()); 