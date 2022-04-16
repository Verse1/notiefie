const mongoose = require('mongoose');
const file = require('./file');

const note = new mongoose.Schema({
  className: { type: String, required: true, unique: true },
  noteTitle: { type: String, required: true },
  user: { type: String, required: true },
  text: { type: String },
  likes: { type: Number, required: true, default: 1 },
  comments: { type: Array, default: [] },
  attachments: [file],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('note', note);
