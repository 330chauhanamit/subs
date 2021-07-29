const mongoose = require("mongoose");
// const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

mongoose.model("User", userSchema);
