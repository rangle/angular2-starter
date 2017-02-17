'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.angular = { // ships in ES6 format now
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: { compact: false },
    },
  ],
  include: /angular/,
  exclude: /node_modules/,
};

exports.tslint = {
  enforce: 'pre',
  test: /\.ts$/,
  use: 'tslint-loader',
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  use: '@ngtools/webpack',
};

exports.ts_JiT = {
  test: /\.ts$/,
  loaders: [
    'awesome-typescript-loader',
    'angular2-template-loader',
    'angular2-router-loader',
  ],
};

exports.istanbulInstrumenter = {
  enforce: 'post',
  test: /^(.(?!\.(spec|entry)))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  use: 'raw-loader',
};

exports.componentCss = {
  test: /\.css$/,
  include: /src\/app/,
  use: [
    'to-string-loader',
    'css-loader?-minimize',
    'postcss-loader',
  ],
  exclude: /node_modules/,
};

exports.globalCss = {
  test: /\.css$/,
  include: [
    /node_modules/,
    /src\/styles/,
  ],
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
      'postcss-loader',
    ],
  }),
};

exports.file = {
  test: /\.(png|jpe?g|gif|svg|ico|woff|woff2|ttf|eot)(\?.*)?$/,
  use: 'file-loader',
};
