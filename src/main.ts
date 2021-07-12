class Department {
	// private id: string;
	// private name: string;
	private employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		// validation etc
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Ankur");
accounting.addEmployee("Paul");

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
