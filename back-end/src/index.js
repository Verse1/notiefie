const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { expressjwt: jwt } = require('express-jwt');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3001;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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

app.use((req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded?.userId;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Please authenticate' });
  }
});

// app.use("/api", jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }));

app.listen(port);

module.exports = app;
