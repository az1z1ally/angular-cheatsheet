import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, removeTodo, loadTodos } from '../../state/todos/todo.actions';
import { selectAllTodos } from '../../state/todos/todo.selectors';
import { Todo } from '../../types/todo.model';
import { AppState } from 'src/app/types/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
})
export class TodoComponent implements OnInit {
  allTodos$: Observable<Todo[]>;
  todo = '';

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
