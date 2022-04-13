
const mongoose = require('mongoose');
const user = require('./user');

const User = mongoose.model('User', User);
const Note = mongoose.model('Note', Note);

const Comment = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    note: Note,
    user: User,
    likes: {type: Number, required: true, default: 1},
    comment: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

mongoose.model('Comment', Comment);