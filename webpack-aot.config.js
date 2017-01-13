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
  { test: /\.css$/, loader: 'raw-loader', include: /node_modules/ },
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
    mainPath: 'src/main.ts',
  }),
]);
if (!JiT) {
  console.log('AoT: True');
}
module.exports = webpackConfig;
