import { Routes, RouterModule } from '@angular/router';

import { RioHelloPageComponent } from '../pages';

const SAMPLE_APP_ROUTES: Routes = [{
  path: '',
  component: RioHelloPageComponent
}];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(SAMPLE_APP_ROUTES);
