import { AxiosResponse } from 'axios';
import { UserProps } from './User';

interface ModelAtrributes<T> {
  get: <K extends keyof T>(key: K) => T[K];
  getAll: () => T;
  set: (value: T) => void;
}

interface Sync<T> {
  fetch: (id: number) => Promise<AxiosResponse>;
  save: (data: T) => Promise<AxiosResponse | void>;
}

interface Events {
  on: (eventName: string, callback: () => void) => void;
  trigger: (eventName: string) => void;
}

class Model implements Events, ModelAtrributes<UserProps>, Sync<UserProps> {}

export { Model };
