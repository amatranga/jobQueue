'use strict';

const Code = require('code');
const Lab = require('lab');

// Test shortcuts

const lab = exports.lab = Lab.script();
const before = lab.before;
const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;

describe('Basic server', () => {
  const server = require('../../index');
  it('Returns 200 OK for GET requests to /', async() => {
    const options = {
      method: 'GET',
      url: '/'
    };
    const res = await server.inject(options);
    expect(res.statusCode).to.equal(200);
  });

  it('Returns 200 OK for GET requests to wildCard routes', async() => {
    const wildCardOptions = {
      method: 'GET',
      url: '/helloWorld'
    };
    const wildCardRes = await server.inject(wildCardOptions);
    expect(wildCardRes.statusCode).to.equal(200);
  });
});
