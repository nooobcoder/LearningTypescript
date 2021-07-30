import axios, { AxiosResponse } from 'axios';

interface hasId {
  id?: number;
}

class Sync<T extends hasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): Promise<AxiosResponse> {
    const data = (await axios.get(`${this.rootUrl}/${id}`)).data;

    return new Promise((resolve) => resolve(data));
  }

  save(data: T): void {
    const { id } = data;

    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}

export { Sync };
