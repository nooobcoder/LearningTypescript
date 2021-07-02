class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Department) {
		console.log("Department: " + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const obj = new Department("Ankur");

obj.addEmployee("Ankur");
obj.addEmployee("Paul");

// obj.employees[2] = "Anna";  // Cannot be done when the employees array is private

obj.describe();
obj.printEmployeeInformation();

/* const objCopy = { describe: obj.describe };
objCopy.describe;
 */
