'use strict';
const webpackConfig = require('./webpack.config.js');
const loaders = require('./webpack/loaders');
const AotPlugin =  require('@ngtools/webpack').AotPlugin;

const ENV = process.env.npm_lifecycle_event;
const JiT = ENV === 'build:jit';
webpackConfig.module.rules = [
  loaders.tslint,
  loaders.ts,
  loaders.html,
  loaders.globalCss,
  loaders.localCss,
  loaders.svg,
  loaders.eot,
  loaders.woff,
  loaders.woff2,
  loaders.ttf,
];

webpackConfig.plugins = webpackConfig.plugins.concat([
  new AotPlugin({
    tsConfigPath: './tsconfig-aot.json',
    entryModule: 'src/app/app.module#AppModule',
  }),
]);
if (!JiT) {
  console.log('AoT: True');
}
module.exports = webpackConfig;
