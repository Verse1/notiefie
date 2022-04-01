const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;

describe('Users API', () => {
  describe('Get all users', () => {
    it('should return all users', (done) => {
      chai
        .request(server)
        .get('/api/users')
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.isArray(res.body);
          assert.property(res.body[0], 'id');
          assert.property(res.body[1], 'name');
          assert.property(res.body[2], 'email');
        });
      done();
    });
  });

  describe('Get user by id', () => {
    it('should return user by id', (done) => {
      chai
        .request(server)
        .get('/api/users/1')
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'id');
          assert.property(res.body, 'name');
          assert.property(res.body, 'email');
        });
      done();
    });
  });
    
    describe('Delete user by id', () => {
        it('should delete user by id', (done) => {
            chai
                .request(server)
                .delete('/api/users/1')
                .get('/api/users/1')
                .end((err, res) => {
                    assert.equal(res.status, 404);
                });
            done();
        });
    });

  describe('Create user', () => {
    it('should create user', (done) => {
      chai
        .request(server)
        .post('/api/users/create')
        .send({
          name: 'Test',
          email: 'test@test.com',
          password: 'test',
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'id');
          assert.property(res.body, 'name');
          assert.property(res.body, 'email');
        });
      done();
    });
  });
});
