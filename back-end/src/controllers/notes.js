const users = require('./../models/user');
const notesss = require('../models/note');
const comments = require('../models/comment');
const classes = require('../models/class');
const mongoose = require('mongoose');

module.exports = {
  get: async (req, res) => {
    const notess = await notesss.find();
    res.send(notess);
  },

  post: async (req, res) => {
    try {
      const note = new notesss({
        className: req.body.className,
        title: req.body.title,
        user: req.user,
        text: req.body.text,
      });

      const classs = await classes
        .findOne({ className: req.body.className })
        .exec();

      const user = await users.findById(req.user);

      user.postedNotes.push(note._id.toString());
      user.likedNotes.push(note._id.toString());
      classs.notes.push(note._id.toString());

      await user.save();
      await classs.save();
      await note.save();

      res.send(note);
    } catch (err) {
      console.log(err);
    }
  },

  getById: async (req, res) => {
    try {
      const note = await notesss.findById(req.params.id);
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
      const note = await notesss.findById(req.params.id);
      const user = await users.findById(req.user);

      await note.remove();
      console.log(user);
      user.postedNotes = user.postedNotes.filter(
        (note) => note !== req.params.id
      );
      user.likedNotes = user.likedNotes.filter(
        (noteId) => noteId !== req.params.id
      );
      await user.save();
      console.log(user);
      res.send('Note deleted');
    } catch (err) {
      console.log(err);
    }
  },

  like: async (req, res) => {
    try {
      const note = await notesss.findById(req.params.id);
      const user = await users.findById(req.user);

      let liked = req.body.liked;

      if (note && liked) {
        note.likes += 1;
        user.likedNotes.push(note._id.toString());
        await note.save();
        await user.save();
        res.send(note);
      } else if (note && !liked) {
        note.likes -= 1;
        user.likedNotes.pull(note);
        console.log(note._id);
        user.likedNotes = user.likedNotes.filter(
          (like) => like.toString() !== note._id.toString()
        );
        await note.save();
        await user.save();
        res.send(note);
      } else {
        res.status(404).send('Note not found');
      }
    } catch (err) {
      console.log(err);
      res.status(404).send('Note not found');
    }
  },

  comment: async (req, res) => {
    try {
      const note = await notesss.findById(req.params.id);

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
      const noteComments = await notesss.findById(req.params.id);
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
