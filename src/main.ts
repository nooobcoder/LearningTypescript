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

enum ProjectStatus {
	Active,
	Finished,
}

// interface for the projects array (global state)
interface projectsType {
	id: string;
	title: string;
	description: string;
	people: number;
	status: ProjectStatus;
}

type Listener = (items: Array<projectsType>) => void;

// Project state management
class ProjectState {
	// An array of listeners to be notified when project's state change
	private listeners: Array<Listener> = [];
	private projects: Array<projectsType> = [];

	private static instance: ProjectState;

	private constructor() {
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new ProjectState();
		}
		return this.instance;
	}

	public addProject = (
		title: string,
		description: string,
		numberOfPeople: number
	) => {
		const newProject = {
			// Generate a key with a random id
			id: Math.random().toString(), //  A very simple id generation
			title,
			description,
			people: numberOfPeople,
			status: ProjectStatus.Active,
		};

		this.projects.push(newProject);
		for (const listenerFn of this.listeners) {
			// clone the this.projects array using slice()
			listenerFn(this.projects.slice());
		}
	};

	// Push a listener to the listener array
	public addListener = (listenerFn: Listener) => {
		this.listeners.push(listenerFn);
	};
}

const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
	value: string | number;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
}

// Validation function with Validatable interface
function validate(validatable: Validatable): boolean {
	let isValid = true;
	if (validatable.required) {
		isValid = isValid && validatable.value.toString().trim().length > 0;
	}
	if (
		validatable.minLength !== undefined &&
		typeof validatable.value === "string"
	) {
		isValid =
			isValid &&
			validatable.value.toString().trim().length >= validatable.minLength;
	}
	if (
		validatable.maxLength !== undefined &&
		typeof validatable.value === "string"
	) {
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
class ProjectList {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLElement;
	assignedProjects: Array<projectsType>;

	constructor(private projectType: "active" | "finished") {
		this.templateElement = document.getElementById(
			"project-list"
		) as HTMLTemplateElement;
		this.hostElement = document.getElementById("app") as HTMLDivElement;
		this.assignedProjects = [];

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLElement;
		this.element.id = `${this.projectType}-projects`;

		// Register a listener for the project state
		projectState.addListener((projects: Array<projectsType>) => {
			// Filter the relevant projects (active or finished)
			const relatedProjects = projects.filter((project) =>
				this.projectType === "active"
					? project.status === ProjectStatus.Active
					: project.status === ProjectStatus.Finished
			);

			this.assignedProjects = relatedProjects;
			this.renderProjects();
		});

		this.attach();
		this.renderContent();
	}

	private renderProjects() {
		const listElement = document.getElementById(
			`${this.projectType}-projects-list`
		)! as HTMLUListElement;

		listElement.innerHTML = "";

		// loop through the assignedProjects array
		for (const project of this.assignedProjects) {
			const listItem = document.createElement("li") as HTMLLIElement;
			listItem.innerText = project.title;
			listElement.appendChild(listItem);
		}
	}

	private renderContent = (): void => {
		const listId = `${this.projectType}-projects-list`;
		this.element.querySelector("ul")!.id = listId;
		this.element.querySelector("h2")!.textContent =
			this.projectType.toUpperCase() + " PROJECTS";
	};

	private attach = (): void => {
		this.hostElement.insertAdjacentElement("beforeend", this.element);
	};
}

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

		const titleValidatable: Validatable = {
			value: enteredTitle,
			required: true,
		};
		const descriptionValidatable: Validatable = {
			value: enteredDescription,
			required: true,
			minLength: 5,
		};
		const peopleValidatable: Validatable = {
			value: enteredPeople,
			required: true,
			min: 1,
			max: 1,
		};

		// Check if enteredTitle, enteeredDescription, enteredPeople are empty.
		if (
			!validate(titleValidatable) ||
			!validate(descriptionValidatable) ||
			!validate(peopleValidatable)
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
			projectState.addProject(title, description, people);
			this.clearInput();
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

// Render the list
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
