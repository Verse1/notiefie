const users = require('../models/user');
const notes = require('../models/note');
const classes = require('../models/class');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


module.exports = {
  // /users
  get: async (req, res) => {
    try {
      const user = await users.find();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  post: async (req, res) => {
    const user = new users({
      name: req.body.name,
      university: req.body.university,
      email: req.body.email,
    });

    if (users.exists({ email: req.body.email })) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.json({ user, token });
    } else {
      try {
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ user, token });
      } catch (err) {
        console.log(err);
      }
    }
  },

  // /users/:id
  getById: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(404).send('User not found');
    }
  },

  put: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);

      user.name = req.body.name;
      await user.save();

      res.send(user);
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    const user = await users.findById(req.params.id);

    try {
      if (user) {
        await users.deleteOne({ id: req.params.id });
        res.send('User deleted');
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  // /users/:id/notes

  getNotes: async (req, res) => {
    try {
      const usersNotes = await notes.find({ user: req.params.id });
      if (usersNotes) {
        res.send(usersNotes);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  // /users/:id/classes

  getClasses: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);
      if (user) {
        res.send(user.savedClasses);
      }
    } catch (err) {
      console.log(err);
    }
  },
  // /users/:id/likes

  getLikes: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);
      if (user) {
        res.send(user.likes.toString());
      } else {
        res.status(404).send('user not found');
      }
    } catch (err) {
      console.log(err);
    }
  },

  addClass: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);

      const classs = await classes.find({ id: req.body.classID });

      user.savedClasses.push(classs);
      await user.save();
      res.send('Class added to user');
    } catch (err) {
      console.log(err);
    }
  },

  deleteClass: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);

      const classs = await classes.find({ id: req.body.classID });

      user.savedClasses.pull(classs);
      await user.save();
      res.send('Class deleted from user');
    } catch (err) {
      res.status(404).send('Class not found');
      console.log(err);
    }
  },
};
