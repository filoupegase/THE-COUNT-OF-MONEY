const UserModel = require('../models/user');

function isAdmin(req, res, next) {
  if (req.user.roles.includes('admin'))
    return next();
  res.status(401).json({message: 'Sorry, you are not an admin !'});
}

module.exports = isAdmin;