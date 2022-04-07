const { TaskModel } = require('./taskModel');

const postTask = (req, res) => {
  const newTask = new TaskModel(req.body);
  newTask
    .save()
    .then((task) => res.status(201).send(task))
    .catch((e) => res.status(500).send(e));
};

const getTasks = (res) => {
  console.log('getting tasks');

  TaskModel.find({})
    .then((tasks) => res.status(200).send(tasks))
    .catch((e) => res.status(500).send(e));
};

const getTask = (req, res) => {
  TaskModel.findById(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(404).send('Task not found');
      }

      res.status(200).send(task);
    })
    .catch((e) => res.status(500).send(e));
};

module.exports = { postTask, getTasks, getTask };
