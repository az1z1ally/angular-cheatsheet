import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'card', component: CardComponent},
  {path: 'table', component: TableComponent},
  {path: 'form', component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
