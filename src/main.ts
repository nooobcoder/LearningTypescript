import { User } from './models/User';

/*
const user = new User({ name: 'Ankur Paul', age: 20 });
user.on('change', () => {
  console.log('This is a callback');
});
user.on('save', () => console.log('Save was triggered'));
// !DEMO: Syntax to call that callback
// user.events.change[0]();

console.log(user);
user.trigger('change');
user.trigger('save');
*/

const user = new User({ name: 'new record', age: 0 });
user.events.on('change', () => console.log('This is a change listener'));
user.events.trigger('change');