const fake = require('../fake');

const users = fake.fakeUsers;
const notes = fake.fakeNotes;

const faker = require('faker');

module.exports = {
  // /users
  get: (req, res) => {
    res.send(users);
  },

  post: (req, res) => {
    const user = {
      id: faker.datatype.uuid(),
      name: req.body.name,
      university: req.body.university,
      email: req.body.email,
      password: req.body.password,
      createdAt: faker.date.past(),
    };
    users.push(user);
    res.send(user);
  },

  // /users/:id
  getById: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  },

  put: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);

    user.name = req.body.name;

    res.send(user);
  },

  delete: (req, res) => {
    let user = users.find((user) => user.id === req.params.id);

    if (user) {
      users.splice(users.indexOf(user), 1);
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  },

  // /users/:id/notes

  getNotes: (req, res) => {
    let usersNotes = notes.filter((note) => note.user === req.params.id);
    if (usersNotes.length > 0) {
      res.send(usersNotes);
    } else {
      res.status(404).send('User has no notes');
    }
  },

  deleteNotes: (req, res) => {
    let usersNotes = notes.filter((note) => note.user === req.params.id);

    if (usersNotes.length > 0) {
      notes = notes.filter((note) => note.id !== req.params.noteId);
      res.send('Notes deleted');
    } else {
      res.status(404).send('User has no notes');
    }
  },
};
