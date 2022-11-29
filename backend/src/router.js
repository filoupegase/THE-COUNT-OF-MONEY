const express = require('express');
const passport = require("passport");

const router = express.Router();

const isAdmin = require("./auth/roles");


// Unprotected routes
router.use('/', require("./routes/default"));
router.use('/crypto', require("./routes/crypto"));
router.use('/rss', require("./routes/rss"));


// User protected routes
router.use('/user', passport.authenticate("jwt", {session: false}), require("./routes/user"));

// Admin protected routes
router.use('/admin', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/admin'));
router.use('/settings', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/settings'));

module.exports = router;