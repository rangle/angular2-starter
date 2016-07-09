import { RioCounterPageComponent } from '../containers/counter-page';
import { RioAboutPageComponent } from '../containers/about-page';

export const SAMPLE_APP_ROUTES = [{
  path: '',
  component: RioCounterPageComponent
}, {
  path: 'about',
  component: RioAboutPageComponent
}];
