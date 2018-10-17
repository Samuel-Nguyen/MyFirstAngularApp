import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Lession2Component } from './lession2/lession2.component';
import { Lession1Component } from './lession1/lession1.component';

@NgModule({
  declarations: [
    AppComponent,
    Lession2Component,
    Lession1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
