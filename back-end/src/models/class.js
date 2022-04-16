var mongoose = require('mongoose');

const classs = new mongoose.Schema(
  {
    className: { type: String, required: true },
    classCode: { type: String, required: true },
    university: { type: String, required: true },
    numEnrolled: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('classs', classs);
