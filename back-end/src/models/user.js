const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    university: { type: String, required: true, unique: true },
    postedNotes: { type: Array, default: [] },
    likedNotes: { type: Array, default: [] },
    likes: { type: Number, required: true, default: 0 },
    email: { type: String, required: true, unique: true },
    savedClasses: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', user);

