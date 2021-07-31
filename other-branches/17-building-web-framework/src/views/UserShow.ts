import { View } from './View';
import { User, UserProps } from '../models/User';

class UserShow extends View<User, UserProps> {
  constructor(parent: HTMLElement, model: User) {
    super(parent, model);
  }

  template(): string {
    return `
            <div>
              <h1>User Detail</h1>
              <div>User Name: ${this.model.get('name')}</div>
              <div>User Age: ${this.model.get('age')}</div>
            </div>
          `;
  }
}

export { UserShow };
