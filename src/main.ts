class Department {
	static fiscalYear = 2020;
	// private readonly id: string;
	// private name: string;
	protected employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;

		// this.fiscalYear; // This shall not work, being static in nature
		console.log(Department.fiscalYear);
	}

	static createEmployee(name: string) {
		return { name };
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		// validation etc
		// this.id = 'd2';
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;

	// Getters use a 'get' keyword to be distinguised from normal functions.
	get mostRecentReport() {
		return this.lastReport ? this.lastReport : "No report found.";
	}

	set mostRecentReport(newValue: string) {
		if (!newValue) throw new Error("Please pass in a valid value.");
		this.addReport(newValue);
	}

	constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}

	addEmployee(name: string) {
		if (name === "Max") {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee("Ankur");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something report.");
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
