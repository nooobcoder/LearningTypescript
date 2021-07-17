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
//# sourceMappingURL=main.js.map