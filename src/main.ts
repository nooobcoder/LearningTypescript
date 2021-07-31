/*
import { User } from './models/User';

const collection = User.buildUserCollection();
collection.on('change', () => console.log(collection));
collection.fetch().then();
*/

import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user: User = User.buildUser({ name: 'NAME', age: 20 });

const userForm: UserForm = new UserForm(document.getElementById('root') as HTMLElement, user);
userForm.render();
