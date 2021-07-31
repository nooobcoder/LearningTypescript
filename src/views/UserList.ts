import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';
import { Collection } from '../models/Collection';

class UserList extends CollectionView<User, UserProps> {
  constructor(parent: HTMLElement, collection: Collection<User, UserProps>) {
    super(parent, collection);
  }

  renderItem(model: User, itemParent: HTMLElement): void {
    new UserShow(itemParent, model).render();
  }
}

export { UserList };
