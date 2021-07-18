"use strict";
// autobind decorator
/* const autoBind = (_: any, _2: string, desciptor: PropertyDescriptor) => {
    const originalMethod = desciptor.value;
    const adjacentDescriptor: PropertyDescriptor = {
        configurable: true,
        get: function () {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjacentDescriptor;
}; */
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        var _this = this;
        this.gatherUserInput = function () {
            var enteredTitle = _this.titleInputElement.value;
            var enteredDescription = _this.descriptionInputElement.value;
            var enteredPeople = _this.peopleInputElement.value;
            // Check if enteredTitle, enteeredDescription, enteredPeople are empty.
            if (enteredTitle === "" ||
                enteredDescription === "" ||
                enteredPeople === "") {
                alert("Invalid input, please try again!");
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        };
        this.clearInput = function () {
            // Clear the input fields.
            _this.titleInputElement.value = "";
            _this.descriptionInputElement.value = "";
            _this.peopleInputElement.value = "";
        };
        // @autoBind
        this.submitHandler = function (event) {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            var userInput = _this.gatherUserInput();
            // Check if userInput is an array
            if (Array.isArray(userInput)) {
                var title = userInput[0], description = userInput[1], people = userInput[2];
            }
        };
        this.configureEventListeners = function () {
            _this.element.addEventListener("submit", _this.submitHandler.bind(_this));
        };
        this.templateElement = (document.getElementById("project-input"));
        this.hostElement = document.getElementById("app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input"; // Assigning an id to give styling.
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configureEventListeners();
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    return ProjectInput;
}());
var projectInput = new ProjectInput();
//# sourceMappingURL=main.js.map