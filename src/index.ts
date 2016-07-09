import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import '../shims/shims_for_IE';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RioSampleAppComponent } from './containers/sample-app';
import { provideRouter } from '@angular/router';
import { SAMPLE_APP_ROUTES } from './routes/sample-app';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  bootstrap(RioSampleAppComponent, [
    provideRouter(SAMPLE_APP_ROUTES),
  ]);
}
