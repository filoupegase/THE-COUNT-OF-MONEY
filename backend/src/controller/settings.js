const Settings = require('../models/settings');

exports.getSettings = () => {
  return Settings.findOne({})
    .then(settings => {
      if (!settings) {
        throw Error('Settings not found');
      }
      return settings;
    })
    .catch(err => {
      throw err;
    });
}

exports.updateSettings = (req, res, next) => {
  Settings.findOneAndUpdate({}, req.body, {new: true}, (err, settings) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(settings);
  });
}

