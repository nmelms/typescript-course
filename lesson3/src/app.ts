class Department {
  constructor(public name: string) {}
  private employees: string[] = [];

  describe(this: Department) {
    console.log("hello my department is " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const HR = new Department("Human Resources");
HR.describe();
HR.addEmployee("nick");
HR.addEmployee("Kayla");
HR.printEmployeeInfo();
