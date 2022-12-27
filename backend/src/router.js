const express = require('express');
const passport = require("passport");

const router = express.Router();

const isAdmin = require("./auth/roles");


// [DEBUG] Console log all the routes
router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

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
router.use('/admin/crypto', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/admin/crypto'));
router.use('/admin/users', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/admin/users'));
router.use('/settings', passport.authenticate('jwt', {session: false}), isAdmin, require('./routes/settings'));

module.exports = router;