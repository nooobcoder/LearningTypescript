// type Person = {
interface Person {
	name: string;
	age: number;

	greet(phrase: string): void;
}

let user1: Person = {
	name: "Ankur",
	age: 21,
	greet: (phrase: string) => {
		console.log(phrase + " " + user1.name);
	},
};

user1.greet("Hi there, I am - ");
