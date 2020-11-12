import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuvejerseyComponent } from './juvejersey/juvejersey.component';
import { FlockerComponent } from './flocker/flocker.component';
import { BadgeComponent } from './badge/badge.component';
import { QuantityComponent } from './quantity/quantity.component';
import { TotalComponent } from './total/total.component';
import { AffichageComponent } from './affichage/affichage.component';



@NgModule({
  declarations: [JuvejerseyComponent, FlockerComponent, BadgeComponent, QuantityComponent, TotalComponent, AffichageComponent],
  exports: [
    JuvejerseyComponent,
    AffichageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JuvejerseyModule {

}
