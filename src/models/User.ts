interface UserProps {
  // ? operator defines an optional key-value
  name?: string;
  age?: number;
}

type Callback = () => void;

class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: UserProps): number | string {
    // @ts-ignore
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
}

export { User };
