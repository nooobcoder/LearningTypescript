// Built in generics
const names: Array<string> = ["Max", "Ankur"]; // string[]
console.log(names[0].split(" "));

// const promise: Promise<string> = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve("This is done!");
// 	}, 2000);
// });
// promise.then((data) => data.split(" "));

// Creating custom generic functions helps us to generate better autocompletion
const merge = <T, U>(objA: T, objB: U): T & U => {
	return { ...objA, ...objB }; // Merging the two objects by using the spread operator
};
const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
	{ name: "Ankur", hobbies: ["Sports"] },
	{ age: 21 }
);
const mergedObj2 = merge({ name: "Andrew" }, { age: 30 });
console.log(mergedObj);

// Working with constraints
const constraint = <T extends object>(a: T) => {
	// extends ... makes the constraint to check the type of the object
	console.log(a);
};

// Count and print
interface Lengthy {
	length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
	let descriptionText = "Got no value";
	if (element.length > 0)
		descriptionText = `Got a value of ${element.length} element(s)`;
	return [element, descriptionText];
};
console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
