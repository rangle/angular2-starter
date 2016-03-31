'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('./server/webpack-dev-proxy');

const loaders = require('./webpack/loaders');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false
  })
];

const devPlugins = [];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
  entry: {
    app: './src/index.ts',
    shims: './shims/shims_for_IE',
    vendor: [
      'es5-shim',
      'es6-shim',
      'es6-promise',
      'angular2/bundles/angular2-polyfills',
      'angular2/bootstrap',
      'angular2/platform/browser',
      'angular2/platform/common_dom',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: {
      index: '/'
    },
    proxy: proxy(),
  },

  module: {
    preLoaders: [
      loaders.tslint
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
  },

  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')({
        browsers: ['ie >= 8', 'last 2 versions']
      }),
    ];
  }
};