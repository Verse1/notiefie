const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3001;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

const URI = process.env.MONGO_URI;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected')
  );
} catch {
  console.log('could not connect');
}

app.listen(port);

module.exports = app;
