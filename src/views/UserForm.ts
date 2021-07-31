import { User } from '../models/User';

class UserForm {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  bindModel = (): void => {
    this.model.on('change', () => this.render());
  };

  onSetAgeClick = (): void => this.model.setRandomAge();
  onSetNameClick = (): void => {
    const input: HTMLInputElement | null = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  eventsMap = (): { [key: string]: () => void } => ({
    'click:.set-age': this.onSetAgeClick,
    'click:.set-name': this.onSetNameClick,
  });

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment
        .querySelectorAll(selector)
        .forEach((element) => element.addEventListener(eventName, eventsMap[eventKey]));
    }
  };

  template = (): string => {
    return `<div><h1>User Form</h1>
              <div>User name: ${this.model.get('name')}</div>
              <div>User age: ${this.model.get('age')}</div>
              <input type='text' />
              <button class='set-name'>Change Name</button>
              <button class='set-age'>Set random age</button>
            </div>
          `;
  };

  render = (): void => {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent && this.parent.append(templateElement.content);
  };
}

export { UserForm };
