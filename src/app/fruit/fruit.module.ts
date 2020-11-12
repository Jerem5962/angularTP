import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class FruitModule { }
