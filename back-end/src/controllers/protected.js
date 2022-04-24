module.exports = {
  get: (req, res) => {
    if (!req.auth.admin) return res.sendStatus(401);
    res.sendStatus(200);
  },
};
