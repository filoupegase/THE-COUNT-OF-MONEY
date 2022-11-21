const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});

// Sign up
router.post('/auth/signup/', passport.authenticate('signup', {session: false}),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);


module.exports = router;