import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../interfaces';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];
  total: number;
  // tslint:disable-next-line:no-output-native
  @Output() changebis: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onChange(event: any, price: number) {
    let qty = event.target.value;
    if (qty !== '') { this.total = (qty * price); }
    console.log(this.total);
    this.changebis.emit();
  }

}
