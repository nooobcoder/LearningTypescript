import { Model } from '../models/Model';

abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  protected constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap = (): { [key: string]: () => void } => ({});

  regionsMap = (): { [key: string]: string } => ({});

  bindModel = (): void => {
    this.model.on('change', () => this.render());
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

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];

      const element = fragment.querySelector(selector);
      if (element) this.regions[key] = element;
    }
  };

  render = (): void => {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.parent && this.parent.append(templateElement.content);
  };
}

export { View };
