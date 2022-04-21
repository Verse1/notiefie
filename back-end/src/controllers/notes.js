const users = require('./../models/user');
const notes = require('../models/note');
const comments = require('../models/comment');
const mongoose = require('mongoose');

module.exports = {
  get: async (req, res) => {
    const notess = await notes.find();
    res.send(notess);
  },

  post: async (req, res) => {
    try {
      const note = new notes({
        className: req.body.className,
        title: req.body.title,
        user: req.body.user,
        text: req.body.text,
      });
      await note.save();
      res.send(note);
    } catch (err) {
      console.log(err);
    }
  },

  getById: async (req, res) => {
    try {
      const note = await notes.findById(req.params.id);
      if (note) {
        res.send(note);
      } else {
        res.status(404).send('Note not found');
      }
    } catch (err) {
      res.status(404).send('Note not found');
    }
  },

  put: async (req, res) => {
    try {
      const note = await notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(note);
    } catch (err) {
      res.status(404).send('Note not found');
    }
  },

  delete: async (req, res) => {
    try {
      const note = await notes.findById(req.params.id);

      await note.remove();
      res.send('Note deleted');
    } catch (err) {
      console.log(err);
    }
  },

  like: async (req, res) => {
    try {
      const note = await notes.findById(req.params.id);
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
    } catch (err) {
      res.status(404).send('Note not found');
    }
  },

  comment: async (req, res) => {
    try {
      const note = await notes.findById(req.params.id);

      note.comments.push({
        _id: mongoose.Types.ObjectId(),
        user: req.body.user,
        text: req.body.text,
        likes: 0,
      });
      await note.save();
      res.send(note);
    } catch (err) {
      console.log(err);
      res.status(404).send('Unable to post comment');
    }
  },

  likeComment: async (req, res) => {
    try {
      const comment = await comments.findById(req.params.id);
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
    } catch (err) {
      res.status(404).send('Comment not found');
    }
  },

  getComments: async (req, res) => {
    try {
      const noteComments = await notes.findById(req.params.id);
      if (noteComments.comments.length > 0) {
        res.send(noteComments.comments);
      } else {
        res.status(404).send('Note has no comments');
      }
    } catch (err) {
      res.status(404).send('Note has no comments');
    }
  },
};
