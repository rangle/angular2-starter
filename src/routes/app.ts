import { RouterConfig } from '@angular/router';

import { RioCounterPageComponent } from '../containers/counter-page';
import { RioRootPageComponent } from '../containers/root-page';
import { RioAppComponent } from '../containers/app';

export const SAMPLE_APP_ROUTES: RouterConfig = [{
  path: '',
  component: RioRootPageComponent
}];
