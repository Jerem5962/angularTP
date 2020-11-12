import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../image';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() badges: Image[];
  @Output() totalPriceBadge: EventEmitter<number> = new EventEmitter();
  totalPrice: number = 0;
  nombreBadgeSelected: number[] = [];
  priceBadge: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  viewBadge(event): void {
    let nbrBadge = this.nombreBadgeSelected;
    let value = event.target.value;
    if (event.toElement.checked && !nbrBadge.includes(value)) {
      nbrBadge.push(value);
    }
    if (!event.toElement.checked) {
      nbrBadge.splice(nbrBadge.indexOf(value), 1);
    }
    this.totalPrice = this.nombreBadgeSelected.length * this.priceBadge;
    this.totalPriceBadge.emit(this.totalPrice);

    console.log(this.totalPrice);
  }


}
