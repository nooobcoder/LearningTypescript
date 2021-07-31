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
  onSaveClick = (): void => {
    this.model.save();
  };

  eventsMap = (): { [key: string]: () => void } => ({
    'click:.set-age': this.onSetAgeClick,
    'click:.set-name': this.onSetNameClick,
    'click:.save-model': this.onSaveClick,
  });

  template = (): string => {
    return `<div>
              <input type='text' placeholder='${this.model.get('name')}'/><br>
              <button class='set-name'>Change Name</button><br>
              <button class='set-age'>Set random age</button><br>
              <button class='save-model'>Save User</button>
            </div>
          `;
  };
}

export { UserForm };
