const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;

describe('Users API', () => {
  it('should return all users', (done) => {
    chai
      .request(server)
      .get('/api/users')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], '_id');
        assert.property(res.body[0], 'name');
        assert.property(res.body[0], 'university');
        assert.property(res.body[0], 'email');
        assert.property(res.body[0], 'createdAt');
        done();
      });
  });

  it('should not return any users', (done) => {
    chai
      .request(server)
      .get('/api/users/1')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'User not found');

        done();
      });
  });

  it('should create user', (done) => {
    chai
      .request(server)
      .post('/api/users/create')
      .send({
        name: 'Test',
        university: 'Test University',
        email: 'test@test.com',
        password: 'test',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'id');
        assert.property(res.body, 'name');
        assert.property(res.body, 'university');
        assert.property(res.body, 'email');
        assert.property(res.body, 'password');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  // it('should change users name', (done) => {
  //   chai
  //     .request(server)
  //     .put('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6')
  //     .send({
  //       name: 'Test2',
  //     })
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.body.name, 'Test2');
  //       done();
  //     });
  // });

  // it('should return user by id', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.property(res.body, 'id');
  //       assert.property(res.body, 'name');
  //       assert.property(res.body, 'university');
  //       assert.property(res.body, 'email');
  //       assert.property(res.body, 'password');
  //       assert.property(res.body, 'createdAt');
  //       done();
  //     });
  // });
  // it('should get all users notes', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/notes')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.isArray(res.body);
  //       done();
  //     });
  // });

  // it('should delete user notes', (done) => {
  //   chai
  //     .request(server)
  //     .delete(
  //       '/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/notes/2ca5a3e5-e774-40ee-9c2d-b7f8c7081b01'
  //     )
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.text, 'Note deleted');
  //       done();
  //     });
  // });

  // it('should not return if user has no notes', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/notes')
  //     .end((err, res) => {
  //       assert.equal(res.status, 404);
  //       assert.equal(res.text, 'User has no notes');
  //       done();
  //     });
  // });

  // it('should return users classes', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/classes')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.isArray(res.body);
  //       done();
  //     });
  // });

  // it('should delete user by id', (done) => {
  //   chai
  //     .request(server)
  //     .delete('/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6')
  //     .end((err, res) => {
  //       assert.equal(res.status, 200);
  //       assert.equal(res.text, 'User deleted');
  //       done();
  //     });
  // });
});
