import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface UserProps {
  // ? operator defines an optional key-value
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://192.168.0.120:5000/users';

class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): number | string | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // @ts-ignore
    this.data = { ...update };
  }
}

export { User, UserProps };
