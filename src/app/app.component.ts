import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rio-app',
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./app.component.html'),
})
export class RioAppComponent {};
