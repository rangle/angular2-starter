import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { RioAboutPageComponent } from './about-page';
import { RioCounterPageComponent } from './counter-page';

import {
  RioContainerComponent,
  RioNavigatorComponent,
  RioNavigatorItemComponent,
  RioLogoComponent
} from '../components';

@Component({
  selector: 'rio-sample-app',
  directives: [
    ROUTER_DIRECTIVES, RioNavigatorComponent, RioNavigatorItemComponent,
    RioLogoComponent, RioContainerComponent
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./sample-app.html'),
})
export class RioSampleAppComponent {};
