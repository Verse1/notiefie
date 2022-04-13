const fake = require('../fake');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const User = mongoose.model('User', User);
const Note = mongoose.model('Note', Note);
const Class = mongoose.model('Class', Class);
const faker = require('faker');

module.exports = {
  // /users
  get: async (req, res) => {
    const users = await User.find()
    res.send(users);
  },

  post: async (req, res) => {
    const user = new User ({
      id: faker.datatype.uuid(),
      name: req.body.name,
      university: req.body.university,
      email: req.body.email,
      password: req.body.password, // this needs to be hashes but idk how to with jwt
    });
    await user.save();
    res.send(user);
  },

  // /users/:id
  getById: async (req, res) => {
    const user = await User.find({id: req.params.userID});
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  },

  put: async (req, res) => {
    const user = await User.find({id: req.params.userID});

    user.name = req.body.name;
    await user.save();

    res.send(user);
  },

  delete: async (req, res) => {
    const user = await User.find({id: req.params.userID});

    if (user) {
      await User.deleteOne({ id: req.params.id });
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  },

  // /users/:id/notes

  getNotes: async (req, res) => {
    const usersNotes = await Note.find({id: req.params.userID});
    if (usersNotes.length > 0) {
      res.send(usersNotes);
    } else {
      res.status(404).send('User has no notes');
    }
  },

  deleteNotes: async (req, res) => {
    const usersNotes = await Note.find({id: req.params.userID});
    const notes = await Note.find();

    if (usersNotes.length > 0) {
      notes = await Note.deleteMany({user: {id: req.params.userID}});
      res.send('Notes deleted');
    } else {
      res.status(404).send('User has no notes');
    }
  },

  // /users/:id/classes

  getClasses: async (req, res) => {
    const user = await User.find({id: req.params.userID});
    if (user) {
      res.send(user.savedClasses);
    }
  },
  // /users/:id/likes

  getLikes: async (req, res) => {
    const user = await User.find({id: req.params.userID});
    if (user) {
      res.send(user.likes);
    } else {
      res.status(404).send('User not found');
    }
  },

  addClass: async (req, res) => {
    const user = await User.find({id: req.params.userID});

    const classs = await Class.find({ id: req.body.classID });

    user.savedClasses.push(classs);
    await user.save();
    res.send(user);
  },

  deleteClass: (req, res) => {
    const user = await User.find({id: req.params.userID});

    user.classes = user.classes.filter(
      (classID) => classID !== req.params.classID
    );
    await user.save();

    res.send(user);
  },
};
