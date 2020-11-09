import { Component } from '@angular/core';
interface Button {
  on: boolean;
  color: string;
  text: string;
}
@Component({
  selector: 'app-button-on-off',
  templateUrl: './button-on-off.component.html',
  styleUrls: ['./button-on-off.component.css']
})

export class ButtonOnOffComponent {

  button: Button = {
    on: true,
    color: 'green',
    text: 'ON'
  };

  constructor() {
  }

  turn = () => {
    if (this.button.on === false) {
      this.button.on = true;
      this.button.color = 'green';
      this.button.text = 'ON';
    } else {
      this.button.on = false;
      this.button.color = 'red';
      this.button.text = 'OFF';
    }
    console.log(this.button.on === true ? 1 : 0);
  }
}


