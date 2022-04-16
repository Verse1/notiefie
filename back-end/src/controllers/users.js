const users = require('../models/user');
const notes = require('../models/note');
const mongoose = require('mongoose');

module.exports = {
  // /users
  get: async (req, res) => {
    const user = await users.find();
    res.send(user);
  },

  post: async (req, res) => {
    const user = new users({
      name: req.body.name,
      university: req.body.university,
      email: req.body.email,
    });
    await user.save();
    res.send(user);
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
    const user = await users.find({ id: req.params.userID });

    users.name = req.body.name;
    await users.save();

    res.send(user);
  },

  delete: async (req, res) => {
    const user = await users.find({ id: req.params.userID });

    if (user) {
      await users.deleteOne({ id: req.params.id });
      res.send('user deleted');
    } else {
      res.status(404).send('user not found');
    }
  },

  // /users/:id/notes

  getNotes: async (req, res) => {
    const usersNotes = await notes.find({ user: { id: req.params.userID } });
    if (usersNotes.length > 0) {
      res.send(usersNotes);
    } else {
      res.status(404).send('user has no notes');
    }
  },

  deleteNotes: async (req, res) => {
    const usersNotes = await notes.find({ user: { id: req.params.userID } });

    if (usersNotes.length > 0) {
      await notes.deleteMany({ user: { id: req.params.userID } });
      res.send('Notes deleted');
    } else {
      res.status(404).send('user has no notes');
    }
  },

  // /users/:id/classes

  getClasses: async (req, res) => {
    const user = await users.find({ id: req.params.userID });
    if (user) {
      res.send(user.savedClasses);
    }
  },
  // /users/:id/likes

  getLikes: async (req, res) => {
    const user = await users.find({ id: req.params.userID });
    if (user) {
      res.send(user.likes);
    } else {
      res.status(404).send('user not found');
    }
  },

  addClass: async (req, res) => {
    const user = await users.find({ id: req.params.userID });

    const classs = await classes.find({ id: req.body.classID });

    user.savedClasses.push(classs);
    await users.save();
    res.send(user);
  },

  deleteClass: async (req, res) => {
    const user = await users.find({ id: req.params.userID });

    user.classes = user.classes.filter(
      (classID) => classID !== req.params.classID
    );
    await users.save();

    res.send(user);
  },
};
