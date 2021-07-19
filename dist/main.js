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
var ProjectState = /** @class */ (function () {
    function ProjectState() {
        var _this = this;
        // An array of listeners to be notified when project's state change
        this.listeners = [];
        this.projects = [];
        this.addProject = function (title, description, numberOfPeople) {
            var newProject = {
                // Generate a key with a random id
                id: Math.random().toString(),
                title: title,
                description: description,
                people: numberOfPeople,
            };
            _this.projects.push(newProject);
            for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                var listenerFn = _a[_i];
                // clone the this.projects array using slice()
                listenerFn(_this.projects.slice());
            }
        };
        // Push a listener to the listener array
        this.addListener = function (listenerFn) {
            _this.listeners.push(listenerFn);
        };
    }
    ProjectState.getInstance = function () {
        if (!this.instance) {
            this.instance = new ProjectState();
        }
        return this.instance;
    };
    return ProjectState;
}());
var projectState = ProjectState.getInstance();
// Validation function with Validatable interface
function validate(validatable) {
    var isValid = true;
    if (validatable.required) {
        isValid = isValid && validatable.value.toString().trim().length > 0;
    }
    if (validatable.minLength !== undefined &&
        typeof validatable.value === "string") {
        isValid =
            isValid &&
                validatable.value.toString().trim().length >= validatable.minLength;
    }
    if (validatable.maxLength !== undefined &&
        typeof validatable.value === "string") {
        isValid =
            isValid &&
                validatable.value.toString().trim().length <= validatable.maxLength;
    }
    if (validatable.min !== undefined && typeof validatable.value === "number") {
        isValid = isValid && validatable.value >= validatable.min;
    }
    if (validatable.max !== undefined && typeof validatable.value === "number") {
        isValid = isValid && validatable.value <= validatable.max;
    }
    return isValid;
}
// ProjectList class
var ProjectList = /** @class */ (function () {
    function ProjectList(projectType) {
        var _this = this;
        this.projectType = projectType;
        this.renderContent = function () {
            var listId = _this.projectType + "-projects-list";
            _this.element.querySelector("ul").id = listId;
            _this.element.querySelector("h2").textContent =
                _this.projectType.toUpperCase() + " PROJECTS";
        };
        this.attach = function () {
            _this.hostElement.insertAdjacentElement("beforeend", _this.element);
        };
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        this.assignedProjects = [];
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = this.projectType + "-projects";
        // Register a listener for the project state
        projectState.addListener(function (projects) {
            _this.assignedProjects = projects;
            _this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    ProjectList.prototype.renderProjects = function () {
        var listElement = document.getElementById(this.projectType + "-projects-list");
        // loop through the assignedProjects array
        for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
            var project = _a[_i];
            var listItem = document.createElement("li");
            listItem.innerText = project.title;
            listElement.appendChild(listItem);
        }
    };
    return ProjectList;
}());
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        var _this = this;
        this.gatherUserInput = function () {
            var enteredTitle = _this.titleInputElement.value;
            var enteredDescription = _this.descriptionInputElement.value;
            var enteredPeople = _this.peopleInputElement.value;
            var titleValidatable = {
                value: enteredTitle,
                required: true,
            };
            var descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5,
            };
            var peopleValidatable = {
                value: enteredPeople,
                required: true,
                min: 1,
                max: 1,
            };
            // Check if enteredTitle, enteeredDescription, enteredPeople are empty.
            if (!validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)) {
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
                projectState.addProject(title, description, people);
                _this.clearInput();
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
// Render the list
var activePrjList = new ProjectList("active");
var finishedPrjList = new ProjectList("finished");
//# sourceMappingURL=main.js.map