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

              res.body.should.have.property('data');
              res.body.data.should.be.a('array');
              done();
            }
          });
    });
    it('it should fail with not found', (done) => {
      chai.request(BASE_URL)
          .get('/api/user2s')
          .end((err, res) => {
            if(err) done(err)
            else {
              res.should.have.status(404);
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql(404);
              res.body.should.have.property('message').eql('NOT_FOUND');
              done();
            }
          });
    });
  });
  describe('/GET getOne', () => {
    // before(function() {
    //   this.skip();
    // });
    it('it should get one user', (done) => {
      chai.request(BASE_URL)
          .get('/api/users/123')
          .end((err, res) => {
            if(err) done(err)
            else {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql(200);
              res.body.should.have.property('message').eql('OK');

              res.body.should.have.property('data');
              res.body.data.should.be.a('object');
              done();
            }
          });
    });
  });
});