import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: 'home',
    component: FormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:course-name',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
