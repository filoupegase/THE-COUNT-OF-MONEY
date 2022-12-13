const express = require('express');
const passport = require("passport");

const router = express.Router();

const isAdmin = require("./auth/roles");


// Unprotected routes
router.use('/', require("./routes/unprotected/default")); // Default routes TODO Remake this
router.use('/crypto', require("./routes/crypto")); // Crypto routes accessable by everyone
router.use('/rss', require("./routes/rss")); // RSS routes accessable by everyone')

// Google OAuth routes
router.use('/auth/google', require("./routes/auth/google"));

// User protected routes, just check the jwt
router.use('/user', passport.authenticate('jwt', {session: false}), require('./routes/user'));

// Admin protected routes
router.use('/admin', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/admin/admin'));
router.use('/admin/rss', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/admin/rss'));
router.use('/settings', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/settings'));

module.exports = router;