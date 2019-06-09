const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  userId: Number,
  date: { type: Date, default: Date.now() }
});

mongoose.model("user", userSchema);
