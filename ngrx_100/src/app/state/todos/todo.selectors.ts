import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/app.state';
import { TodoState } from 'src/app/types/todo.state';

export const selectTodos = (state: AppState) => state.todos;

export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);
