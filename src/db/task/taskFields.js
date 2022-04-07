const title = {
  type: String,
  trim: true,
  required: true
};

const completed = {
  type: Boolean,
  default: false
};

module.exports = {
  title,
  completed,
};
