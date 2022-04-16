const fake = require('../fake');
const classs = require('../models/class');
const faker = require('faker');

module.exports = {
  get: async (req, res) => {
    const classes = await Class.find();
    res.send(classes);
  },

  post: async (req, res) => {
    const c = new classs({
      id: faker.datatype.uuid(),
      className: req.body.name,
      classCode: req.body.classCode,
      university: req.body.university,
      numEnrolled: 0,
    });
    await c.save();
    res.send(c);
  },

  getById: async (req, res) => {
    const c = await Class.find({ id: req.params.classID });
    if (c) {
      res.send(c);
    } else {
      res.status(404).send('Class not found');
    }
  },

  put: async (req, res) => {
    const c = await Class.find({ id: req.params.classID });
    c.className = req.body.className;

    res.send(c);
  },

  delete: async (req, res) => {
    const c = await Class.find({ id: req.params.classID });

    if (c) {
      await Class.deleteOne({ id: req.params.classID });
      res.send('Class deleted');
    } else {
      res.status(404).send('Class not found');
    }
  },
};
