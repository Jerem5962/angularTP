import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../image';

const IMAGES = '/assets/images/';
@Component({
  selector: 'app-juvejersey',
  templateUrl: './juvejersey.component.html',
  styleUrls: ['./juvejersey.component.css']
})
export class JuvejerseyComponent implements OnInit {

  @Input() flocker: boolean = true;
  @Input() images: Image[];
  @Output() pathImage: EventEmitter <string> = new EventEmitter();

  image: string = IMAGES + '1.jpg';
  // @Input() flocking;
  constructor() { }

  ngOnInit(): void {
  }

  viewImage(event){
    this.image = event.path[0].attributes[1].value;
    this.pathImage.emit(this.image);
  }

}
