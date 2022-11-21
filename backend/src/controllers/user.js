const User = require('../models/user');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.password = undefined;
    res.send(user);
  } catch (error) {
    res.send
  }
}