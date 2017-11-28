const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require('../../index.js');

lab.experiment('Server Validation Test', () => {
  lab.test('GET to / should return 200', done => {
    const options = {
      method: 'GET',
      url: '/'
    };
    server.inject(options, res => {
      Code.expect(res.statusCode).to.equal(200);  // Expect http response statusCode to be 200 ('Ok')
      server.stop();
      done();
    });
  });
});
