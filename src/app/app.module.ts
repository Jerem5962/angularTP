import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonOnOffComponent } from './button-on-off/button-on-off.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PadComponent } from './pad/pad.component';
import {CommunicationModule} from './communication/communication.module';
import {JuvejerseyModule} from './juvejersey/juvejersey.module';
import {FruitModule} from './fruit/fruit.module';
import {PlayerManagerModule} from './player-manager/player-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonOnOffComponent,
    CarouselComponent,
    PadComponent
  ],
  imports: [
    BrowserModule,
    CommunicationModule,
    JuvejerseyModule,
    FruitModule,
    PlayerManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
