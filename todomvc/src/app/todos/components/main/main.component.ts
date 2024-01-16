import { Component } from '@angular/core';
import { Observable, combineLatest, filter } from 'rxjs';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { map } from 'rxjs/operators';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass$: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;

  constructor(private todosService: TodosService) {
    this.noTodoClass$ = this.todosService.todos$.pipe(map((todos) => todos.length === 0))
    this.isAllTodosSelected$ =  this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted === true))
    )

    this.visibleTodos$ = combineLatest(
      [
        this.todosService.todos$,
        this.todosService.filter$
      ]
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter(todo => !todo.isCompleted)
        } else if (filter === FilterEnum.completed) {
          return todos.filter(todo => todo.isCompleted)
        }
        return todos  
      })
    )

  }

  toggleAllTodos (event: Event): void {
    
  }
}
