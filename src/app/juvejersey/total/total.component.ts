import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  total = 0;
  @Input() qty: number = 0;
  @Input() price: number;
  @Input() totalPriceBadge: number = 0;
  @Output() totals: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  countTotal(){
    this.total = this.qty * this.price;
    this.totals.emit(this.total);
    console.log('quantité: ', this.qty, ' prix: ', this.price, ' badge ', this.totalPriceBadge);
  }

}
