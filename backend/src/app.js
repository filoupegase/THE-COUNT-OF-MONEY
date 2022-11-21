const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const UserModel = require('./models/user');

mongoose.connect('mongodb://cuicui:cuicui@localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', error => console.log(error));
mongoose.promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoutes = require('./routes/secure-routes');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.use('/user', passport.authenticate('jwt', {session: false}), secureRoutes);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));