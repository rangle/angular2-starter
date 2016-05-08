import { Component, Input } from '@angular/core';
import { RioButtonComponent } from '../button';

@Component({
  selector: 'sg-rio-counter',
  template: `
    <div class="flex">
      <sg-rio-button
        className="bg-black col-2"
        (onClick)="decrement()">
        -
      </sg-rio-button>

      <div class="flex-auto flex-center center h1">
        {{ counter }}
      </div>

      <sg-rio-button className="col-2"
        (onClick)="increment()">
        +
      </sg-rio-button>
    </div>
  `,
  directives: [RioButtonComponent]
})
export class RioCounterComponent {
  @Input() counter: number;
  @Input() increment: () => void;
  @Input() decrement: () => void;
};
