const users = require('./../models/user');
const notes = require('../models/note');
const comments = require('../models/comment');

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

  comment: async (res, req) => {
    try {
      const note = await notes.findById(req.params.id);
      const user = await users.findById(req.body.user);

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
      res.send(note);
    } catch (err) {
      res.status(404).send('Unable to post comment');
    }
  },

  likeComment: async (res, req) => {
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

  getComments: async (res, req) => {
    const noteComments = await comments.find({ note: req.params.id });
    if (noteComments.length > 0) {
      res.send(noteComments);
    } else {
      res.status(404).send('Note has no comments');
    }
  },
};
