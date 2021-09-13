import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailComponent } from './book-detail/book-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ModalContainerComponent } from './modal-container';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'w-ng5';


const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'house/detail/:name', component: ModalContainerComponent },
  // { path: 'characters', component: CharactersComponent },
  // { path: 'characters/detail/:name', component: ModalContainerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseDetailComponent,
    BooksComponent,
    BooksDetailComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    ModalContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
