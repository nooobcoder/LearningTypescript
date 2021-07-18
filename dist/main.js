"use strict";
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
//www.typescriptlang.org/docs/handbook/decorators.html
// ! Decorators are executed just in time when classes are declared, so that they can provide meta to the class
var Logger = function (logString) {
	return function (constructor) {
		console.log("\t", logString);
		console.log("\t", constructor);
	};
};
var withTemplate = function (template, hookId) {
	return function (_) {
		var hookElement = document.getElementById(hookId);
		if (hookElement) hookElement.innerHTML = template;
	};
};
// @Logger("LOGGING-PERSON")
var Person = /** @class */ (function () {
	function Person() {
		this.name = "Ankur";
		console.log("================");
		console.log("Creating Person Object");
	}
	Person = __decorate(
		[withTemplate("<h1>My person object</h1>", "app")],
		Person
	);
	return Person;
})();
var pers = new Person();
console.log(pers);
//# sourceMappingURL=main.js.map
