import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent
  },
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  {
    path: '**',
    component: StartScreenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
