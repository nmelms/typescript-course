"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log("hello my department is " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const HR = new Department("Human Resources", "d1");
HR.describe();
HR.addEmployee("nick");
HR.addEmployee("Kayla");
HR.printEmployeeInfo();
