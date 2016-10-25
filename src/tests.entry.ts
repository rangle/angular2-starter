'use strict';

import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';

import 'ts-helpers';

const testContext = (require as {context?: Function})
  .context('./', true, /^(.(?!tests\.entry))*\.ts$/);

testContext('./main.ts');

testContext.keys().forEach(
  key => {
    if (/\.spec\.ts$/.test(key)) {
      testContext(key);
    }
  });
