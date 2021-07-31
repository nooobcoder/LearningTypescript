import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

class UserEdit extends View<User, UserProps> {
  constructor(parent: HTMLElement, user: User) {
    super(parent, user);
  }

  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  template(): string {
    return `
            <div>
              <div class='user-show'></div>
              <div class='user-form'></div>
            </div>
    `;
  }

  onRender(): void {
    new UserShow(this.regions.userShow as HTMLElement, this.model).render();
    new UserForm(this.regions.userForm as HTMLElement, this.model).render();
  }
}

export { UserEdit };
