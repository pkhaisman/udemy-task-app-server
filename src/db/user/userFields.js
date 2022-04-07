const {
  validatePassword,
  validateEmail,
  validateAge,
} = require('./userValidation.js');

const name = {
  type: String,
  required: true,
  trim: true,
};

const age = {
  type: Number,
  default: 0,
  validate: (a) => validateAge(a),
};

const email = {
  type: String,
  required: true,
  trim: true,
  lowercase: true,
  validate: (e) => validateEmail(e),
};

const password = {
  type: String,
  required: true,
  trim: true,
  validate: (p) => validatePassword(p),
};

module.exports = {
  name,
  age,
  email,
  password,
};
