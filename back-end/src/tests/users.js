const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const mongoose = require('mongoose');
const users = require('../models/user');
const { it } = require('mocha');

let user;
let note;
let classs;

chai.use(chaiHttp);
const assert = chai.assert;

describe('Users API', () => {
  it('should create user', (done) => {
    chai
      .request(server)
      .post('/api/users/create')
      .send({
        name: 'Test Some User',
        university: 'Test Some University',
        email: 'testsome@test.com',
      })
      .end(async (err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body.user, 'name');
        assert.property(res.body.user, 'university');
        assert.property(res.body.user, 'email');
        assert.property(res.body.user, 'createdAt');
        user = res.body.user;
        jwt = res.body.token;
        done();
      });
  });

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

  it('should change users name', (done) => {
    chai
      .request(server)
      .put('/api/users/user')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        name: 'Test2',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.name, 'Test2');
        done();
      });
  });

  it('should return user by id', (done) => {
    chai
      .request(server)
      .get('/api/users/user')
      .set('Cookie', 'token=' + jwt + ';')
      .end(async (err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'name');
        assert.property(res.body, 'university');
        assert.property(res.body, 'email');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should create class', (done) => {
    chai
      .request(server)
      .post('/api/classes/create')
      .send({
        className: 'Test Class 101',
        classCode: 'Test-101',
        university: 'Test University',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'classCode');
        assert.property(res.body, 'university');
        assert.property(res.body, 'createdAt');
        classs = res.body._id;
        done();
      });
  });

  it('should create note for user', (done) => {
    chai
      .request(server)
      .post('/api/notes/create')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        user: user._id,
        title: 'Test Note',
        text: 'Test Content',
        className: 'Test Class 101',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'title');
        assert.property(res.body, 'text');
        assert.property(res.body, 'createdAt');
        note = res.body;
        done();
      });
  });

  it('should get all users notes', (done) => {
    chai
      .request(server)
      .get(`/api/users/user/notes`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        done();
      });
  });

  it('should like note', (done) => {
    chai
      .request(server)
      .put('/api/notes/' + note._id + '/like')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        liked: true,
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'text');
        assert.property(res.body, 'comments');
        assert.property(res.body, 'likes');
        assert.property(res.body, 'createdAt');
        assert.equal(res.body.likes, 2);
        done();
      });
  });

  it('should unlike note', (done) => {
    chai
      .request(server)
      .put('/api/notes/' + note._id + '/like')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        liked: false,
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'text');
        assert.property(res.body, 'comments');
        assert.property(res.body, 'likes');
        assert.property(res.body, 'createdAt');
        assert.equal(res.body.likes, 1);
        done();
      });
  });

  it('should delete user notes', (done) => {
    chai
      .request(server)
      .delete(`/api/notes/${note._id}`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Note deleted');
        done();
      });
  });

  it('should return empty array if user has no notes', (done) => {
    chai
      .request(server)
      .get(`/api/users/user/notes`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, []);
        done();
      });
  });

  it('should create test class for user', (done) => {
    chai
      .request(server)
      .post('/api/classes/create')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        user: user._id,
        className: 'Test Class',
        classCode: 'Test Code',
        university: 'Test University',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'createdAt');
        classs = res.body;
        done();
      });
  });

  it('should add class for user', (done) => {
    chai
      .request(server)
      .post(`/api/users/user/add-class`)
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        classID: classs._id,
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class added to user');
        done();
      });
  });

  it('should return users classes', (done) => {
    chai
      .request(server)
      .get(`/api/users/user/classes`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        done();
      });
  });

  it('should delete class from user', (done) => {
    chai
      .request(server)
      .delete(`/api/users/user/delete-class`)
      .set('Cookie', 'token=' + jwt + ';')
      .send({ classID: classs._id })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class deleted from user');
        done();
      });
  });

  it('should delete class', (done) => {
    chai
      .request(server)
      .delete(`/api/classes/${classs._id}`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class deleted');
        done();
      });
  });

  it('should get users likes', (done) => {
    chai
      .request(server)
      .get(`/api/users/user/likes`)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isNumber(parseInt(res.body));
        done();
      });
  });

  it('should delete user', (done) => {
    chai
      .request(server)
      .delete('/api/users/user')
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'User deleted');
        done();
      });
  });

  it('should not return any users', (done) => {
    chai
      .request(server)
      .get('/api/users/user')
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'User not found');
        done();
      });
  });
});
