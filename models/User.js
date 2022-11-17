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
  notes: [
    type: Schema.Types.ObjectId, ref: 'Note'
  ],
  folders: [
    type: Schema.Types.ObjectId, ref: 'Folder'
  ]
});

module.exports = mongoose.model("User", userSchema);
