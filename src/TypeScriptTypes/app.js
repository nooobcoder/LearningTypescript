// Unknown type
let userInput; // Replace with 'any' and see
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string")
    userName = userInput;
// never type
const generateError = (message, code) => {
    throw { message, errorCode: code };
};
const result = generateError("An Error occured!", 500);
console.log(result);
