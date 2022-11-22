const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', error => console.log(error));
mongoose.promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const isAdmin = require("./auth/roles");


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.use('/api/user', passport.authenticate('jwt', {session: false}), userRoutes);

app.use('/api/admin', passport.authenticate('jwt', {session: false}), isAdmin, adminRoutes);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));