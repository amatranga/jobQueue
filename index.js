'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'dist', 'frontend')
    }
  }
});

const hapiServer = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      file: 'index.html'
    }
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

hapiServer();
module.exports = server;
