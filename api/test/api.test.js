const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const baseUri = '/files/data';

chai.use(chaiHttp);

describe(`/GET ${baseUri}`, () => {
  it('it should GET all the files as array', (done) => {
    chai.request(server)
      .get(baseUri)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('it should GET all the files with file and lines key', (done) => {
    chai.request(server)
      .get(baseUri)
      .end((err, res) => {
        chai.expect(res.body[0]).to.have.all.keys('file', 'lines');
        done();
      });
  });
});
