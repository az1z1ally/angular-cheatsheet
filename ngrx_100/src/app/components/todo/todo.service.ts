import { Injectable } from '@angular/core';

import { Todo } from '../../types/todo.model';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {

 getTodos() {
    const todos: Todo[] = [
        {id: Date.now().toString(), content: `Todo ${Date.now().toString()}`},
        {id: Date.now().toString(), content: `Todo ${Date.now().toString()}`},
        {id: Date.now().toString(), content: `Todo ${Date.now().toString()}`},
        {id: Date.now().toString(), content: `Todo ${Date.now().toString()}`},
        {id: Date.now().toString(), content: `Todo ${Date.now().toString()}`},
    ]

    return of(todos).pipe(delay(2000))
 }
}
