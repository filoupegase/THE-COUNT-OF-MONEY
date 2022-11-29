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

// Login
router.post('/auth/login/', async (req, res, next) => {
  console.log("== Login ==");
  passport.authenticate('login', async (err, user, info) => {
      try {
        if (err || !user) {
          console.log(err);
          const error = new Error('An Error occurred');
          return next(error);
        }
        req.login(user, {session: false}, async (error) => {
            if (error) return next(error);
            const body = {_id: user._id, email: user.email, username: user.username,  roles: user.roles};
            const token = jwt.sign({user: body}, process.env.JWT_SECRET);
            return res.json({token});
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
});


module.exports = router;