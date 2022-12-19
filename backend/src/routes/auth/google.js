const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false,
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000?token=${req.user.generateJWT()}`);
  },
);

module.exports = router;