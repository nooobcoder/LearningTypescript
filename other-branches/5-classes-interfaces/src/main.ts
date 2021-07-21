// type Person = {
interface Greetable {
	name: string;
	age: number;

	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;
	age: number;

	constructor(n: string) {
		this.name = n;
		this.age = 30;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

const personObject: Person = new Person("Ankur");
personObject.greet("Hi there, I am - ");
