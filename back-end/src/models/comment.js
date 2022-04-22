const mongoose = require('mongoose');

const comment = new mongoose.Schema(
  {
    note: { type: mongoose.Schema.Types.ObjectId, ref: 'note' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    likes: { type: Number, required: true, default: 1 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('comment', comment);
