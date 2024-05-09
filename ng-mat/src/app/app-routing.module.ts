import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { FormsComponent } from './components/forms/forms.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SliderComponent } from './components/slider/slider.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'card', component: CardComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'table', component: TableComponent},
  {path: 'form', component: FormsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'old-nav', component: MainNavComponent},
  {path: 'dynamic-form', component: QuizFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
