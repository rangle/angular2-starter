import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProviders, routing } from '../routes/app.routes';
import { RioAppComponent } from './app.component';
import { RioHelloPageComponent } from '../pages';

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    RioAppComponent,
    RioHelloPageComponent,
  ],
  providers: [appRoutingProviders],
  bootstrap: [RioAppComponent],
})
export class RioAppModule {};
