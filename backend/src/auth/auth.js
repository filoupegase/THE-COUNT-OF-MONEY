const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user');

passport.use('signup',
  new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    }, async (req, email, password, done) => {
      try {
        // Verify if the email has a good format
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
          throw new Error("Email has a bad format")

        // Verify if the email is already in use
        if (await UserModel.findOne({email}))
          throw new Error("Email is already in use")

        // Verify if the username is already in use
        if (await UserModel.findOne({username: req.body.username}))
          throw new Error("Username is already in use")

        if (password.length < 8)
          throw new Error("Password is too short 8 characters minimum")

        const user = await UserModel.create({
          email,
          password,
          username: req.body.username
        });
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

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        const user = await UserModel.findById(token.user._id);
        if (!user) {
          return done(null, false, {message: 'User not found'});
        }
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:4000/api/auth/google/callback',
      scope: ['profile', 'email'],
      passReqToCallback: true
    }, async (req, accessToken, refreshToken, profile, done) => {
      try {
        // Find user by google id or email
        const user = await UserModel.findOne({
          $or: [
            {googleId: profile.id},
            {email: profile.emails[0].value}
          ]
        });

        if (!user) {
          // Create a new user
          const newUser = await UserModel.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            username: profile.displayName,
            password: Math.random().toString(36).substring(-10)
          });
          return done(null, newUser);
        }
        // If the user exist verify if the googleId is set
        if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);