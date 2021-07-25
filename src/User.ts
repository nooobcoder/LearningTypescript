import faker from 'faker';
import { Mappable } from './CustomMap';

// Class to generate a random user
class User implements Mappable {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

export { User };
