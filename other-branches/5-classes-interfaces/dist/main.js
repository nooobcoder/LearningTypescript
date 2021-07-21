"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var personObject = new Person("Ankur");
personObject.greet("Hi there, I am - ");
//# sourceMappingURL=main.js.map