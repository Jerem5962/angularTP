import { Component, OnInit } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  images: Image[] = [
    {
      src: 'https://tse2.mm.bing.net/th?id=OIP.Hmrt6xzLibWaLdUefTnEWQHaDU&pid=Api&P=0&w=388&h=189',
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
  count = this.images.length;

  image: Image = {
    src: this.images[this.value].src,
    alt: this.images[this.value].alt
  };

  constructor() {}

  ngOnInit(): void {
    this.upgradeImg();
  }
  // tslint:disable-next-line:typedef
  imageDown() {
    this.value === 0 ? this.value = 4 : this.value--;
    this.image.src = this.images[this.value].src;
    this.image.alt = this.images[this.value].alt;
  }
  // tslint:disable-next-line:typedef
  imageUp(){
    this.value === 4 ? this.value = 0 : this.value++;
    this.image.src = this.images[this.value].src;
    this.image.alt = this.images[this.value].alt;
  }
  // tslint:disable-next-line:typedef
  upgradeImg(){
    setInterval(() => {
      this.image.src = this.images[this.value].src;
      this.image.alt = this.images[this.value].alt;
      if (this.value === 4) { this.value = 0; } this.value++;
    }, 5000);
  }
}
