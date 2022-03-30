const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.end()
});

app.listen(port);
