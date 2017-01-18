'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './src/main.ts',
    vendor: './src/vendor.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ?
      '[name].[chunkhash].js' : '[name].js',
    publicPath: '/',
    sourceMapFilename: isProduction ?
      '[name].[chunkhash].js.map' : '[name].js.map',
    chunkFilename: isProduction ?
      '[name].chunk.[chunkhash].js' : '[name].js',
  },

  devtool: isProduction ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: {},
  },

  module: {
    rules: [
      loaders.angular,
      loaders.tslint,
      loaders.ts_JiT,
      loaders.html,
      loaders.globalCss,
      loaders.localCss,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },
};
