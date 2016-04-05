import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';

import {
  RioContainer,
  RioNavigator,
  RioNavigatorItem,
  RioLogo
} from '../components';

@Component({
  selector: 'rio-sample-app',
  directives: [
    ROUTER_DIRECTIVES, RioNavigator, RioNavigatorItem,
    RioLogo, RioContainer
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <rio-navigator>
        <rio-navigator-item [mr]=true>
          <rio-logo></rio-logo>
        </rio-navigator-item>
        <rio-navigator-item [mr]=true>
          <a [routerLink]="['Counter']"
            class="text-decoration-none">Counter</a>
        </rio-navigator-item>
        <rio-navigator-item>
          <a [routerLink]="['About']"
            class="text-decoration-none">About Us</a>
        </rio-navigator-item>
        <div class="flex flex-auto"></div>
      </rio-navigator>
      <rio-container>
        <router-outlet></router-outlet>
      </rio-container>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPage
  }
])
export class RioSampleApp {

};
