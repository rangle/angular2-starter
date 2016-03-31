import { Component } from 'angular2/core';

@Component({
  selector: 'rio-form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>
  `
})
export class RioForm {};
