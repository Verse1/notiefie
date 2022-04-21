const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
const assert = chai.assert;
let note;

describe('Notes API', () => {
  it('should create note', (done) => {
    chai
      .request(server)
      .post('/api/notes/create')
      .send({
        className: 'Test 101',
        title: 'Test Note',
        user: '2005b873-dd55-4ebe-8165-76ce6d9b83a6',
        text: 'This is about test',
        comments: [
          {
            user: '021f8995-a864-4fa8-a101-6a6aa3ffd198',
            comment: 'test comment 1',
            likes: 10,
          },
          {
            user: '6d946621-602c-4b78-bcb8-71689827034b',
            comment: 'test comment 2',
            likes: 20,
          },
        ],
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

  it('should return all notes', (done) => {
    chai
      .request(server)
      .get('/api/notes')
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
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');

        done();
      });
  });

  it('should delete note by id', (done) => {
    chai
      .request(server)
      .delete('/api/notes/' + note)
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
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Note not found');
        done();
      });
  });
});
