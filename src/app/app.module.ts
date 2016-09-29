import {
  NgModule
} from '@angular/core';

import {
  routing,
  appRoutingProviders
} from '../routes/app.routes';

import {RioHelloPageComponent} from '../pages';
import {RioAppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RioAppComponent,
    RioHelloPageComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [RioAppComponent]
})
export class RioAppModule {};
