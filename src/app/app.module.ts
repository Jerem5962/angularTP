import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonOnOffComponent } from './button-on-off/button-on-off.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonOnOffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
