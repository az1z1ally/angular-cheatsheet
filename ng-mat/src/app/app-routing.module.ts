import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const routes: Routes = [
  {path: '', component: MainNavComponent},
  {path: 'autocomplete', component: AutocompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
