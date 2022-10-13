const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineSchema = new Schema(
  {
    type: {
      type: String,
    },
    url: {
      type: String,
    },
    styles: [
      { type: String }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Line", LineSchema);