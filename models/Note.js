const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    path: {
      type: String,
      default: 'draft',
    },
    title: {
      type: String,
      default: "Untitled",
    },
    Lines: [{ type: Schema.Types.ObjectId, ref: 'Line' }],
    Collaborators: [{ type: Schema.Types.ObjectId, ref: 'User'  }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
