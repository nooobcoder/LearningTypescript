import axios, { AxiosResponse } from 'axios';

interface UserProps {
  // ? operator defines an optional key-value
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): number | string | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // @ts-ignore
    this.data = { ...update };
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      console.warn(`${eventName} is an invalid event. Please check the event specs`);
      return;
    }

    handlers.forEach((callback) => callback());
  }

  async fetch() {
    try {
      const response: AxiosResponse = await axios.get(`http://192.168.0.120:5000/users/${this.get('id')}`);
      this.set(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://192.168.0.120:5000/users/${id}`, this.data);
    } else {
      axios.post(`http://192.168.0.120:5000/users/`, this.data);
    }
  }
}

export { User };
