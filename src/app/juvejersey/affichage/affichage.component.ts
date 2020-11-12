import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../image';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  qtyBadge: number = 0;
  totalPriceVar: number;
  @Input() images: Image[] = [];
  @Input() badges: Image[] = [];
  @Input() price: number;
  @Input() qty: number;
  constructor() { }

  ngOnInit(): void {
  }
  qtyBadgeParent(event){
    this.qtyBadge = event;
  }
  totalPrice(event){
    this.totalPriceVar = event;
  }

}
