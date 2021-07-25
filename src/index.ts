import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const userObj: User = new User();
const companyObj: Company = new Company();
const customMap = new CustomMap('map');

customMap; // Display the map on the page

// Placing the markers for the user and the company object on the map
customMap.addMarker(userObj);
customMap.addMarker(companyObj);
