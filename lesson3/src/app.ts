class Department {
  constructor(public name: string, private readonly id: string) {}
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const HR = new Department("Human Resources", "d1");
const IT = new ITDepartment("t1", ["nick", "kayla"]);
HR.describe();
HR.addEmployee("nick");
HR.addEmployee("Kayla");
HR.printEmployeeInfo();
