type Callback = () => void;

class Eventing {
  events: { [key: string]: Callback[] } = {};

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

export { Eventing };