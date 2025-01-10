// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index > -1) {
            this.departments.splice(index, 1);
        }
    }

    displayDepartments() {
        console.log(`Departments in ${this.name}:`);
        this.departments.forEach(department => console.log(department));
    }
}
const myUniversity = new University('My University');
myUniversity.addDepartment('Computer Science');
myUniversity.addDepartment('Mathematics');
myUniversity.addDepartment('Physics');

myUniversity.displayDepartments();

myUniversity.removeDepartment('Mathematics');

myUniversity.displayDepartments();