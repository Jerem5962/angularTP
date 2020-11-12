import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';

const API = "http://localhost:3000/players";
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }
  getPlayers(){
    return this.http.get(API);
  }
  postPlayer(player: Player){
    return this.http.post(API, player);
  }
  updatePlayer(player: Player){
    return this.http.patch(API, player);
  }
}
