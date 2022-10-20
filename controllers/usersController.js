const User = require("../models/User");

exports.getUser = (req, res) => {
  console.log(req.user);
  User.findById(req.user.id)
    .then((user) => {
      
      const { password, ...info } = user;
      
      res.status(200).json(info);
      res.send(user);
    })
    .catch((err) => res.status(404).send(err));
};
exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  })
    .then((data) => {
      const { password, ...info } = data;
      
      res.status(200).json(info);
    })
    .catch((err) => res.status(500).json({ err: err }));
};

exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
