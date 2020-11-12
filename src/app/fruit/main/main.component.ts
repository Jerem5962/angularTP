import { Component, OnInit } from '@angular/core';
import {FruitService} from '../fruit.service';
import {Fruit} from '../fruit';

@Component({
  selector: 'fruit-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  fruits: Fruit[];
  private _fruitName: string = '';
  constructor(private fruitService: FruitService) {
  }

  ngOnInit(): void {
    this.fruitService.getFruitsAjax()
      .subscribe((fruits: Fruit[]) => {
        this.fruits = fruits;
      });
  }
  save(){
    // requete ajax
    let fruit: Fruit = {
      name: this._fruitName,
      like: 0
    };
    this.fruitService.postFruit(fruit)
      .subscribe((fruit) => {
        console.log(fruit);
      })
    ;
  }
  onKeyup(event) {
    let value = event.target.value;
    this._fruitName = value;
  }
}
