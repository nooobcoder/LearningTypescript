// Using 'any' as a type is discouraged, use it temporarily

let id: number = 5;
let company: string = 'The Boring Company';
let isPublished: boolean = true;
let x: any = 'Hello World';

x = false; // This won't report error (x being of any type)

let ids: Array<number> = [1, 2, 3, 4, 5]; // Array generic of numbers
// ids.push('Hello'); // This wont be allowed

let arr: Array<any> = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Ankur', false]; // The order should match with the types

// Tuple Array
let employee: Array<[number, string]>;
employee = [
	[1, 'Ankur'],
	[2, 'Joe'],
	[12, 'Yen'],
];

// Unions (for more than one type allowance)
let pid: string | number = 22; // | is the pipe character
pid = 'Twenty-two'; // This is impractical LoL

// Enums - In enums the default values are integers starting from 0
enum DirectionOne {
	up = 'UP',
	down = 'DOWN',
	left = 'LEFT',
	right = 'RIGHT',
}
console.log(DirectionOne);

// Interface
interface UserInterface {
	readonly id: number; // Marking this as a locked prop
	name: string;
	age?: number; // This marks as an optional prop
}

// Objects - It can use interfaces or types interchangeably, unless the use case is complicated
const User: UserInterface = {
	id: 1,
	name: 'Doe',
};

// Type assertion
let cid: any = 1;
let customerId = cid as number; // Also let customerId = <number> cid

// Functions
const addNum = (x: number, y: number): number => x + y;
console.log(addNum(1, 20));
// console.log(addNum(1, 'Joe')); // This shall again wont be allowed

function log(message: string | number): void {
	console.log(message);
}
log('true');
log('India 🇮🇳');

// Below example shows why types exist, this is not possible with interfaces
type Point = number | string;
const p1: Point = 1;

interface MathFunc {
	(x: number, y: number): number;
}
// Code Reusability is handy
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
	register() {
		return `${this.name} is now registered`;
	}
}
const p = new Person(10, 'John');
// p.id; // This is not allowed
console.log(p.register());
const p2 = new Person(20, 'Doe');

// Inheritance
class Employee extends Person {
	// Sub-class or child class
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(24, 'Shawn Mendes', 'Software Engineer');
console.log(emp.name);
console.log(emp.register());

// Generics
const getArray = <T>(items: T[]): Array<T> => new Array().concat(items);

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Brad', 'John', 'Jill']);
strArray.push('Oswal');
