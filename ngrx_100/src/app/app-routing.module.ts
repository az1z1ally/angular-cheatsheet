import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () =>
      import('./components/todo/todo.module').then((m) => m.TodoModule),
  },

  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },

  {
    path: 'counter',
    component: CounterComponent
  },

  {
    path: 'products',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
