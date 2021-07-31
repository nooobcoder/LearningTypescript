import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user: User = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit: UserEdit = new UserEdit(root as HTMLElement, user);

  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
