import { AxiosResponse } from 'axios';

interface ModelAtrributes<T> {
  get: <K extends keyof T>(key: K) => T[K];
  getAll: () => T;
  set: (value: T) => void;
}

interface Sync<T> {
  fetch: (id: number) => Promise<AxiosResponse>;
  save: (data: T) => Promise<AxiosResponse | void>;
}

interface Events {
  on: (eventName: string, callback: () => void) => void;
  trigger: (eventName: string) => void;
}

interface HasId {
  id?: number;
}

class Model<T extends HasId> {
  constructor(private attributes: ModelAtrributes<T>, private events: Events, private sync: Sync<T>) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  async fetch(): Promise<string> {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an ID');
    }

    const data = await this.sync.fetch(id);
    console.log(data);

    // @ts-ignore
    this.set(data);

    return new Promise((resolve, _reject) => {
      resolve('Successful!');
    });
  }

  save = async (): Promise<void> => {
    try {
      const response: AxiosResponse | void = await this.sync.save(this.attributes.getAll());
      console.log('Axios Response: ', response);

      this.trigger('save');
    } catch (error) {
      console.log(error);
    }
  };
}

export { Model };
