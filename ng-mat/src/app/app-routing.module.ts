import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'main-nav', component: MainNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
