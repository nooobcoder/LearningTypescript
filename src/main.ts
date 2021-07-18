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
	peopleInptuElement: HTMLInputElement;

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
		this.peopleInptuElement = this.element.querySelector(
			"#people"
		) as HTMLInputElement;

		this.configureEventListeners();
		this.attach();
	}

	// @autoBind
	private submitHandler = (event: Event) => {
		event?.preventDefault();
		console.log(this.titleInputElement.value);
	};

	private configureEventListeners = () => {
		this.element.addEventListener("submit", this.submitHandler.bind(this));
	};

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}
}

const projectInput = new ProjectInput();
