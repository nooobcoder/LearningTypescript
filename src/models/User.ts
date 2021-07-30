import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './APISync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

interface UserProps {
  // ? operator defines an optional key-value
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://192.168.0.120:5000/users';

class User extends Model<UserProps> {
  // This is a singleton class
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(rootUrl));
  }

  static buildUserCollection = (): Collection<User, UserProps> =>
    new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
}

export { User, UserProps };
