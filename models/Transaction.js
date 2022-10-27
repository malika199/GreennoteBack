const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    status: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    subscribtion: { type: Schema.Types.ObjectId, ref: "Subscribtion" },
    date: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
