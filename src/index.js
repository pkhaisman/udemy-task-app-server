const express = require('express');
const dbConnect = require('./db/mongoose.js');
const { postUser, getUsers, getUser } = require('./db/user/user');
const { postTask, getTasks, getTask } = require('./db/task/task');

dbConnect();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  getUsers(res);
});

app.get('/users/:id', (req, res) => {
  getUser(req, res);
});

app.post('/users', (req, res) => {
  postUser(req, res);
});

app.get('/tasks', (req, res) => {
  getTasks(res);
});

app.get('/tasks/:id', (req, res) => {
  getTask(req, res);
});

app.post('/tasks', (req, res) => {
  postTask(req, res);
});

app.listen(port, () => {
  console.log(`Started app on port ${port}`);
});
