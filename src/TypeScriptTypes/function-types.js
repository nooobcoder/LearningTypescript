const add = (n1, n2) => n1 + n2;
const printResult = (num) => console.log(`Result: ${num}`);
printResult(add(5, 12));
// Function callback as type
const addAndHandle = (n1, n2, cb) => {
    cb(n1 + n2);
};
// Types as function
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => console.log("Result:  ", result));
