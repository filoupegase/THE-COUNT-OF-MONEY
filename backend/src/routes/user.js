const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

router.get('/profile', (req, res, next) => {
  res.json(req.user);
});

router.post('/', (req, res, next) => {
  if (req.body.password)
    delete req.body.password;
  UserModel.findByIdAndUpdate(req.user, req.body, {new: true}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(user);
  });
});

// Init the user table if it's empty 
UserModel.countDocuments({}, (err, count) => {
  if (err) {
    console.log(err);
  } else if (count === 0) {
    const admin = new UserModel({
      username: 'admin',
      email: 'admin@localhost',
      password: 'admin123',
      roles: ['user', 'admin']
    });

    const user = new UserModel({
      username: 'user',
      email: 'user@localhost',
      password: 'user123'
    });
    admin.save();
    user.save();
  }
});

module.exports = router;