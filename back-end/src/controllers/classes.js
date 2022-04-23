const classes = require('../models/class');

module.exports = {
  get: async (req, res) => {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    try {
      const classess = await classes.find({}).limit(limit).skip(offset);
      res.send(classess);
    }
    catch (err) {
      res.status(500).send(err);
    }
  },

  post: async (req, res) => {
    try {
      const c = new classes({
        className: req.body.className,
        classCode: req.body.classCode,
        university: req.body.university,
      });
      await c.save();
      res.send(c);
    } catch (err) {
      console.log(err);
    }
  },

  getById: async (req, res) => {
    try {
      const c = await classes.findById(req.params.id);
      if (c) {
        res.send(c);
      } else {
        res.status(404).send('Class not found');
      }
    } catch (err) {
      res.status(404).send('Class not found');
    }
  },

  put: async (req, res) => {
    try {
      const c = await classes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.send(c);
    } catch (err) {
      res.status(404).send('Class not found');
    }
  },

  delete: async (req, res) => {
    try {
      const c = await classes.findById(req.params.id);

      if (c) {
        await classes.deleteOne({ id: req.params.id });
        res.send('Class deleted');
      } else {
        res.status(404).send('Class not found');
      }
    } catch (err) {
      console.log(err);
    }
  },
};
