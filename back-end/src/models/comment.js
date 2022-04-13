
const mongoose = require('mongoose');
const user = require('./user');

const User = mongoose.model('User');

const Comment = new mongoose.Schema({
    uuid: {type: String, required: true, unique: true},
    user: User,
    likes: {type: Number, required: true, default: 0},
    comment: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

mongoose.model('Comment', Comment);