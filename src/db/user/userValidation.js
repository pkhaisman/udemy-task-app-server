const validator = require('validator');

const validatePassword = (password) => {
  if (password === 'password') {
    throw new Error('Password cannot be "password"')
  }

  if (password.length <= 6) {
    throw new Error('Password must be longer then 6 characters')
  }
};

const validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new Error('Please provide a valid email');
  }
};

const validateAge = (age) => {
  if (age < 0) {
    throw new Error('Age must be a positive number');
  }
};

module.exports = {
  validatePassword,
  validateEmail,
  validateAge,
};
