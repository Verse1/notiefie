const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded?.userId;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: 'Please authenticate' });
  }
}

module.exports = auth;
