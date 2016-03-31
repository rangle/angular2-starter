import { Component, Input } from 'angular2/core';

@Component({
  selector: 'rio-alert',
  template: `
    <div class="p2 bold"
      [ngClass]="{
        'bg-blue': status === 'info',
        'bg-yellow': status === 'warning',
        'bg-green': status === 'success',
        'bg-red': status === 'error',
        'white': status === 'info' || status === 'error'
      }">
      <ng-content></ng-content>
    </div>
  `
})
export class RioAlert {
  @Input() status = 'info';
};
