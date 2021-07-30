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

  async save(data: T): Promise<AxiosResponse | void> {
    const { id } = data;
    let response: AxiosResponse;
    try {
      if (id) {
        response = await axios.put(`${this.rootUrl}/${id}`, data);
      } else {
        response = await axios.post(this.rootUrl, data);
      }

      return new Promise((resolve, _reject) => resolve(response));
    } catch (error: any) {
      console.error(error);
    }
  }
}

export { Sync };
