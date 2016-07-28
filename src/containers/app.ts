import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'rio-app',
  directives: [
    ROUTER_DIRECTIVES,
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./app.html'),
})
export class RioAppComponent {};
