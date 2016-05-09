import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/jasmine-patch';
import 'ts-helpers';

let testContext = (<{ context?: Function }>require).context(
  './',
  true,
  /\.test\.ts/);
testContext.keys().forEach(testContext);
