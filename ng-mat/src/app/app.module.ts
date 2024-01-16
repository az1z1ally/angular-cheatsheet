import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { ButtonComponent } from './components/button/button.component';
import { TabComponent } from './components/tab/tab.component';
import { ClipBoardComponent } from './components/clip-board/clip-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './components/data-table/data-table.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialCommonModule } from 'src/material.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    ButtonComponent,
    TabComponent,
    ClipBoardComponent,
    DataTableComponent,
    MainNavComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialCommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
