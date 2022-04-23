module.exports = {
    get: (req, res) => {
        res.send({msg: "You called the protected endpoint!"});
    },
}