/*
import { User } from './models/User';

const collection = User.buildUserCollection();
collection.on('change', () => console.log(collection));
collection.fetch().then();
*/

import { UserForm } from './views/UserForm';

const userForm: UserForm = new UserForm(document.getElementById('root') as HTMLElement);
userForm.render();
