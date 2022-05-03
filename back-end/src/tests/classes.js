const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const mongoose = require('mongoose');

let classs;

chai.use(chaiHttp);
const assert = chai.assert;

describe('Classes API', () => {
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

  it('should return all classes', (done) => {
    chai
      .request(server)
      .get('/api/classes')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isArray(res.body);
        assert.property(res.body[0], '_id');
        assert.property(res.body[0], 'className');
        assert.property(res.body[0], 'classCode');
        assert.property(res.body[0], 'university');
        done();
      });
  });

  it('should not return any classes', (done) => {
    chai
      .request(server)
      .get('/api/classes/1')
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Class not found');

        done();
      });
  });

  it('should return class by id', (done) => {
    chai
      .request(server)
      .get('/api/classes/' + classs)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'classCode');
        assert.property(res.body, 'university');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should update class', (done) => {
    chai
      .request(server)
      .put('/api/classes/' + classs)
      .send({
        className: 'Test Class 102',
        classCode: 'Test-102',
        university: 'Test College',
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, '_id');
        assert.property(res.body, 'className');
        assert.property(res.body, 'classCode');
        assert.property(res.body, 'university');
        assert.property(res.body, 'createdAt');
        done();
      });
  });

  it('should delete class by id', (done) => {
    chai
      .request(server)
      .delete('/api/classes/' + classs)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'Class deleted');
        done();
      });
  });

  it('should not find deleted class', (done) => {
    chai
      .request(server)
      .get('/api/classes/' + classs)
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.text, 'Class not found');
        done();
      });
  });
});
