const mongoose = require('mongoose');

const File = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: [true, "Uploaded file must have a name"],
    },
});

mongoose.model('File', File);