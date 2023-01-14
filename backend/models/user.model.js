const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: (newEmail) => validator.isEmail(newEmail),
  },
  phone: { type: String, require: true },
  profession: { type: String, require: true },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
