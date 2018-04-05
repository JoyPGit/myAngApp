import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameServiceService } from './game-service.service';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CharactersComponent,
    HousesComponent,
    BooksComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//need to add this too
    RouterModule.forRoot([
      {path:'home', component : HomeComponent},
      {path:'about', component : AboutComponent},
      {path:'app', component : AppComponent},
      {path:'characters', component : CharactersComponent},
      {path:'houses', component : HousesComponent},
      {path:'books', component : BooksComponent},
      {path:'details', component : DetailsComponent}
    ])
  ],
  //providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
