const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../controllers/user');

router.get('/profile', (req, res, next) => {
  userController.getUserProfile(req, res);
});

module.exports = router;