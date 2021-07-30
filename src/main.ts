import { User } from './models/User';

const user = new User({ id: 3, name: 'newr name', age: 69 });

user.on('save', () => console.log(user));

user.save().then();
