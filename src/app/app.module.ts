import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CharactersComponent } from './characters/characters.component';
import { MatCardModule } from '@angular/material/card';
import { CharacterListComponent } from './character-list/character-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './character-details/character-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
