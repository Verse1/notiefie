const mongoose = require('mongoose');
const User = mongoose.model('User');

const Notification = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    user: User,
    seen: {type: Boolean, default: false},
    date: {type: Date},
    createdAt: {type: Date, default: Date.now}
});

mongoose.model('Notification', Notification);