import { FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types';

const todosReducer = (state: Todo[] = [], {type,payload}: FetchTodosAction) => {
  switch (type) {
    case ActionTypes.fetchTodos:
      return payload;
    default:
      return state;
  }
};

export { todosReducer };
