//www.typescriptlang.org/docs/handbook/decorators.html
// ! Decorators are executed just in time when classes are declared, so that they can provide meta to the class
const Logger = (logString: string) => {
	return function (constructor: Function) {
		console.log("\t", logString);
		console.log("\t", constructor);
	};
};

const withTemplate = (template: string, hookId: string) => {
	return function (_: Function) {
		const hookElement = document.getElementById(hookId);
		if (hookElement) hookElement.innerHTML = template;
	};
};

// @Logger("LOGGING-PERSON")
@withTemplate("<h1>My person object</h1>", "app")
class Person {
	name = "Ankur";

	constructor() {
		console.log("================");
		console.log("Creating Person Object");
	}
}

const pers = new Person();
console.log(pers);
