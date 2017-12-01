'use strict';

const Path = require('path');
const Hapi = require('hapi');
const HapiReactViews = require('hapi-react-views');
const Vision = require('vision');

require('babel-register')({
  presets: ['es2015', 'react'],
});

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});

const hapiServer = async () => {
  await server.register(Vision);

  server.views({
    engines: { jsx: HapiReactViews },
    relativeTo: __dirname,
    path: '../src/main/frontend'
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: (req, h) => {
      return h.view('JobQueue');
    }
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

hapiServer();
