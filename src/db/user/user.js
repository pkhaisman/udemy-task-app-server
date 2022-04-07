const { UserModel } = require('./userModel');

const createUser = (req) => {
  return new UserModel(req.body);
};

const postUser = (req, res) => {
  const newUser = createUser(req);
  newUser
    .save()
    .then((user) => res.status(201).send(user))
    .catch((e) => res.status(500).send(e));
};

const getUsers = (res) => {
  UserModel.find({})
    .then((users) => res.status(200).send(users))
    .catch((e) => res.status(500).send(e));
};

const getUser = (req, res) => {
  console.log('getting User with id: ' + req.params.id)

  UserModel.findById(req.params.id)
    .then((user) => {
      if (!user) {
        console.log('User not found')
        return res.status(404).send('User not found');
      }
      
      console.log(`user: ${user}`)
      res.status(200).send(user);
    })
    .catch((e) => res.status(500).send(e));
};

module.exports = { postUser, getUsers, getUser };
