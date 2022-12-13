const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', error => console.log(error));
mongoose.promise = global.Promise;

// Initialize passport for the authentication
require('./auth/auth');

// Initialize the database with some default values (if empty)
mongoose.connection.on('connected', async () => {
  await require('./controller/init');
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', require('./router'));

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(4000, () => console.log('Server running on port 4000'));