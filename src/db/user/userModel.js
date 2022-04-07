const mongoose = require('mongoose');

const { name, age, email, password } = require('./userFields.js');

const userSchema = new mongoose.Schema({
  name,
  age,
  email,
  password,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel };
