// Unknown type
let userInput: unknown; // Replace with 'any' and see
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") userName = userInput;

// never type
const generateError = (message: string, code: number): never => {
	throw { message, errorCode: code };
};

const result = generateError("An Error occured!", 500);
console.log(result);
