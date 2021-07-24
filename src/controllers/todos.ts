import { RequestHandler } from 'express';

import { Todo } from '../models/todos';

const TODOS: Todo[] = [
  {
    id: 1,
    text: 'delectus aut autem',
  },
  {
    id: 2,
    text: 'quis ut nam facilis et officia qui',
  },
  {
    id: 3,
    text: 'fugiat veniam minus',
  },
  {
    id: 4,
    text: 'et porro tempora',
  },
  {
    id: 5,
    text: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  },
  {
    id: 6,
    text: 'qui ullam ratione quibusdam voluptatem quia omnis',
  },
];

const createTodo: RequestHandler = (req, res, _next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};

const getTodo: RequestHandler = (_request, response, next) => {
  response.json({ todos: TODOS });

  next();
};

const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });

  next();
};

const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: 'Todo deleted!' });

  next();
};

export { createTodo, getTodo, updateTodo, deleteTodo };
