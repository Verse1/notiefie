var mongoose = require('mongoose');

const Class = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    className: {type: String, required: true,},
    classCode: {type: String, required: true},
    university: {type: String, required: true},
    numEnrolled: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}

});

mongoose.model('Class', Class);
