/*
import { User } from './models/User';

const collection = User.buildUserCollection();
collection.on('change', () => console.log(collection));
collection.fetch().then();
*/

import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user: User = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userForm: UserForm = new UserForm(root as HTMLElement, user);

  userForm.render();
} else {
  throw new Error('Root element not found');
}
