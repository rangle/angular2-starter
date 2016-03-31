import { Component } from 'angular2/core';

@Component({
  selector: 'rio-navigator',
  template: `
    <nav class="flex items-center p1 bg-white border-bottom">
      <ng-content></ng-content>
    </nav>
  `
})
export class RioNavigator {};
