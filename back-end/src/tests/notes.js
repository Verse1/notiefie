const chai = require('chai');
const chaiHttp = require('chai-http');
const { it } = require('mocha');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;
const expect = chai.expect;
let note;
let jwt;

describe('Notes API', () => {
  it('should create user', (done) => {
    chai
      .request(server)
      .post('/api/users/create')
      .send({
        name: 'Test User',
        university: 'Test Some University',
        email: 'test@test.com',
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

  it('should create note', (done) => {
    chai
      .request(server)
      .post('/api/notes/create')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        className: 'Test Class 101',
        title: 'Test Note',
        user: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
        text: 'This is about test',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'title');
        assert.property(res.body, 'user');
        assert.property(res.body, 'text');
        assert.property(res.body, 'comments');
        assert.property(res.body, 'createdAt');
        note = res.body._id;
        done();
      });
  });

  it('should post comment', (done) => {
    chai
      .request(server)
      .post('/api/notes/' + note + '/comment')
      .set('Cookie', 'token=' + jwt + ';')
      .send({
        user: 'Test User',
        text: 'test comment',
      })

      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'text');
        assert.property(res.body, 'user');
        assert.property(res.body, 'likes');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should get comments', (done) => {
    chai
      .request(server)
      .get('/api/notes/' + note + '/comments')
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], 'user');
        assert.property(res.body[0], 'text');
        assert.property(res.body[0], 'likes');
        done();
      });
  });

  it('should return all notes', (done) => {
    chai
      .request(server)
      .get('/api/notes')
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], '_id');
        assert.property(res.body[0], 'className');
        assert.property(res.body[0], 'title');
        assert.property(res.body[0], 'user');
        assert.property(res.body[0], 'text');
        assert.property(res.body[0], 'comments');
        assert.property(res.body[0], 'likes');
        assert.property(res.body[0], 'createdAt');
        done();
      });
  });

  it('should not return any notes', (done) => {
    chai
      .request(server)
      .get('/api/notes/1')
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');

        done();
      });
  });

  it('should return note by id', (done) => {
    chai
      .request(server)
      .get('/api/notes/' + note)
      .set('Cookie', 'token=' + jwt + ';')
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
        done();
      });
  });

  it('should delete note by id', (done) => {
    chai
      .request(server)
      .delete('/api/notes/' + note)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Note deleted');
        done();
      });
  });

  it('should not find deleted note', (done) => {
    chai
      .request(server)
      .get('/api/notes/' + note)
      .set('Cookie', 'token=' + jwt + ';')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');
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
});
