module.exports = {
    get: (req, res) => {
        res.send({msg: "You called the protected endpoint!"});
    },
    post: async (req, res) => {
        const user = new users({
          name: req.body.name,
          university: req.body.university,
          email: req.body.email,
        });
    
        if (users.exists({ email: req.body.email })) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
          res.json({ user, token });
        } else {
          try {
            await user.save();
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.json({ user, token });
          } catch (err) {
            console.log(err);
          }
        }
      },
}