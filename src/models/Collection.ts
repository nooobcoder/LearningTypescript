import { Eventing } from './Eventing';
import axios from 'axios';

class Collection<T, K> {
  models: Array<T> = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch = async (): Promise<void> => {
    (await axios.get(this.rootUrl)).data.forEach((value: K) => {
      this.models.push(this.deserialize(value));
    });

    this.trigger('change');
  };
}

export { Collection };
