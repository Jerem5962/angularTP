import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [PlayerListComponent, PlayerFormComponent],
  exports: [
    PlayerListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PlayerManagerModule { }
