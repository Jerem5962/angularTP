import { Component } from '@angular/core';
import { Article } from './communication/interfaces';
import { Image } from './juvejersey/image';

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // proprietés
  title = 'App Component';
  paragrapheText = 'Simple paragraphe';
  image: Image = {
    src: 'https://tse4.mm.bing.net/th?id=OIP.mOyJeMCn3CQWmysCkOAX7QHaE8&pid=Api&P=0&w=239&h=160'
  };
  color = 'orange';

  students: string[] = ['gerard', 'rudy', 'andre'];
  students2: Student[] = [
    {name: 'noemie', grade: 18},
    {name: 'gerard', grade: 5},
    {name: 'thomas', grade: 10}
  ];
  articles: Article[] = [
    {name: 'paire de Nike', price: 120.50},
    {name: 'Tracteur de course', price: 570.00},
    {name: 'formation Angular', price: 6300.00},
  ];
  images: Image[] = [
    {src: '1.jpg'},
    {src: '2.jpg'},
    {src: '3.jpg'},
    {src: '4.jpg'},
  ];
  badges: Image[] = [
    {src: 'assets/images/badge1.jpg'},
    {src: 'assets/images/badge2.png'},
    {src: 'assets/images/badge3.jpg'},
  ];
  price = 130;
  // Méthodes
  constructor() {
    console.log('constructeur activé!');
    // setTimeout(() => this.updatUI(), 3000)

  }

  // tslint:disable-next-line:typedef
  updatUI() {
    this.title += ' updated !';
    this.image.src = 'https://tse2.mm.bing.net/th?id=OIP.ELKEUyiT1r7FPI9viXNZ-AHaE8&pid=Api&P=0&w=239&h=160';
  }
  // tslint:disable-next-line:typedef
  computeTotal(){
    console.log('Mon enfant me parle');
  }
}
