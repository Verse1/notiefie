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
        name: 'Test User',
        university: 'Test University',
        email: 'test@test.com',
      })
      .end(async (err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'name');
        assert.property(res.body, 'university');
        assert.property(res.body, 'email');
        assert.property(res.body, 'createdAt');
        user = res.body;
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

  it('should change users name', (done) => {
    chai
      .request(server)
      .put('/api/users/' + user._id)
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
      .get('/api/users/' + user._id)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'name');
        assert.property(res.body, 'university');
        assert.property(res.body, 'email');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should create note for user', (done) => {
    chai
      .request(server)
      .post('/api/notes/create')
      .send({
        user: user._id,
        title: 'Test Note',
        text: 'Test Content',
        className: 'Test Class',
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
      .get(`/api/users/${user._id}/notes`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        done();
      });
  });

  it('should delete user notes', (done) => {
    chai
      .request(server)
      .delete(`/api/notes/${note._id}`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Note deleted');
        done();
      });
  });

  it('should return empty array if user has no notes', (done) => {
    chai
      .request(server)
      .get(`/api/users/${user._id}/notes`)
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
      .post(`/api/users/${user._id}/add-class`)
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
      .get(`/api/users/${user._id}/classes`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        done();
      });
  });

  it('should delete class from user', (done) => {
    chai
      .request(server)
      .delete(`/api/users/${user._id}/delete-class`)
      .send({ classID: classs._id })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class deleted from user');
        console.log(res.body);
        done();
      });
  });

  it('should delete class', (done) => {
    chai
      .request(server)
      .delete(`/api/classes/${classs._id}`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class deleted');
        done();
      });
  });

  it('should get users likes', (done) => {
    chai
      .request(server)
      .get(`/api/users/${user._id}/likes`)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isNumber(parseInt(res.body));
        done();
      });
  });

  it('should delete user', (done) => {
    chai
      .request(server)
      .delete('/api/users/' + user._id)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'User deleted');
        done();
      });
  });
});
