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
    return res.json({token: user.generateJWT(), user: user});
  });
});

module.exports = router;