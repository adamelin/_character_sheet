import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {Routes, RouterModule} from '@angular/router';
import { PreloaderComponent } from './preloader/preloader.component';

const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent
  },
  {
    path: 'character-list/:id',
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
    CharacterListComponent,
    PreloaderComponent
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
