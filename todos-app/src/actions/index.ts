import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const URL = `https://jsonplaceholder.typicode.com/todos`;

const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response: AxiosResponse<Array<Todo>> = await axios.get<Array<Todo>>(URL);

    dispatch<FetchTodosAction>({ type: ActionTypes.fetchTodos, payload: response.data });
  };
};

export {  fetchTodos};
