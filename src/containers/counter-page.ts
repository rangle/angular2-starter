import { Component} from '@angular/core';
import { RioCounterComponent, RioContainerComponent } from '../components';

import { CounterService } from '../services/counter-service';

@Component({
  selector: 'rio-counter-page',
  providers: [CounterService],
  directives: [RioCounterComponent, RioContainerComponent],
  template: `
    <rio-container>
      <h2 class="center caps">Counter</h2>
      <rio-counter
        [counter]="counterPage.counter"
        [increment]="counterPage.increment"
        [decrement]="counterPage.decrement">
      </rio-counter>
    </rio-container>
  `
})
export class RioCounterPageComponent {
  constructor(private counterPage: CounterService) { }
}
