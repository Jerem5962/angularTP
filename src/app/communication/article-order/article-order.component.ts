import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-order',
  templateUrl: './article-order.component.html',
  styleUrls: ['./article-order.component.css']
})
export class ArticleOrderComponent implements OnInit {
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
