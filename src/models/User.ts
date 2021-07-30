import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

interface UserProps {
  // ? operator defines an optional key-value
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://192.168.0.120:5000/users';

class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
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

export { User, UserProps };
