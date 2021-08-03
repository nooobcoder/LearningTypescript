import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

const reducers = combineReducers<StoreState>({ todos: todosReducer });

export { reducers };
