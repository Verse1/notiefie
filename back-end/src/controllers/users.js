const fake = require('../fake');

const users = fake.users(10);

module.exports = {
  get: (req, res) => {
    res.send(users);
  },

  post: (req, res) => {
    res.send('/profile POST');
  },

  getById: (req, res) => {
    res.send(users[req.params.id]);
  },

  put: (req, res) => {
    res.send('/profile/:id PUT');
  },

  delete: (req, res) => {
    
    res.send('/profile/:id DELETE');
  },
};
