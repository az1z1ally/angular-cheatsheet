import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from 'src/app/types/todo.model';
import { TodoState, status } from 'src/app/types/todo.state';


export const initialState: TodoState = {
  todos: [],
  error: null,
  status: status.PENDING
};

export const todoReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(TodoActions.addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),
  // Remove the todo from the todos array
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  // Trigger loading the todos
  on(TodoActions.loadTodos, (state) => ({ ...state, status: status.LOADING })),
  // Handle successfully loaded todos
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: null,
    status: status.SUCCESS,
  })),
  // Handle todos load failure
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: status.ERROR,
  }))
);
