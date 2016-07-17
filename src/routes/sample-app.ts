import { RouterConfig } from '@angular/router';

import { RioCounterPageComponent } from '../containers/counter-page';
import { RioAboutPageComponent } from '../containers/about-page';

export const SAMPLE_APP_ROUTES: RouterConfig = [{
  path: '',
  redirectTo: 'counter',
  pathMatch: 'full'
}, {
  path: 'counter',
  component: RioCounterPageComponent
}, {
  path: 'about',
  component: RioAboutPageComponent
}];
