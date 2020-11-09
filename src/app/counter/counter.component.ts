import {Component} from "@angular/core";

const COUNTER_INIT_VALUE: number = 0;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = COUNTER_INIT_VALUE;

  constructor() {}

  increment = () => {
    this.count++;

    if (this.count > 20) this.count = COUNTER_INIT_VALUE;

  }

}
