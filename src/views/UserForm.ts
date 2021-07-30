class UserForm {
  constructor(public parent: HTMLElement) {}

  onButtonClick = (): void => console.log('Hi there');
  onHeaderHover = (): void => console.log('You are now hovering over a header');

  eventsMap = (): { [key: string]: () => void } => ({
    'click:button': this.onButtonClick,
    'mouseenter:h1': this.onHeaderHover,
  });

  template = (): string => {
    return `<div><h1>User Form</h1><input type='text'/><button>Hi</button></div>`;
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment
        .querySelectorAll(selector)
        .forEach((element) => element.addEventListener(eventName, eventsMap[eventKey]));
    }
  };

  render = (): void => {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent && this.parent.append(templateElement.content);
  };
}

export { UserForm };
