import { View } from './View';
import { User, UserProps } from '../models/User';

class UserForm extends View<User, UserProps> {
  constructor(parent: HTMLElement, user: User) {
    super(parent, user);
  }

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
}

export { UserForm };
