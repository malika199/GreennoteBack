const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FolderSchema = new Schema(
  {
    path: {
      type: String,
    },
    title: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Folder", FolderSchema);