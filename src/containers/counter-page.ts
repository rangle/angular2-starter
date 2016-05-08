import { Component} from '@angular/core';
import { RioCounterComponent, RioContainerComponent } from '../components';

import { CounterService } from '../services/counter-service';

@Component({
  selector: 'sg-counter-page',
  providers: [CounterService],
  directives: [RioCounterComponent, RioContainerComponent],
  template: `
    <sg-rio-container>
      <h2 class="center caps">Counter</h2>
      <sg-rio-counter
        [counter]="counterPage.counter"
        [increment]="counterPage.increment"
        [decrement]="counterPage.decrement">
      </sg-rio-counter>
    </sg-rio-container>
  `
})
export class RioCounterPageComponent {
  constructor(private counterPage: CounterService) { }
}
