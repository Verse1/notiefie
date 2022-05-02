const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3001;
app.use(
  cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/users/user', require('./auth'));
app.use('/api/notes', require('./auth'));

app.use('/api', require('./routes'));

const URI = process.env.MONGO_URI;

(async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(
      URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log('Mongoose is connected')
    );
  } catch (err) {
    console.log('could not connect, error: ', err);
  }
})();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port);

module.exports = app;
