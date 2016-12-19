'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.angular = { // ships in ES6 format now
  test: /\.js$/,
  loader: 'babel-loader',
  include: /angular/,
  exclude: /node_modules/,
  query: {
    compact: false,
  },
};

exports.tslint = {
  enforce: 'pre',
  test: /\.ts$/,
  loader: 'tslint-loader',
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  loader: '@ngtools/webpack',
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
  test: /^(.(?!\.spec))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
};

exports.localCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'app'),
  loader: 'to-string-loader!css-loader?-minimize!postcss-loader',
  exclude: /node_modules/,
};

exports.globalCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'styles'),
  loader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader?-minimize!postcss-loader',
  }),
  exclude: /node_modules/,
};

exports.svg = makeFileLoader(/\.svg$/);
exports.eot = makeFileLoader(/\.eot$/);
exports.woff = makeFileLoader(/\.woff$/);
exports.woff2 = makeFileLoader(/\.woff2$/);
exports.ttf = makeFileLoader(/\.ttf$/);

function makeFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'file-loader',
    exclude: /node_modules/,
  };
}
