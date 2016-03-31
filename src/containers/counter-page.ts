import { Component} from 'angular2/core';
import { RioCounter, RioContainer } from '../components';

@Component({
  selector: 'counter-page',
  directives: [RioCounter, RioContainer],
  template: `
    <rio-container>
      <h2 class="center caps">Counter</h2>
      <rio-counter
        [counter]="counter"
        [increment]="increment"
        [decrement]="decrement">
      </rio-counter>
    </rio-container>
  `
})
export class RioCounterPage {
  private counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
