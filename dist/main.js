"use strict";
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
var add = function (n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string")
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
};
// Function to portray type guards in TypeScript
var printEmployeeInformation = function (emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp)
        console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp)
        console.log("Start Date: " + emp.startDate);
};
printEmployeeInformation({ name: "Ankur Paul", privileges: ["administrator"] });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo..." + amount + " onto the truck.");
    };
    return Truck;
}());
// Another sample of type guard.
var useVehicle = function (vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(200); // instanceof is another keyword for type guard.
};
var v1 = new Car();
useVehicle(v1);
var v2 = new Truck();
useVehicle(v2);
// Example of discriminated union type https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
var moveAnimal = function (animal) {
    var speed = null;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
};
moveAnimal({ type: "bird", flyingSpeed: 10 });
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there!";
}
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
//# sourceMappingURL=main.js.map