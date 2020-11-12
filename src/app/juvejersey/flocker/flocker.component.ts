import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';
import {Image} from '../image';
const CLASS = 'selected';
@Component({
  selector: 'app-flocker',
  templateUrl: './flocker.component.html',
  styleUrls: ['./flocker.component.css']
})
export class FlockerComponent implements OnInit {

  activePlayer: string = '';
  activeFlock: string = '';
  idName: string;
  flocker = false;
  @Output() activeChange: EventEmitter<string[]> = new EventEmitter();
  @Output() floking: EventEmitter<boolean> = new EventEmitter();
  @Input() images: Image[] = [];
  constructor() { }

  ngOnInit(): void {
    this.floking.emit(this.flocker);
  }
  // tslint:disable-next-line:typedef
  isSelected(event: any, flocker: boolean){
    this.flocker = flocker;
    this.floking.emit(this.flocker);
    console.log(event.path[1].id, this.flocker);
    this.idName = event.path[1].id;
    if (this.idName === 'players'){
      this.activeFlock = '';
      this.activePlayer = CLASS;
    }
    if (this.idName === 'flock'){
      this.activePlayer = '';
      this.activeFlock = CLASS;
    }
    this.activeChange.emit([this.activeFlock, this.activePlayer]);
  }

}
