import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from "./header/search/search.component";
import { CollectionComponent } from "./collection/collection.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { AngularFireModule } from "@angular/fire";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BookitemComponent } from './book-list/bookitem/bookitem.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent
  },
  {
    path: "collection", 
    component: CollectionComponent
  }
];

const firebaseConfig = {
    apiKey: "AIzaSyAJ0qL3wD10CT8UpNFJIM8Ln70EosBzVuw",
    authDomain: "book-finder-d7611.firebaseapp.com",
    databaseURL: "https://book-finder-d7611.firebaseio.com",
    projectId: "book-finder-d7611",
    storageBucket: "book-finder-d7611.appspot.com",
    messagingSenderId: "696933635669",
    appId: "1:696933635669:web:8f3a68327018bb9582e6dc",
    measurementId: "G-Z1CVRMKTGE"
  };


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    BookitemComponent,
    HeaderComponent
  ],
  imports: [
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
