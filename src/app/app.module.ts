import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavComponent } from './components/nav/nav.component';
import { ClickerComponent } from './components/clicker/clicker.component';
import './include/include';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
