const express = require('express');
const SettingController = require('../controller/settings');

const router = express.Router();

router.get('/', (req, res, next) => {
    SettingController.getSettings()
      .then(settings => res.json(settings))
      .catch(err => next(err));
  }
);
router.put('/', SettingController.updateSettings);

module.exports = router;


