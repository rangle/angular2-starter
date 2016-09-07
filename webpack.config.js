'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

module.exports = {
  entry: {
    app: './src/index.ts',
    // and vendor files separate
    vendor: [
      '@angular/core',
      '@angular/compiler',
      '@angular/common',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'core-js',
      'rxjs',
      'immutable',
      'zone.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  postcss: postcssInit,

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: {},
  },

  module: {
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/],
  },
};
