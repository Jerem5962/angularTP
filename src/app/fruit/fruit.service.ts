import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fruit} from './fruit';

const API = "http://localhost:3000/fruits";
@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruits: string[] = ['peche', 'abricot', 'coco'];

  constructor(private http: HttpClient) { }

  getFruits(): string[] {
    return this.fruits;
  }
  getFruitsAjax(){
    return this.http.get(API);
  }
  // @ts-ignore
  postFruit(fruit: Fruit) {
    return this.http.post(API, fruit);
  }

}
