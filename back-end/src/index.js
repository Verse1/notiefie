const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { expressjwt: jwt } = require('express-jwt');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3001;
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/users/user', require('./auth'));

app.use('/api', require('./routes'));

const URI = process.env.MONGO_URI;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Mongoose is connected')
  );
} catch (err) {
  console.log('could not connect, error: ', err);
}

// middleware to verify jwt

// app.use("/api", jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }));

app.listen(port);

module.exports = app;
