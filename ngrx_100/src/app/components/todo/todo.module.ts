import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from 'src/app/state/todos/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from 'src/app/state/todos/todo.effects';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    TodoRoutingModule, 
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [TodoComponent],
})
export class TodoModule {}
