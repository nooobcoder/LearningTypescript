"use strict";
// Built in generics
const names = ["Max", "Ankur"]; // string[]
console.log(names[0].split(" "));
// const promise: Promise<string> = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve("This is done!");
// 	}, 2000);
// });
// promise.then((data) => data.split(" "));
// Creating custom generic functions helps us to generate better autocompletion
const merge = (objA, objB) => {
    return Object.assign(Object.assign({}, objA), objB); // Merging the two objects by using the spread operator
};
const mergedObj = merge({ name: "Ankur", hobbies: ["Sports"] }, { age: 21 });
const mergedObj2 = merge({ name: "Andrew" }, { age: 30 });
console.log(mergedObj);
// Working with constraints
const constraint = (a) => {
    // extends ... makes the constraint to check the type of the object
    console.log(a);
};
const countAndDescribe = (element) => {
    let descriptionText = "Got no value";
    if (element.length > 0)
        descriptionText = `Got a value of ${element.length} element(s)`;
    return [element, descriptionText];
};
console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
// The keyof constraint
const extractAndConvert = (obj, key) => {
    return obj[key];
};
console.log(extractAndConvert({ name: "Julia" }, "name"));
// Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) > -1)
            this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return this.data.map((item) => item);
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Ankur");
textStorage.removeItem("Ankur");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=main.js.map