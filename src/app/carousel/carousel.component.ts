import { Component } from '@angular/core';
import {count} from 'rxjs/operators';
import {countOccurrences} from '@angular-devkit/build-angular/plugins/webpack/analytics';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: Image[] = [
    {
      src: 'https://tse2.mm.bing.net/th?id=OIP.Hmrt6xzLibWaLdUefTnEWQHaDU&pid=Api&P=0&w=388&h=175',
      alt: 'bateau'
    },
    {
      src: 'https://tse3.mm.bing.net/th?id=OIP.oAJ0c3ktyl3AyKwHJB3cmgHaEY&pid=Api&P=0&w=388&h=189',
      alt: 'voiture'
    },
    {
      src: 'https://tse3.mm.bing.net/th?id=OIP.VN8-S6fIfMk6jztKsjnrUgHaDN&pid=Api&P=0&w=388&h=189',
      alt: 'avion'
    },
    {
      src: 'https://tse3.mm.bing.net/th?id=OIP.LC98mTFwX3UtW-eWUdmODQHaE8&pid=Api&P=0&w=388&h=189',
      alt: 'velo'
    },
    {
      src: 'https://tse4.mm.bing.net/th?id=OIP.TuUOWrNvMlr946XdEwakdQHaK0&pid=Api&P=0&w=388&h=189',
      alt: 'trotinette'
    }
  ];
  value = 0;

  image: Image = {
    src: this.images[this.value].src,
    alt: this.images[this.value].alt
  };

  constructor() {
    setTimeout(() => {
      this.updateImg();
      this.value++;
    }, 3000
    );
  }

  // tslint:disable-next-line:typedef
  updateImg() {
    for (const image of this.images) {
      setTimeout(() => {
        this.image.src = image.src;
        this.image.alt = image.alt;
        console.log();
      }, 3000);
    }
  }
}
