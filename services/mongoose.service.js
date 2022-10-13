const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("DATABASE Connection Successfull 🔥🔥🔥 "))
    .catch((err) => {
      console.error(err);
    });
  };