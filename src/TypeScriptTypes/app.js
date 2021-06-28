function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number")
        throw new Error("Incorrect Input!");
    return n1 + n2;
}
const number1 = "5";
const number2 = 2.8;
console.log(add(number1, number2));
