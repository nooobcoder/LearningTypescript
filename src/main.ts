type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Example of 'union' type

const e1: ElevatedEmployee = {
	name: "Max",
	privileges: ["create-server"],
	startDate: new Date(),
};

type Combinale = string | number;
type Numeric = number | boolean;
type Universal = Combinale | Numeric;
