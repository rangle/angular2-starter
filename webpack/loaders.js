'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

exports.localCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'app'),
  use: [
    'to-string-loader',
    'css-loader?-minimize',
    'postcss-loader',
  ],
  exclude: /node_modules/,
};

exports.globalCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'styles'),
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader?-minimize',
      'postcss-loader',
    ],
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
    use: 'file-loader',
    exclude: /node_modules/,
  };
}
