"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var obj = new Department("Ankur");
obj.addEmployee("Ankur");
obj.addEmployee("Paul");
// obj.employees[2] = "Anna";  // Cannot be done when the employees array is private
obj.describe();
obj.printEmployeeInformation();
/* const objCopy = { describe: obj.describe };
objCopy.describe;
 */
//# sourceMappingURL=main.js.map