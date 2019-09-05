const BASE_URL = 'http://localhost:8080';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('API: user', () => {
  beforeEach(async() => {
    
  });
  describe('/POST create', () => {
    before(function() {
      this.skip();
    });
    it('it should create user', async() => {
      const res = await chai.request(BASE_URL)
                            .post('/api/users')
                            .send({
                              "name": "Test User",
                              "email": "testUser@masdr.com",
                              "mobileNumber": "249922281111",
                              "password": "123456",
                              "role": 0,
                              "company": {
                                  "name": "Test co",
                                  "address": "Test Address"
                              }
                          });
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('status').eql(200);
      res.body.should.have.property('message').eql('OK');
    });
  });
  describe('/GET getList', () => {
    // before(function() {
    //   this.skip();
    // });
    it('it should get users', (done) => {
      chai.request(BASE_URL)
          .get('/api/users')
          .end((err, res) => {
            if(err) done(err)
            else {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql(200);
              res.body.should.have.property('message').eql('OK');
              done();
            }
          });
    });
  });
  describe('/GET getOne', () => {
    before(function() {
      this.skip();
    });
    it('it should get one user', (done) => {
      chai.request(BASE_URL)
          .post('/api/v1/users/resendsms')
          .send({ phone: '+249922281440'})
          .end((err, res) => {
            if(err) done(err)
            else {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql(200);
              res.body.should.have.property('message').eql('OK');
              done();
            }
          });
    });
  });
});