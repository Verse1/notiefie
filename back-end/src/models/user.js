const mongoose = require('mongoose');
const c = required('./class');
const note = require('./note');

const Class = mongoose.model('Class', Class);
const Note = mongoose.model('Note', Note);

const User = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    university: {type: String, required: true, unique: true},
    postedNotes: [Note],
    likedNotes: [Note],
    likes: {type: Number, required: true, default: 0},
    email: {type: String, required: true, unique: true},
    savedClasses: [Class],
    createdAt: {type: Date, default: Date.now}

});

mongoose.model('User', User);
