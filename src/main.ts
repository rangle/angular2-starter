import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
