const mongoose = require('mongoose');

const file = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, 'Uploaded file must have a name'],
  },
});

mongoose.model('file', file);
