import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'main-nav', component: MainNavComponent},
  {path: 'card', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
