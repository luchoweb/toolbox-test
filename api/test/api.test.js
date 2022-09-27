const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const baseUri = '/files/data';

chai.use(chaiHttp);

describe(`/GET ${baseUri}`, () => {
  it('it should GET all the files as array and has the file and lines keys', (done) => {
    chai.request(server)
      .get(baseUri)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        chai.expect(res.body[0]).to.have.all.keys('file', 'lines');
        done();
      });
  });

  it('it should GET a file by name and has file and lines keys', (done) => {
    chai.request(server)
      .get(`${baseUri}?fileName=test9.csv`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        chai.expect(res.body).to.have.all.keys('file', 'lines');
        done();
      });
  });

  it('it should GET all the files names as array', (done) => {
    chai.request(server)
      .get(baseUri)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
