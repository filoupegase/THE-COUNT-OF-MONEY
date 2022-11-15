const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/user'); TODO Need to create a user moder

// User signup
passport.use('signup',
  new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.create({email, password});
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// User login
passport.use('login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({email});
        if (!user) {
          return done(null, false, {message: 'User not found'});
        }
        const validate = await user.isValidPassword(password);
        if (!validate) {
          return done(null, false, {message: 'Wrong Password'});
        }
        return done(null, user, {message: 'Logged in Successfully'});
      } catch (error) {
        return done(error);
      }
    }
  )
);