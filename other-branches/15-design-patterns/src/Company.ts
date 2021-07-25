import faker from 'faker';
import { Mappable } from './CustomMap';

const { company, address } = faker;

class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = { lat: +address.latitude(), lng: +address.longitude() };
  }

  markerContent(): string {
    return `<h1>Company Name: ${this.name}</h1>
            <h3></h3>Catchphrase:${this.catchPhrase}</h3>
           `;
  }
}

export { Company };
