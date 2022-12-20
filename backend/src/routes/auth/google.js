const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/callback',
  passport.authenticate('google', {

    failureRedirect: `http://localhost:${process.env.PORT_FRONTEND}`,
    session: false,
  }),
  (req, res) => {
    res.redirect(`http://localhost:${process.env.PORT_FRONTEND}?token=${req.user.generateJWT()}`);
  },
);

module.exports = router;