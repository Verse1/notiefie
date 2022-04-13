const fake = require('../fake');
const mongoose = require('mongoose');
const Note = mongoose.model('Note', Note);

const notes = fake.fakeNotes;
const faker = require('faker');
const users = require('./users');

module.exports = {
  get: async(req, res) => {
    const notes = await Note.find()
    res.send(notes);
  },

  post: (req, res) => {
    const note = new Note({
      id: faker.datatype.uuid(),
      className: req.body.class,
      noteTitle: req.body.title,
      user: req.body.user,
      text: req.body.text,
      attachments: req.body.attachments,
    });
    await note.save();
    res.send(note);
    // res.redirect('http://localhost:3000/class');
  },

  getById: async (req, res) => {
    const note = await Note.find({id: req.params.noteID});
    if (note) {
      res.send(note);
    } else {
      res.status(404).send('Note not found');
    }
  },

  put: async (req, res) => {
    const note = await Note.find({id: req.params.noteID});

    if (req.body.noteTitle) {
      note.noteTitle = req.body.noteTitle;
      await note.save(); 
    }
    if (req.body.text) {
      note.text = req.body.text;
      await note.save(); 
    }
    res.send(note);
  },

  delete: async (req, res) => {
    const note = await Note.find({id: req.params.noteID});

    if (note) {
      notes.splice(notes.indexOf(note));
      res.send('Note deleted');
    } else {
      res.status(404).send('Note not found');
    }
  },

  like: async (req, res) => {
    const note = await Note.find({id: req.params.noteID});
    let liked = req.body.liked;

    if (note && liked) {
      note.likes += 1;
      await note.save();

      res.send(note);
      
    } else if (note && !liked) {
      note.likes -= 1;
      await note.save();

      res.send(note);
    } else {
      res.status(404).send('Note not found');
    }
  },
};
