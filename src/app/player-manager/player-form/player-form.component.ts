import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player: Player;
  private _playerFirstname: string = "";
  private _playerLastname: string = "";
  private _playerAge: number;
  private _playerPosition: string = "";
  private _playerEquipe: number;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  save(){
    let player = {
      firstname: this._playerFirstname,
      lastname: this._playerLastname,
      age: this._playerAge,
      position: this._playerPosition,
      teamid: this._playerEquipe
    };
    this.playerService.postPlayer(player)
      .subscribe((player) => {
        this.player = player;
      })
    ;
    console.log(player);
  }
  onKeyupLastname(event){
    let value = event.target.value;
    this._playerLastname = value;
  }
  onKeyupFirstname(event){
    let value = event.target.value;
    this._playerFirstname = value;
  }
  onKeyupAge(event){
    let value = event.target.value;
    this._playerAge = value;
  }
  onKeyupPosition(event){
    let value = event.target.value;
    this._playerPosition = value;
  }
  onKeyupEquipe(event){
    let value = event.target.value;
    this._playerEquipe = value;
  }

}
