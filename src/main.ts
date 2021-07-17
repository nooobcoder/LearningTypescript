//www.typescriptlang.org/docs/handbook/decorators.html
// ! Decorators are executed just in time when classes are declared, so that they can provide meta to the class
const Logger = (logString: string) => {
	return function (constructor: Function) {
		console.log("\t", logString);
		console.log("\t", constructor);
	};
};

@Logger("LOGGING-PERSON")
class Person {
	name = "Ankur";

	constructor() {
		console.log("Creating Person Object");
	}
}

const pers = new Person();
console.log(pers);
