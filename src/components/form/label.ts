import { Component } from 'angular2/core';

@Component({
  selector: 'rio-label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `
})
export class RioLabel {};
