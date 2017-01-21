'use strict';
const superstatic = require('superstatic').server;

const options = {
  port: process.env.PORT || 8080,
  host: '127.0.0.1',
  config: {
    public: './dist',
    rewrites: [
      { source: '**', destination: '/index.html' },
    ],
  },
  cwd: __dirname,
  gzip: true,
};

const app = superstatic(options);

app.listen(err => {
  err ? console.error(err) : console.log('Superstatic now serving...');
});
