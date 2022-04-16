const users = require('./users');
const notes = require('../models/note');
const comment = require('../models/comment');

module.exports = {
  get: async (req, res) => {
    const notess = await notes.find();
    res.send(notes);
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
    // res.redirect('http://localhost:3000/class');
  },

  getById: async (req, res) => {
    const note = await Note.find({ id: req.params.noteID });
    if (note) {
      res.send(note);
    } else {
      res.status(404).send('Note not found');
    }
  },

  put: async (req, res) => {
    const note = await Note.find({ id: req.params.noteID });

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
    try {
      const note = await notes.findById(req.params.id);

      await note.remove();
      res.send("Note deleted");
    } catch (err) {
      console.log(err);
    }
  },

  like: async (req, res) => {
    const note = await Note.find({ id: req.params.noteID });
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
    const note = await Note.find({ id: req.params.noteID });
    const user = await User.find({ id: req.body.userID });

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
    const comment = await Comment.find({ id: req.params.commentID });
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
    const noteComments = await Comment.find({
      note: { id: req.params.noteID },
    });
    if (noteComments.length > 0) {
      res.send(noteComments);
    } else {
      res.status(404).send('Note has no comments');
    }
  },
};
