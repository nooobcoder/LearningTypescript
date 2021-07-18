"use strict";
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        var _this = this;
        this.submitHandler = function (event) {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            console.log(_this.titleInputElement.value);
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
        this.peopleInptuElement = this.element.querySelector("#people");
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