const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre("save", function preSave(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
