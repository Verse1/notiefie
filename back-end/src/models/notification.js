const mongoose = require('mongoose');

const notification = new mongoose.Schema({
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  seen: { type: Boolean, default: false },
  date: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('notification', notification);
