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

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;

const add = (n1: Combinable, n2: Combinable) => {
	if (typeof n1 === "string" || typeof n2 === "string")
		return n1.toString() + n2.toString();
	else return n1 + n2;
};

type UnknownEmployee = Employee | Admin;

// Function to portray type guards in TypeScript
const printEmployeeInformation = (emp: UnknownEmployee) => {
	console.log("Name: " + emp.name);
	if ("privileges" in emp) console.log("Privileges: " + emp.privileges);
	if ("startDate" in emp) console.log("Start Date: " + emp.startDate);
};

printEmployeeInformation({ name: "Ankur Paul", privileges: ["administrator"] });

class Car {
	drive(): void {
		console.log("Driving a car...");
	}
}

class Truck {
	drive(): void {
		console.log("Driving a truck...");
	}

	loadCargo(amount: number): void {
		console.log("Loading cargo..." + amount + " onto the truck.");
	}
}

type Vehicle = Car | Truck;

// Another sample of type guard.
const useVehicle = (vehicle: Vehicle) => {
	vehicle.drive();
	if (vehicle instanceof Truck) vehicle.loadCargo(200); // instanceof is another keyword for type guard.
};

const v1 = new Car();
useVehicle(v1);
const v2 = new Truck();
useVehicle(v2);

interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;

// Example of discriminated union type https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
const moveAnimal = (animal: Animal) => {
	let speed = null;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
	}
	console.log("Moving with speed: " + speed);
};
moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
	(userInputElement as HTMLInputElement).value = "Hi there!";
}

// Index Properties https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types
interface ErrorContainer {
	// {email:'Not a valid email', username: 'Must start with a character}
	[prop: string]: string; // This is an index property
}

const errorBag: ErrorContainer = {
	email: "Not a valid email!",
	username: "Must start with a capital character!",
};

// Demo of optional chaining
const fetchedUserData = {
	id: "u1",
	name: "Ankur",
	job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);
