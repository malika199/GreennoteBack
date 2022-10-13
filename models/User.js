const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilPecture: {
    type: String,
    default: false,
  },
  subscription: {
    type: Date,
  },
  isActivate: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", userSchema);
