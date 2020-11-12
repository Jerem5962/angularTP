import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  quantite = 0;
  @Output() qty = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event) {
    this.quantite = event.target.value;
    this.qty.emit(this.quantite);
  }

}
