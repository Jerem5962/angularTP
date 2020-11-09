import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

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
  title: string = "App Component";
  paragrapheText: string = "Simple paragraphe";
  image: Image = {
    'src': "https://tse4.mm.bing.net/th?id=OIP.mOyJeMCn3CQWmysCkOAX7QHaE8&pid=Api&P=0&w=239&h=160",
    'alt': "loups"
  };
  color: string = "orange";

  students: string[] = ['gerard', 'rudy', 'andre'];
  students2: Student[] = [
    {name: 'noemie', grade: 18},
    {name: 'gerard', grade: 5},
    {name: 'thomas', grade: 10}
  ]

  // Méthodes
  constructor() {
    console.log("constructeur activé!")
    //setTimeout(() => this.updatUI(), 3000)

  }

  updatUI () {
    this.title += " updated !";
    this.image.src = "https://tse2.mm.bing.net/th?id=OIP.ELKEUyiT1r7FPI9viXNZ-AHaE8&pid=Api&P=0&w=239&h=160"
  }
}
