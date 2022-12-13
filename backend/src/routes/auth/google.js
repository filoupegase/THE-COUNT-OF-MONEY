const express = require('express');
const router = express.Router();
const passport = require('passport');

//  This file have the routes of the google authentication

router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false,
  }),
  (req, res) => {
    res.json({token: req.user.generateJWT()});
  },
);

module.exports = router;