'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

require('babel-register')({
  presets: ['es2015', 'react'],
});

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

const hapiServer = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../public'),
        index: true
      }
    }
  });

  await server.start(err => {
    if (err) {
      throw err;
    }
  });
  console.log(`Server running at ${server.info.uri}`);
};

hapiServer();
