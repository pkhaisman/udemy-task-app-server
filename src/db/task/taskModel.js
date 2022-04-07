const mongoose = require('mongoose');

const { title, completed } = require('./taskFields');

const taskSchema = new mongoose.Schema({
  title,
  completed,
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = { TaskModel };
