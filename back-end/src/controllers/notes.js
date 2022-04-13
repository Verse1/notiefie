const fake = require('../fake');
const mongoose = require('mongoose');
const Note = mongoose.model('Note', Note);
const User = mongoose.model('User', User);
const Comment = mongoose.model('Comment', Comment)
;
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

  comment: async (res, req) => {
    const note = await Note.find({id: req.params.noteID});
    const user = await User.find({id: req.body.userID});

    if (user) {
      const comment = new Comment({
        id: faker.datatype.uuid(),
        note: note,
        user: user,
        comment: req.body.comment,
      });
      await comment.save();
      note.comments.push(comment);
      await note.save();
    } else {
      res.status(404).send('Unable to post comment');

    }
  },

  likeComment: async (res, req) => {
    const comment = await Comment.find({id: req.params.commentID});
    let liked = req.body.liked;

    if (comment && liked) {
      comment.likes += 1;
      await comment.save();

      res.send(comment);
      
    } else if (comment && !liked) {
      comment.likes -= 1;
      await comment.save();

      res.send(comment);
    } else {
      res.status(404).send('Comment not found');
    }
  },

  getComments: async (res, req) => {
    const noteComments = await Comment.find({note: {id: req.params.noteID}});
    if (noteComments.length > 0) {
      res.send(noteComments);
    } else {
      res.status(404).send('Note has no comments');
    }
  }
};
