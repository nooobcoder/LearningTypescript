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

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = <HTMLTemplateElement>(
			document.getElementById("project-input")!
		);
		this.hostElement = <HTMLDivElement>document.getElementById("app")!;

		const importedNode: DocumentFragment = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = "user-input"; // Assigning an id to give styling.

		this.titleInputElement = this.element.querySelector(
			"#title"
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			"#description"
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			"#people"
		) as HTMLInputElement;

		this.configureEventListeners();
		this.attach();
	}

	private gatherUserInput = (): [string, string, number] | void => {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		// Check if enteredTitle, enteeredDescription, enteredPeople are empty.
		if (
			enteredTitle === "" ||
			enteredDescription === "" ||
			enteredPeople === ""
		) {
			alert("Invalid input, please try again!");
			return;
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople];
		}
	};

	private clearInput = () => {
		// Clear the input fields.
		this.titleInputElement.value = "";
		this.descriptionInputElement.value = "";
		this.peopleInputElement.value = "";
	};

	// @autoBind
	private submitHandler = (event: Event) => {
		event?.preventDefault();
		const userInput = this.gatherUserInput();
		// Check if userInput is an array
		if (Array.isArray(userInput)) {
			const [title, description, people] = userInput;
		}
	};

	private configureEventListeners = () => {
		this.element.addEventListener("submit", this.submitHandler.bind(this));
	};

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

const projectInput = new ProjectInput();
