const mongoose = require('mongoose');
const c = required('./class');
const note = require('./note');

const Class = mongoose.model('Class');
const Note = mongoose.model('Note');

const User = new mongoose.Schema({
    uuid: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    postedNotes: [Note],
    likedNotes: [Note],
    likes: {type: Number, required: true, default: 0},
    email: {type: String, required: true, unique: true},
    savedClasses: [Class],
    createdAt: {type: Date, default: Date.now}

});

mongoose.model('User', User);
