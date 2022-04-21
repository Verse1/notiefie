const mongoose = require('mongoose');

const note = new mongoose.Schema(
  {
    className: { type: String, required: true},
    title: { type: String, required: true },
    user: { type: String, required: true },
    text: { type: String },
    likes: { type: Number, required: true, default: 1 },
    comments: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('note', note);
