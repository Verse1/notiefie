const mongoose = require('mongoose');
const c = require('./class');
const comment = require('./comment');
const user = require('./user');
const file = require('./file');

const Class = mongoose.model('Class');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const File = mongoose.model('File');

const Note = new mongoose.Schema({
    uuid: {type: String, required: true, unique: true},
    className: {type: String, required: true, unique: true},
    noteTitle: {type: String, required: true},
    user: User,
    likes: {type: Number, required: true, default: 0},
    comments: [Comment],
    attachments: [File],
    createdAt: {type: Date, default: Date.now}

});

mongoose.model('Note', Note);